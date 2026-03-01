import { NextRequest, NextResponse } from "next/server";
import { violationSchema } from "@/lib/schemas";
import { sendViolationEmail } from "@/lib/email";
import type { ApiResponse, FileMetadata } from "@/lib/types";

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    let body: Record<string, unknown>;
    let files: FileMetadata[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      body = Object.fromEntries(
        Array.from(formData.entries()).filter(([, v]) => !(v instanceof File))
      );
      const uploadedFiles = formData.getAll("files") as File[];
      files = uploadedFiles.map((f) => ({
        name: f.name,
        size: f.size,
        type: f.type,
      }));
    } else {
      body = await request.json();
    }

    const result = violationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors as Record<string, string[]>,
        },
        { status: 400 }
      );
    }

    const { error } = await sendViolationEmail({
      ...result.data,
      files,
    });

    if (error) {
      return NextResponse.json(
        { success: false, message: "Failed to submit violation form. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your violation response has been submitted and routed to our compliance team.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
