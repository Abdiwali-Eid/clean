import { addBlogPost, listBlogPosts, parseList } from "@/lib/blog";

export const runtime = "nodejs";

export async function GET() {
  try {
    const posts = await listBlogPosts();
    return Response.json({ posts });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load posts.";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const redirectBase = new URL(request.url);
  redirectBase.pathname = "/maamule";
  redirectBase.search = "";

  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const imageUrl = String(formData.get("imageUrl") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const author = String(formData.get("author") ?? "").trim();
  const authorRole = String(formData.get("authorRole") ?? "").trim();
  const readTime = String(formData.get("readTime") ?? "").trim();
  const publishedAtRaw = String(formData.get("publishedAt") ?? "").trim();

  if (!title || !excerpt || !content) {
    return Response.json(
      { error: "Title, excerpt, and content are required." },
      { status: 400 }
    );
  }

  try {
    await addBlogPost({
      slug,
      title,
      excerpt,
      content,
      imageUrl,
      category,
      author,
      authorRole,
      readTime,
      tags: parseList(String(formData.get("tags") ?? "")),
      highlights: parseList(String(formData.get("highlights") ?? "")),
      nextSteps: parseList(String(formData.get("nextSteps") ?? "")),
      stats: parseList(String(formData.get("stats") ?? "")),
      publishedAt: publishedAtRaw ? new Date(publishedAtRaw).toISOString() : undefined,
    });

    return Response.redirect(redirectBase.toString(), 303);
  } catch {
    redirectBase.searchParams.set("blogError", "1");
    return Response.redirect(redirectBase.toString(), 303);
  }
}
