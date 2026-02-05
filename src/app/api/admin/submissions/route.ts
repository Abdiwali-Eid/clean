import { listSubmissions } from "@/lib/submissions";

export const runtime = "nodejs";

export async function GET() {
  const submissions = await listSubmissions();
  return Response.json({ submissions });
}
