import {
  addBlogCategory,
  deleteBlogCategory,
  listBlogCategories,
  updateBlogCategory,
} from "@/lib/categories";

export const runtime = "nodejs";

export async function GET() {
  try {
    const categories = await listBlogCategories();
    return Response.json({ categories });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load categories.";
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const redirectBase = new URL(request.url);
  redirectBase.pathname = "/maamule";
  redirectBase.search = "";

  const action = String(formData.get("action") ?? "add");

  try {
    if (action === "add") {
      const name = String(formData.get("name") ?? "").trim();
      const slug = String(formData.get("slug") ?? "").trim();

      if (!name) {
        return Response.json(
          { error: "Category name is required." },
          { status: 400 }
        );
      }

      await addBlogCategory({ name, slug: slug || undefined });
    } else if (action === "update") {
      const id = String(formData.get("id") ?? "").trim();
      const name = String(formData.get("name") ?? "").trim();
      const slug = String(formData.get("slug") ?? "").trim();

      if (!id || !name) {
        return Response.json(
          { error: "Category id and name are required." },
          { status: 400 }
        );
      }

      await updateBlogCategory({ id, name, slug: slug || undefined });
    } else if (action === "delete") {
      const id = String(formData.get("id") ?? "").trim();

      if (!id) {
        return Response.json(
          { error: "Category id is required." },
          { status: 400 }
        );
      }

      await deleteBlogCategory(id);
    }

    return Response.redirect(redirectBase.toString(), 303);
  } catch {
    redirectBase.searchParams.set("categoryError", "1");
    return Response.redirect(redirectBase.toString(), 303);
  }
}
