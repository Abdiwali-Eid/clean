import { addSubmission } from "@/lib/submissions";

export async function POST(request: Request) {
  const formData = await request.formData();
  const type = String(formData.get("formType") ?? "unknown");
  const fields: Record<string, string | string[]> = {};

  for (const [key, value] of formData.entries()) {
    if (key === "formType") {
      continue;
    }

    let normalizedValue: string;
    if (value instanceof File) {
      normalizedValue = value.name ? `${value.name} (${value.size} bytes)` : "";
    } else {
      normalizedValue = value.toString();
    }

    if (fields[key]) {
      const existing = fields[key];
      fields[key] = Array.isArray(existing)
        ? [...existing, normalizedValue]
        : [existing, normalizedValue];
    } else {
      fields[key] = normalizedValue;
    }
  }

  await addSubmission({ type, fields });

  const referer = request.headers.get("referer");
  const redirectTo = referer ? `${referer}?sent=1` : "/";
  return Response.redirect(redirectTo, 303);
}
