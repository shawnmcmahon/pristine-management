# Pristine Management Website Project Plan (/1 Canonical Design)

## Summary
Deliver a production-ready Next.js marketing site for Pristine Management with full content and form functionality, with `/1` as the single canonical design.
This plan defines scope, structure, interfaces, testing, and acceptance criteria for the `/1` implementation.

## Plan File Deliverable
Create a markdown plan file at:

`c:\Users\shawn\Documents\Code\pristine-management\project-plan.md`

Populate it with this plan (or an equivalent decision-complete version).

## Scope and Required Pages (Canonical `/1`)
The canonical `/1` implementation must include these pages and flows:

1. Home
2. About
3. Services
4. FAQ
5. Homeowner Portal
6. Lender Services
7. Violations
8. Contact (or contact section if routed from nav, but endpoint behavior must be identical)

Required route structure (example for variant 1):
1. `/1`
2. `/1/about`
3. `/1/services`
4. `/1/faq`
5. `/1/homeowner-portal`
6. `/1/lender-services`
7. `/1/violations`
8. `/1/contact`

## Content and Messaging Requirements
1. Clearly explain differences between traditional HOAs and Metro Districts.
2. Clearly state Pristine Management serves both HOA types and specializes in Metro Districts.
3. Include mission statement and values overview.
4. Include service descriptions for:
   - Financial Management
   - Admin Support
   - Property Maintenance
   - Legal Compliance
   - Vendor Management
   - Modern Communication and Financial Planning
   - Technology Integrations
   - Insurance Management
5. Use inspiration sites for copy direction only, without copying design patterns.
6. Do not include messaging that the business is "new."

## External Links and Portal Requirements
1. Homeowner Portal page must provide a prominent, above-the-fold Vantaca login CTA.
2. Payments entry must also link to the Vantaca generic login page.
3. Lender Services page must link to HomeWiseDocs.

## Forms and Submission Behavior
Implement production form submission (not placeholder-only) for:
1. Contact form
2. Management request form
3. Violations form

Violations form fields:
1. First Name
2. Last Name
3. Email Address
4. Phone Number
5. Property Address
6. Homeowners Association
7. Resolution (radio):
   - Violation Corrected
   - Request Board Hearing to Dispute Violation
   - Report Error in Violation Notice
   - Plan for Violation Correction (Long-Term Items)
8. Additional Comments
9. Photo/File Upload

Submission routing:
1. Violations submissions must route to `compliance@pristinemanagement.com` (normalized spelling).
2. Other forms use configurable recipient env vars, defaulting to the same compliance inbox until business-specific addresses are provided.

## Design Requirement (Canonical `/1`)
1. Maintain a single canonical design implementation at `/1`.
2. Visual decisions are implementation-level and should preserve business requirements and usability.

## Technical Architecture
1. Stack: npm, Next.js, React, Tailwind, Vercel deployment.
2. Use a shared content/model layer so business copy and service definitions stay consistent across variants.
3. Keep routing focused on canonical `/1` pages and shared reusable modules.
4. Centralize form validation schemas and submission adapters.
5. Store external URLs and email recipients in environment variables and typed config.

## Public Interfaces and Types
Add/define these interfaces and contracts:

1. `ServiceItem`
   - `id`
   - `title`
   - `description`

2. `FaqItem`
   - `id`
   - `question`
   - `answer`

3. `ViolationResolution` enum
   - exact values matching required radio options

4. `ViolationFormPayload`
   - all required violation fields
   - file metadata references

5. `ContactFormPayload`
6. `ManagementRequestPayload`

7. Submission API contracts
   - `POST /api/contact`
   - `POST /api/management-request`
   - `POST /api/violations`
   - Standard response shape: `success`, `message`, optional `errors`

## Work Breakdown
1. Foundation
   - Initialize/confirm project structure, App Router conventions, shared config, env contract.
2. Content Modeling
   - Define reusable content modules and copy placeholders aligned to requirements.
3. Routing Skeleton
   - Create full page map under `/1` with consistent IA.
4. Forms and Integrations
   - Build validated forms, file upload handling, submission endpoints, email delivery path.
5. Canonical Implementation
   - Implement and refine the single `/1` site without changing business requirements.
6. QA and Acceptance
   - Functional, accessibility, responsiveness, and variant-distinctness validation.
7. Deployment
   - Vercel project setup, env injection, domain connection plan for GoDaddy.

## Test Cases and Scenarios
1. Routing
   - All required pages resolve under `/1`.
2. Messaging integrity
   - HOA vs Metro District explanation appears and is accurate on each variant.
3. Services/FAQ presence
   - Required services and FAQ structures render correctly across variants.
4. Portal/link behavior
   - Vantaca CTA visible above fold on homeowner portal pages.
   - Payments and lender links route correctly.
5. Form validation
   - Required-field, format, and invalid-state tests for all forms.
6. Form submission
   - Successful sends, failed sends, retry/error messaging.
   - Violations submission reaches compliance inbox.
7. File upload
   - Allowed types/size enforcement; rejection messaging for invalid files.
8. Accessibility
   - Keyboard navigation, focus states, semantic structure, form labels/errors.
9. Responsive behavior
   - Mobile/tablet/desktop verification for all required pages.

## Acceptance Criteria
1. `project-plan.md` exists in repo root with decision-complete scope.
2. The canonical full-site implementation exists at `/1` and includes all required pages.
3. Required business messaging and services are complete.
4. All forms are production-functional with validation and submission handling.
5. Violations submissions route to `compliance@pristinemanagement.com`.
6. Deployment is Vercel-ready with documented env vars and GoDaddy domain handoff steps.

## Assumptions and Defaults Chosen
1. Design scope: single full-site implementation at `/1`.
2. Form behavior: production email send, based on your selection.
3. Naming normalization: canonical spelling uses "Pristine" and `pristinemanagement.com`, based on your selection.
4. When unspecified, non-violation form recipients default to the compliance inbox via env config until replaced.
5. Plan remains design-agnostic; all visual decisions are deferred to implementation.


