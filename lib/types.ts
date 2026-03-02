// ─── Core Content Types ───────────────────────────────────────────────────────

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: "hoa" | "metro" | "general" | "financial" | "portal";
}

// ─── Violation Form ───────────────────────────────────────────────────────────

export enum ViolationResolution {
  CORRECTED = "Violation Corrected",
  HEARING = "Request Board Hearing to Dispute Violation",
  ERROR = "Report Error in Violation Notice",
  PLAN = "Plan for Violation Correction (Long-Term Items)",
}

export interface ViolationFormPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  hoaName: string;
  resolution: ViolationResolution;
  additionalComments?: string;
  files?: FileMetadata[];
}

export interface FileMetadata {
  name: string;
  size: number;
  type: string;
  content?: string;
}

// ─── Contact & Management Request Forms ──────────────────────────────────────

export interface ContactFormPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ManagementRequestPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  hoaName: string;
  requestType: string;
  description: string;
}

// ─── API Response ─────────────────────────────────────────────────────────────

export interface ApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
