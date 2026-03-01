import { emailConfig } from "@/lib/config";
import type {
  ContactFormPayload,
  ManagementRequestPayload,
  ViolationFormPayload,
} from "@/lib/types";

async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ success: boolean; error?: string }> {
  if (!emailConfig.resendApiKey) {
    console.warn("RESEND_API_KEY not set — email not sent");
    return { success: true };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(emailConfig.resendApiKey);
    const { error } = await resend.emails.send({
      from: emailConfig.fromAddress,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    });
    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: message };
  }
}

export async function sendContactEmail(
  payload: ContactFormPayload
): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    to: emailConfig.contactRecipient,
    replyTo: payload.email,
    subject: `Contact Form: ${payload.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      ${payload.phone ? `<p><strong>Phone:</strong> ${payload.phone}</p>` : ""}
      <p><strong>Subject:</strong> ${payload.subject}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p>${payload.message.replace(/\n/g, "<br/>")}</p>
    `,
  });
}

export async function sendManagementRequestEmail(
  payload: ManagementRequestPayload
): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    to: emailConfig.managementRequestRecipient,
    replyTo: payload.email,
    subject: `Management Request: ${payload.requestType} — ${payload.hoaName}`,
    html: `
      <h2>New Management Request</h2>
      <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Property Address:</strong> ${payload.propertyAddress}</p>
      <p><strong>Community / HOA:</strong> ${payload.hoaName}</p>
      <p><strong>Request Type:</strong> ${payload.requestType}</p>
      <hr/>
      <p><strong>Description:</strong></p>
      <p>${payload.description.replace(/\n/g, "<br/>")}</p>
    `,
  });
}

export async function sendViolationEmail(
  payload: ViolationFormPayload
): Promise<{ success: boolean; error?: string }> {
  return sendEmail({
    to: emailConfig.violationsRecipient,
    replyTo: payload.email,
    subject: `Violation Response: ${payload.resolution} — ${payload.hoaName}`,
    html: `
      <h2>Violation Form Submission</h2>
      <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Property Address:</strong> ${payload.propertyAddress}</p>
      <p><strong>Community / HOA:</strong> ${payload.hoaName}</p>
      <p><strong>Resolution Selected:</strong> ${payload.resolution}</p>
      ${
        payload.additionalComments
          ? `<hr/><p><strong>Additional Comments:</strong></p><p>${payload.additionalComments.replace(/\n/g, "<br/>")}</p>`
          : ""
      }
      ${
        payload.files && payload.files.length > 0
          ? `<hr/><p><strong>Attached Files:</strong></p><ul>${payload.files.map((f) => `<li>${f.name} (${(f.size / 1024).toFixed(1)} KB)</li>`).join("")}</ul>`
          : ""
      }
    `,
  });
}
