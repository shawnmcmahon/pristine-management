import { NextRequest, NextResponse } from "next/server";
import { managementRequestSchema } from "@/lib/schemas";
import { sendManagementRequestEmail } from "@/lib/email";
import type { ApiResponse } from "@/lib/types";

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const result = managementRequestSchema.safeParse(body);

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

    const { error } = await sendManagementRequestEmail(result.data);

    if (error) {
      return NextResponse.json(
        { success: false, message: "Failed to send request. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your management request has been received. We will contact you within one business day.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
