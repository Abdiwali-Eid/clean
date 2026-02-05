import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { listBlogPosts } from "@/lib/blog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

function formatDate(value?: string) {
  if (!value) {
    return "Recently";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Recently";
  }
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await listBlogPosts();
  const featured = posts[0];
  const listPosts = featured ? posts.slice(1) : posts;

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-200">
      <SiteNav />

      <main className="flex-grow">
          <section className="w-full py-12 md:py-16 px-4 md:px-8 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/50">
            <div className="mx-auto max-w-[1200px]">
              {featured ? (
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                  <div className="w-full lg:w-3/5 relative group cursor-pointer overflow-hidden rounded-xl shadow-md">
                    <div
                      className="aspect-video w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      data-alt={featured.title}
                      style={{
                        backgroundImage: featured.imageUrl
                          ? `url(\"${featured.imageUrl}\")`
                          : "none",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white mb-3 shadow-sm">
                        {featured.category || "Featured"}
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4 text-text-sub-light dark:text-text-sub-dark text-sm">
                      <span className="material-symbols-outlined text-lg">
                        calendar_today
                      </span>
                      <span>{formatDate(featured.publishedAt)}</span>
                      {featured.readTime ? (
                        <>
                          <span className="mx-2">•</span>
                          <span>{featured.readTime}</span>
                        </>
                      ) : null}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4 text-text-main-light dark:text-text-main-dark">
                      {featured.title}
                    </h1>
                    <p className="text-base md:text-lg text-text-sub-light dark:text-text-sub-dark mb-8 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <Link
                      className="flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-[#0d1b12] shadow-lg shadow-primary/20 transition-all hover:bg-green-400 hover:shadow-green-400/30"
                      href={`/blog/${featured.slug}`}
                    >
                      <span>Read Full Article</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-gray-200 bg-white p-10 text-center text-text-muted dark:border-gray-800 dark:bg-surface-dark">
                  No blog posts yet. Check back soon.
                </div>
              )}
            </div>
          </section>

          <section className="sticky top-16 z-40 border-y border-[#e7f3eb] dark:border-[#1e3a29] bg-background-light/95 dark:bg-background-dark/95 px-4 md:px-8 py-4 backdrop-blur">
            <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                <button className="whitespace-nowrap rounded-full bg-primary text-[#0d1b12] px-4 py-2 text-sm font-bold shadow-sm ring-1 ring-inset ring-transparent" type="button">
                  All Posts
                </button>
                <button
                  className="whitespace-nowrap rounded-full bg-white dark:bg-card-dark hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29] text-text-main-light dark:text-text-main-dark px-4 py-2 text-sm font-medium transition-colors ring-1 ring-inset ring-gray-200 dark:ring-gray-700"
                  type="button"
                >
                  News Updates
                </button>
                <button
                  className="whitespace-nowrap rounded-full bg-white dark:bg-card-dark hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29] text-text-main-light dark:text-text-main-dark px-4 py-2 text-sm font-medium transition-colors ring-1 ring-inset ring-gray-200 dark:ring-gray-700"
                  type="button"
                >
                  Impact Stories
                </button>
                <button
                  className="whitespace-nowrap rounded-full bg-white dark:bg-card-dark hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29] text-text-main-light dark:text-text-main-dark px-4 py-2 text-sm font-medium transition-colors ring-1 ring-inset ring-gray-200 dark:ring-gray-700"
                  type="button"
                >
                  Events
                </button>
                <button
                  className="whitespace-nowrap rounded-full bg-white dark:bg-card-dark hover:bg-[#e7f3eb] dark:hover:bg-[#1e3a29] text-text-main-light dark:text-text-main-dark px-4 py-2 text-sm font-medium transition-colors ring-1 ring-inset ring-gray-200 dark:ring-gray-700"
                  type="button"
                >
                  Reports
                </button>
              </div>

              <div className="relative w-full md:w-[320px]">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-text-sub-light">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="block w-full rounded-lg border-0 bg-white dark:bg-card-dark py-2.5 pl-10 pr-4 text-text-main-light dark:text-text-main-dark ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="Search articles..."
                  type="text"
                />
              </div>
            </div>
          </section>

          <section className="py-12 px-4 md:px-8">
            <div className="mx-auto max-w-[1200px]">
              {listPosts.length === 0 ? (
                <p className="text-sm text-text-muted">No additional posts yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {listPosts.map((post) => (
                    <article
                      className="group flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:-translate-y-1"
                      key={post.id}
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <div
                          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          data-alt={post.title}
                          style={{
                            backgroundImage: post.imageUrl
                              ? `url(\"${post.imageUrl}\")`
                              : "none",
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="rounded bg-white/90 dark:bg-black/80 px-2 py-1 text-xs font-bold uppercase tracking-wide text-secondary backdrop-blur-sm">
                            {post.category || "Story"}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-text-sub-light dark:text-text-sub-dark">
                          <span>{formatDate(post.publishedAt)}</span>
                          {post.readTime ? (
                            <>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </>
                          ) : null}
                        </div>
                        <h3 className="mb-2 text-xl font-bold leading-tight text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="mb-4 flex-1 text-sm text-text-sub-light dark:text-text-sub-dark line-clamp-3">
                          {post.excerpt}
                        </p>
                        <Link
                          className="inline-flex items-center text-sm font-bold text-primary hover:text-green-400"
                          href={`/blog/${post.slug}`}
                        >
                          Read more
                          <span className="material-symbols-outlined text-sm ml-1">
                            arrow_forward
                          </span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    );
  }
