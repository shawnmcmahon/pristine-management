import { z } from "zod";
import { ViolationResolution } from "@/lib/types";

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const managementRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  propertyAddress: z.string().min(5, "Property address is required"),
  hoaName: z.string().min(1, "Community / HOA name is required"),
  requestType: z.string().min(1, "Request type is required"),
  description: z.string().min(10, "Please provide a description (min 10 characters)"),
});

export const violationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  propertyAddress: z.string().min(5, "Property address is required"),
  hoaName: z.string().min(1, "Community / HOA name is required"),
  resolution: z.nativeEnum(ViolationResolution, {
    errorMap: () => ({ message: "Please select a resolution type" }),
  }),
  additionalComments: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ManagementRequestFormData = z.infer<typeof managementRequestSchema>;
export type ViolationFormData = z.infer<typeof violationSchema>;
