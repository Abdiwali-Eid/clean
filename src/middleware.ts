import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  const host = request.headers.get("host");

  if (host) {
    requestHeaders.set("x-forwarded-host", host);
  }

  const forwardedProto = request.headers.get("x-forwarded-proto");
  if (!forwardedProto) {
    const protocol = request.nextUrl.protocol.replace(":", "");
    if (protocol) {
      requestHeaders.set("x-forwarded-proto", protocol);
    }
  }

  if (!pathname.startsWith("/api/admin")) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  if (pathname === "/api/admin/login") {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const isAuthed = request.cookies.get("admin_session")?.value === "1";
  if (!isAuthed) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
