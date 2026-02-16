import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
};

export type BlogCategoryInput = Omit<BlogCategory, "id" | "createdAt">;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const categoriesFile = path.join(process.cwd(), "data", "blog-categories.json");

const seedCategories: BlogCategory[] = [
  {
    id: "seed-featured-story",
    name: "Featured Story",
    slug: "featured-story",
    createdAt: "2023-10-01T08:00:00.000Z",
  },
  {
    id: "seed-news-update",
    name: "News Update",
    slug: "news-update",
    createdAt: "2023-10-01T08:00:00.000Z",
  },
  {
    id: "seed-impact-story",
    name: "Impact Story",
    slug: "impact-story",
    createdAt: "2023-10-01T08:00:00.000Z",
  },
  {
    id: "seed-report",
    name: "Report",
    slug: "report",
    createdAt: "2023-10-01T08:00:00.000Z",
  },
];

function getSupabaseClient() {
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });
}

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseKey);
}

function slugify(value: string) {
  if (!value) {
    return "";
  }
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

async function writeLocalCategories(categories: BlogCategory[]) {
  await fs.mkdir(path.dirname(categoriesFile), { recursive: true });
  await fs.writeFile(categoriesFile, JSON.stringify(categories, null, 2));
}

async function readLocalCategories() {
  try {
    const data = await fs.readFile(categoriesFile, "utf-8");
    return JSON.parse(data) as BlogCategory[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      await writeLocalCategories(seedCategories);
      return seedCategories;
    }
    throw error;
  }
}

function normalizeSupabaseRow(row: Record<string, unknown>): BlogCategory {
  return {
    id: String(row.id ?? randomUUID()),
    name: String(row.name ?? ""),
    slug: String(row.slug ?? ""),
    createdAt: String(row.created_at ?? new Date().toISOString()),
  };
}

export async function listBlogCategories() {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("blog_categories")
      .select("id,name,slug,created_at")
      .order("name", { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    return (data ?? []).map((row) => normalizeSupabaseRow(row));
  }

  const categories = await readLocalCategories();
  return [...categories].sort((a, b) => a.name.localeCompare(b.name));
}

export async function addBlogCategory(input: { name: string; slug?: string }) {
  const createdAt = new Date().toISOString();
  const resolvedSlug = input.slug ? slugify(input.slug) : slugify(input.name);

  const category: BlogCategory = {
    id: randomUUID(),
    name: input.name,
    slug: resolvedSlug,
    createdAt,
  };

  const supabase = getSupabaseClient();
  if (supabase) {
    const { error } = await supabase.from("blog_categories").insert({
      id: category.id,
      name: category.name,
      slug: category.slug,
      created_at: category.createdAt,
    });

    if (error) {
      throw new Error(error.message);
    }

    return category;
  }

  const categories = await readLocalCategories();
  const filtered = categories.filter((item) => item.slug !== category.slug);
  filtered.push(category);
  await writeLocalCategories(filtered);
  return category;
}

export async function updateBlogCategory(input: {
  id: string;
  name: string;
  slug?: string;
}) {
  const resolvedSlug = input.slug ? slugify(input.slug) : slugify(input.name);

  const supabase = getSupabaseClient();
  if (supabase) {
    const { error } = await supabase
      .from("blog_categories")
      .update({
        name: input.name,
        slug: resolvedSlug,
      })
      .eq("id", input.id);

    if (error) {
      throw new Error(error.message);
    }

    return true;
  }

  const categories = await readLocalCategories();
  const updated = categories.map((item) =>
    item.id === input.id
      ? { ...item, name: input.name, slug: resolvedSlug }
      : item
  );
  await writeLocalCategories(updated);
  return true;
}

export async function deleteBlogCategory(id: string) {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { error } = await supabase
      .from("blog_categories")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return true;
  }

  const categories = await readLocalCategories();
  const updated = categories.filter((item) => item.id !== id);
  await writeLocalCategories(updated);
  return true;
}
