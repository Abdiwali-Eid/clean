export async function GET() {
  return Response.redirect("/maamule", 303);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const redirectTo = String(formData.get("redirect") ?? "/maamule");

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return Response.redirect("/maamule?error=1", 303);
  }

  const isProduction = process.env.NODE_ENV === "production";
  const cookieValue = [
    "admin_session=1",
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    "Max-Age=604800",
    isProduction ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");

  const headers = new Headers({ Location: redirectTo });
  headers.append("Set-Cookie", cookieValue);

  return new Response(null, { status: 303, headers });
}
