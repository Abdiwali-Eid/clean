import Image from "next/image";
import { cookies } from "next/headers";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { listBlogPosts } from "@/lib/blog";
import { listBlogCategories } from "@/lib/categories";
import { listLeadership } from "@/lib/leadership";
import { isSupabaseConfigured, listSubmissions } from "@/lib/submissions";

export const runtime = "nodejs";

type AdminPageProps = {
  searchParams?: {
    error?: string;
    blogError?: string;
    categoryError?: string;
    leadershipError?: string;
  };
};

function formatKey(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function isImageValue(value: string) {
  const lowerValue = value.toLowerCase();
  return (
    lowerValue.startsWith("http://") ||
    lowerValue.startsWith("https://") ||
    lowerValue.startsWith("/uploads/")
  ) && /(\.png|\.jpg|\.jpeg|\.gif|\.webp|\.svg)(\?|#|$)/.test(lowerValue);
}

function isUrlValue(value: string) {
  return (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("/uploads/")
  );
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const resolvedSearchParams = await searchParams;
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("admin_session")?.value === "1";

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white">
        <SiteNav />
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-12">
          <div className="mb-10 flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Admin Access
            </p>
            <h1 className="text-3xl font-black md:text-4xl">CCAS Admin</h1>
            <p className="text-text-muted">
              Enter your admin password to view form submissions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-surface-dark">
              <h2 className="text-xl font-bold">Sign in</h2>
              {resolvedSearchParams?.error ? (
                <p className="mt-3 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  Incorrect password. Try again.
                </p>
              ) : null}
              <form
                action="/api/admin/login"
                className="mt-6 flex flex-col gap-4"
                method="post"
              >
                <input name="redirect" type="hidden" value="/maamule" />
                <label className="text-sm font-semibold" htmlFor="password">
                  Admin Password
                </label>
                <input
                  className="h-12 rounded-xl border border-gray-200 bg-background-light px-4 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  type="password"
                />
                <button
                  className="mt-2 h-12 rounded-xl bg-primary text-base font-bold text-[#0d1b12] shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
                  type="submit"
                >
                  Continue
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/10 p-8">
              <h3 className="text-lg font-bold text-text-main">Admin Tips</h3>
              <ul className="mt-4 space-y-3 text-sm text-text-muted">
                <li>Use the password stored in `ADMIN_PASSWORD`.</li>
                <li>
                  For production, connect Supabase so submissions persist online.
                </li>
                <li>Local storage is only for development.</li>
              </ul>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  let submissions = [] as Awaited<ReturnType<typeof listSubmissions>>;
  let loadError = "";
  let blogPosts = [] as Awaited<ReturnType<typeof listBlogPosts>>;
  let blogLoadError = "";
  let categories = [] as Awaited<ReturnType<typeof listBlogCategories>>;
  let categoryLoadError = "";
  let leadership = [] as Awaited<ReturnType<typeof listLeadership>>;
  let leadershipLoadError = "";

  try {
    submissions = await listSubmissions();
  } catch (error) {
    loadError =
      error instanceof Error ? error.message : "Unable to load submissions.";
  }

  try {
    blogPosts = await listBlogPosts();
  } catch (error) {
    blogLoadError =
      error instanceof Error ? error.message : "Unable to load blog posts.";
  }

  try {
    categories = await listBlogCategories();
  } catch (error) {
    categoryLoadError =
      error instanceof Error ? error.message : "Unable to load categories.";
  }

  try {
    leadership = await listLeadership();
  } catch (error) {
    leadershipLoadError =
      error instanceof Error ? error.message : "Unable to load leadership.";
  }
  const totals = submissions.reduce<Record<string, number>>((acc, item) => {
    acc[item.type] = (acc[item.type] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white">
      <SiteNav />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
        <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Admin Dashboard
            </p>
            <h1 className="text-3xl font-black md:text-4xl">Form Submissions</h1>
            <p className="text-text-muted">
              {isSupabaseConfigured()
                ? "Supabase connected"
                : "Local storage mode"}
            </p>
          </div>
          <form action="/api/admin/logout" method="post">
            <button
              className="h-11 rounded-xl border border-gray-200 bg-white px-5 text-sm font-semibold text-text-main shadow-sm transition hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-surface-dark dark:text-white"
              type="submit"
            >
              Sign out
            </button>
          </form>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {["contact", "partner_corporate", "partner_ngo", "partner_volunteer"].map(
            (type) => (
              <div
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-surface-dark"
                key={type}
              >
                <p className="text-xs font-semibold uppercase text-text-muted">
                  {formatKey(type)}
                </p>
                <p className="mt-2 text-2xl font-bold">
                  {totals[type] ?? 0}
                </p>
              </div>
            )
          )}
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-surface-dark">
          <h2 className="text-xl font-bold">Latest Entries</h2>
          {loadError ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {loadError} Check your Supabase keys in `/.env.local` and restart
              the server.
            </div>
          ) : null}
          {submissions.length === 0 ? (
            <p className="mt-4 text-text-muted">No submissions yet.</p>
          ) : (
            <div className="mt-6 grid gap-4">
              {submissions.map((item) => (
                <div
                  className="rounded-2xl border border-gray-200 p-5 dark:border-gray-800"
                  key={item.id}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {formatKey(item.type)}
                      </p>
                      <p className="text-xs text-text-muted">
                        {new Date(item.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {Object.entries(item.fields).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs font-semibold text-text-muted">
                          {formatKey(key)}
                        </p>
                        <div className="text-sm text-text-main dark:text-white">
                          {Array.isArray(value) ? (
                            <div className="space-y-2">
                              {value.map((entry) => (
                                <div key={entry}>
                                  {isImageValue(entry) ? (
                                    <div className="space-y-2">
                                      <a
                                        className="text-primary underline"
                                        href={entry}
                                        rel="noreferrer"
                                        target="_blank"
                                      >
                                        View upload
                                      </a>
                                      <Image
                                        alt={key}
                                        className="max-h-40 w-full rounded-xl border border-gray-200 object-cover dark:border-gray-800"
                                        height={160}
                                        src={entry}
                                        unoptimized
                                        width={480}
                                      />
                                    </div>
                                  ) : isUrlValue(entry) ? (
                                    <a
                                      className="text-primary underline"
                                      href={entry}
                                      rel="noreferrer"
                                      target="_blank"
                                    >
                                      {entry}
                                    </a>
                                  ) : (
                                    entry
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : isImageValue(value) ? (
                            <div className="space-y-2">
                              <a
                                className="text-primary underline"
                                href={value}
                                rel="noreferrer"
                                target="_blank"
                              >
                                View upload
                              </a>
                              <Image
                                alt={key}
                                className="max-h-40 w-full rounded-xl border border-gray-200 object-cover dark:border-gray-800"
                                height={160}
                                src={value}
                                unoptimized
                                width={480}
                              />
                            </div>
                          ) : isUrlValue(value) ? (
                            <a
                              className="text-primary underline"
                              href={value}
                              rel="noreferrer"
                              target="_blank"
                            >
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-surface-dark">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">Blog Manager</h2>
              <p className="text-sm text-text-muted">
                Add new blog posts and keep the site updated.
              </p>
            </div>
          </div>

          {resolvedSearchParams?.blogError ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Unable to publish blog post. Ensure the `blog_posts` table exists in
              Supabase or remove Supabase keys to use local storage.
            </div>
          ) : null}

          {categoryLoadError ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {categoryLoadError} Check your Supabase keys in `/.env.local` and restart
              the server.
            </div>
          ) : null}

          <form
            action="/api/admin/blog"
            className="mt-6 grid gap-4 md:grid-cols-2"
            method="post"
          >
            <div className="md:col-span-2">
              <label className="text-sm font-semibold" htmlFor="title">
                Title
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="title"
                name="title"
                placeholder="Blog title"
                required
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-semibold" htmlFor="slug">
                Slug (optional)
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="slug"
                name="slug"
                placeholder="auto-generated-if-empty"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-semibold" htmlFor="category">
                Category
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="category"
                list="blog-category-options"
                name="category"
                placeholder="News, Impact, Report"
                type="text"
              />
              <datalist id="blog-category-options">
                {categories.map((category) => (
                  <option key={category.id} value={category.name} />
                ))}
              </datalist>
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold" htmlFor="excerpt">
                Excerpt
              </label>
              <textarea
                className="mt-2 min-h-[120px] w-full rounded-xl border border-gray-200 bg-background-light px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="excerpt"
                name="excerpt"
                placeholder="Short summary shown on the blog list"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold" htmlFor="content">
                Content
              </label>
              <textarea
                className="mt-2 min-h-[180px] w-full rounded-xl border border-gray-200 bg-background-light px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="content"
                name="content"
                placeholder="Write the full article here"
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold" htmlFor="imageUrl">
                Image URL
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="imageUrl"
                name="imageUrl"
                placeholder="https://..."
                type="url"
              />
            </div>

            <div>
              <label className="text-sm font-semibold" htmlFor="publishedAt">
                Publish Date
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="publishedAt"
                name="publishedAt"
                type="date"
              />
            </div>

            <div>
              <label className="text-sm font-semibold" htmlFor="author">
                Author
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="author"
                name="author"
                placeholder="Author name"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-semibold" htmlFor="authorRole">
                Author Role
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="authorRole"
                name="authorRole"
                placeholder="Role or title"
                type="text"
              />
            </div>

            <div>
              <label className="text-sm font-semibold" htmlFor="readTime">
                Read Time
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="readTime"
                name="readTime"
                placeholder="5 min read"
                type="text"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold" htmlFor="tags">
                Tags (comma separated)
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="tags"
                name="tags"
                placeholder="Clean Cooking, LPG, Health"
                type="text"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold" htmlFor="highlights">
                Highlights (comma separated)
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="highlights"
                name="highlights"
                placeholder="Impact highlight 1, Impact highlight 2"
                type="text"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold" htmlFor="nextSteps">
                Next Steps (comma separated)
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="nextSteps"
                name="nextSteps"
                placeholder="Next step 1, Next step 2"
                type="text"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold" htmlFor="stats">
                Stats (comma separated)
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="stats"
                name="stats"
                placeholder="3-year program, 12 partners"
                type="text"
              />
            </div>

            <div className="md:col-span-2">
              <button
                className="h-12 w-full rounded-xl bg-primary text-base font-bold text-[#0d1b12] shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
                type="submit"
              >
                Publish Blog Post
              </button>
            </div>
          </form>

          {blogLoadError ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {blogLoadError} Check your Supabase keys in `/.env.local` and restart
              the server.
            </div>
          ) : null}

          <div className="mt-8 grid gap-4">
            {blogPosts.length === 0 ? (
              <p className="text-sm text-text-muted">No blog posts yet.</p>
            ) : (
              blogPosts.map((post) => (
                <div
                  className="flex flex-col gap-2 rounded-2xl border border-gray-200 p-4 text-sm dark:border-gray-800"
                  key={post.id}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-base font-semibold text-text-main dark:text-white">
                        {post.title}
                      </p>
                      <p className="text-xs text-text-muted">/{post.slug}</p>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {post.category || "Uncategorized"}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString()
                      : "Unpublished"}
                    {post.readTime ? ` • ${post.readTime}` : ""}
                  </p>
                  <p className="text-sm text-text-muted">{post.excerpt}</p>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-surface-dark">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">Blog Categories</h2>
              <p className="text-sm text-text-muted">
                Add or update the categories used on blog posts.
              </p>
            </div>
          </div>

          {resolvedSearchParams?.categoryError ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Unable to update categories. Ensure the `blog_categories` table exists
              in Supabase or remove Supabase keys to use local storage.
            </div>
          ) : null}

          <form
            action="/api/admin/categories"
            className="mt-6 grid gap-4 md:grid-cols-3"
            method="post"
          >
            <input name="action" type="hidden" value="add" />
            <div className="md:col-span-2">
              <label className="text-sm font-semibold" htmlFor="newCategoryName">
                Category Name
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="newCategoryName"
                name="name"
                placeholder="e.g. News Update"
                required
                type="text"
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="newCategorySlug">
                Slug (optional)
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="newCategorySlug"
                name="slug"
                placeholder="news-update"
                type="text"
              />
            </div>
            <div className="md:col-span-3">
              <button
                className="h-12 w-full rounded-xl bg-primary text-base font-bold text-[#0d1b12] shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
                type="submit"
              >
                Add Category
              </button>
            </div>
          </form>

          <div className="mt-8 grid gap-4">
            {categories.length === 0 ? (
              <p className="text-sm text-text-muted">No categories yet.</p>
            ) : (
              categories.map((category) => (
                <div
                  className="rounded-2xl border border-gray-200 p-4 text-sm dark:border-gray-800"
                  key={category.id}
                >
                  <form
                    action="/api/admin/categories"
                    className="grid gap-3 md:grid-cols-[1.5fr_1.2fr_auto]"
                    method="post"
                  >
                    <input name="action" type="hidden" value="update" />
                    <input name="id" type="hidden" value={category.id} />
                    <div>
                      <label className="text-xs font-semibold text-text-muted">
                        Name
                      </label>
                      <input
                        className="mt-2 h-10 w-full rounded-xl border border-gray-200 bg-background-light px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                        name="name"
                        defaultValue={category.name}
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-text-muted">
                        Slug
                      </label>
                      <input
                        className="mt-2 h-10 w-full rounded-xl border border-gray-200 bg-background-light px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                        name="slug"
                        defaultValue={category.slug}
                        type="text"
                      />
                    </div>
                    <div className="flex flex-wrap items-end gap-2">
                      <button
                        className="h-10 rounded-xl border border-gray-200 bg-white px-4 text-xs font-semibold text-text-main shadow-sm transition hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-surface-dark dark:text-white"
                        type="submit"
                      >
                        Save
                      </button>
                      <button
                        className="h-10 rounded-xl border border-red-200 bg-red-50 px-4 text-xs font-semibold text-red-700 shadow-sm transition hover:border-red-400"
                        formAction="/api/admin/categories"
                        formMethod="post"
                        name="action"
                        value="delete"
                        type="submit"
                      >
                        Delete
                      </button>
                    </div>
                  </form>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-surface-dark">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold">Leadership</h2>
              <p className="text-sm text-text-muted">
                Update the leadership team shown on the About page.
              </p>
            </div>
          </div>

          {resolvedSearchParams?.leadershipError ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Unable to update leadership. Ensure the `leadership` table exists in
              Supabase or remove Supabase keys to use local storage.
            </div>
          ) : null}

          {leadershipLoadError ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {leadershipLoadError} Check your Supabase keys in `/.env.local` and restart
              the server.
            </div>
          ) : null}

          <form
            action="/api/admin/leadership"
            className="mt-6 grid gap-4 md:grid-cols-3"
            method="post"
          >
            <input name="action" type="hidden" value="add" />
            <div>
              <label className="text-sm font-semibold" htmlFor="leaderName">
                Name
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="leaderName"
                name="name"
                placeholder="Full name"
                required
                type="text"
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="leaderRole">
                Role
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="leaderRole"
                name="role"
                placeholder="Executive Director"
                required
                type="text"
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="leaderSort">
                Sort Order
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="leaderSort"
                name="sortOrder"
                placeholder="1"
                type="number"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-semibold" htmlFor="leaderImage">
                Image URL
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="leaderImage"
                name="imageUrl"
                placeholder="https://..."
                type="url"
              />
            </div>
            <div>
              <label className="text-sm font-semibold" htmlFor="leaderAlt">
                Alt Text
              </label>
              <input
                className="mt-2 h-11 w-full rounded-xl border border-gray-200 bg-background-light px-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                id="leaderAlt"
                name="altText"
                placeholder="Portrait description"
                type="text"
              />
            </div>
            <div className="md:col-span-3">
              <button
                className="h-12 w-full rounded-xl bg-primary text-base font-bold text-[#0d1b12] shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
                type="submit"
              >
                Add Leadership Member
              </button>
            </div>
          </form>

          <div className="mt-8 grid gap-4">
            {leadership.length === 0 ? (
              <p className="text-sm text-text-muted">No leadership entries yet.</p>
            ) : (
              leadership.map((member) => (
                <div
                  className="rounded-2xl border border-gray-200 p-4 text-sm dark:border-gray-800"
                  key={member.id}
                >
                  <form
                    action="/api/admin/leadership"
                    className="grid gap-3 md:grid-cols-6"
                    method="post"
                  >
                    <input name="action" type="hidden" value="update" />
                    <input name="id" type="hidden" value={member.id} />
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-text-muted">
                        Name
                      </label>
                      <input
                        className="mt-2 h-10 w-full rounded-xl border border-gray-200 bg-background-light px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                        name="name"
                        defaultValue={member.name}
                        required
                        type="text"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-text-muted">
                        Role
                      </label>
                      <input
                        className="mt-2 h-10 w-full rounded-xl border border-gray-200 bg-background-light px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                        name="role"
                        defaultValue={member.role}
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-text-muted">
                        Order
                      </label>
                      <input
                        className="mt-2 h-10 w-full rounded-xl border border-gray-200 bg-background-light px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                        name="sortOrder"
                        defaultValue={member.sortOrder}
                        type="number"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="text-xs font-semibold text-text-muted">
                        Image URL
                      </label>
                      <input
                        className="mt-2 h-10 w-full rounded-xl border border-gray-200 bg-background-light px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                        name="imageUrl"
                        defaultValue={member.imageUrl}
                        type="url"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="text-xs font-semibold text-text-muted">
                        Alt Text
                      </label>
                      <input
                        className="mt-2 h-10 w-full rounded-xl border border-gray-200 bg-background-light px-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark"
                        name="altText"
                        defaultValue={member.altText}
                        type="text"
                      />
                    </div>
                    <div className="md:col-span-6 flex flex-wrap gap-2">
                      <button
                        className="h-10 rounded-xl border border-gray-200 bg-white px-4 text-xs font-semibold text-text-main shadow-sm transition hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-surface-dark dark:text-white"
                        type="submit"
                      >
                        Save
                      </button>
                      <button
                        className="h-10 rounded-xl border border-red-200 bg-red-50 px-4 text-xs font-semibold text-red-700 shadow-sm transition hover:border-red-400"
                        formAction="/api/admin/leadership"
                        formMethod="post"
                        name="action"
                        value="delete"
                        type="submit"
                      >
                        Delete
                      </button>
                    </div>
                  </form>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
