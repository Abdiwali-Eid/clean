import { cookies } from "next/headers";

import { isSupabaseConfigured, listSubmissions } from "@/lib/submissions";

type AdminPageProps = {
  searchParams?: { error?: string };
};

function formatKey(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
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
              {searchParams?.error ? (
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

  try {
    submissions = await listSubmissions();
  } catch (error) {
    loadError =
      error instanceof Error ? error.message : "Unable to load submissions.";
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
      </div>
    </div>
  );
}
