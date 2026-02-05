import { cookies } from "next/headers";

import { listBlogPosts } from "@/lib/blog";
import { isSupabaseConfigured, listSubmissions } from "@/lib/submissions";

export const runtime = "nodejs";

type AdminPageProps = {
  searchParams?: { error?: string; blogError?: string };
};

function formatKey(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const resolvedSearchParams = await searchParams;
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("admin_session")?.value === "1";

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white">
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
      </div>
    );
  }

  let submissions = [] as Awaited<ReturnType<typeof listSubmissions>>;
  let loadError = "";
  let blogPosts = [] as Awaited<ReturnType<typeof listBlogPosts>>;
  let blogLoadError = "";

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
  const totals = submissions.reduce<Record<string, number>>((acc, item) => {
    acc[item.type] = (acc[item.type] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-white">
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
                        <p className="text-sm text-text-main dark:text-white">
                          {Array.isArray(value) ? value.join(", ") : value}
                        </p>
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
                name="category"
                placeholder="News, Impact, Report"
                type="text"
              />
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
      </div>
    </div>
  );
}
