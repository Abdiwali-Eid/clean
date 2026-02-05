export async function POST() {
  const isProduction = process.env.NODE_ENV === "production";
  const cookieValue = [
    "admin_session=",
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    "Max-Age=0",
    isProduction ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");

  const headers = new Headers({ Location: "/maamule" });
  headers.append("Set-Cookie", cookieValue);

  return new Response(null, { status: 303, headers });
}
