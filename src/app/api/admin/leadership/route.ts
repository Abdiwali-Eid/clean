import {
  addLeadershipMember,
  deleteLeadershipMember,
  listLeadership,
  updateLeadershipMember,
} from "@/lib/leadership";

export const runtime = "nodejs";

export async function GET() {
  try {
    const leadership = await listLeadership();
    return Response.json({ leadership });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load leadership.";
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
      const role = String(formData.get("role") ?? "").trim();
      const imageUrl = String(formData.get("imageUrl") ?? "").trim();
      const altText = String(formData.get("altText") ?? "").trim();
      const sortOrderRaw = String(formData.get("sortOrder") ?? "").trim();
      const sortOrder = Number.isNaN(Number(sortOrderRaw))
        ? 0
        : Number(sortOrderRaw);

      if (!name || !role) {
        return Response.json(
          { error: "Name and role are required." },
          { status: 400 }
        );
      }

      await addLeadershipMember({
        name,
        role,
        imageUrl,
        altText,
        sortOrder,
      });
    } else if (action === "update") {
      const id = String(formData.get("id") ?? "").trim();
      const name = String(formData.get("name") ?? "").trim();
      const role = String(formData.get("role") ?? "").trim();
      const imageUrl = String(formData.get("imageUrl") ?? "").trim();
      const altText = String(formData.get("altText") ?? "").trim();
      const sortOrderRaw = String(formData.get("sortOrder") ?? "").trim();
      const sortOrder = Number.isNaN(Number(sortOrderRaw))
        ? 0
        : Number(sortOrderRaw);

      if (!id || !name || !role) {
        return Response.json(
          { error: "Id, name, and role are required." },
          { status: 400 }
        );
      }

      await updateLeadershipMember({
        id,
        name,
        role,
        imageUrl,
        altText,
        sortOrder,
      });
    } else if (action === "delete") {
      const id = String(formData.get("id") ?? "").trim();

      if (!id) {
        return Response.json(
          { error: "Leadership id is required." },
          { status: 400 }
        );
      }

      await deleteLeadershipMember(id);
    }

    return Response.redirect(redirectBase.toString(), 303);
  } catch {
    redirectBase.searchParams.set("leadershipError", "1");
    return Response.redirect(redirectBase.toString(), 303);
  }
}
