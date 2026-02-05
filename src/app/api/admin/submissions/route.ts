import { listSubmissions } from "@/lib/submissions";

export async function GET() {
  const submissions = await listSubmissions();
  return Response.json({ submissions });
}
