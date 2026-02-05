import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { getBlogPostBySlug, listBlogPosts } from "@/lib/blog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

type BlogDetailPageProps = {
  params: { slug: string };
};

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

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);
  if (!post) {
    notFound();
  }
  const posts = await listBlogPosts();
  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const contentBlocks = post.content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-gray-200">
      <SiteNav />

      <main className="mx-auto w-full max-w-[1100px] px-4 pb-20 pt-10 md:px-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary font-semibold">
            {post.category}
          </span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            {formatDate(post.publishedAt)}
          </span>
          {post.readTime ? (
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">schedule</span>
              {post.readTime}
            </span>
          ) : null}
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-3xl font-black leading-tight text-text-main dark:text-white md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-text-muted">{post.excerpt}</p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-surface-dark">
              {post.imageUrl ? (
                <Image
                  alt={post.title}
                  className="h-[360px] w-full object-cover"
                  height={720}
                  priority
                  sizes="(min-width: 1024px) 700px, 100vw"
                  src={post.imageUrl}
                  width={1200}
                />
              ) : null}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-main dark:text-white">
                      {post.author}
                    </p>
                    <p className="text-xs text-text-muted">{post.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-6 text-base leading-7 text-text-main/80 dark:text-gray-300">
              {contentBlocks.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {post.excerpt ? (
                <blockquote className="rounded-2xl border-l-4 border-primary bg-primary/10 px-6 py-6 text-lg font-semibold text-text-main dark:text-white">
                  “{post.excerpt}” — {post.author || "CCAS"}
                </blockquote>
              ) : null}
              {post.highlights.length > 0 || post.nextSteps.length > 0 ? (
                <div className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark sm:grid-cols-2">
                  {post.highlights.length > 0 ? (
                    <div>
                      <p className="text-sm font-bold uppercase text-secondary">
                        Impact Highlights
                      </p>
                      <ul className="mt-4 space-y-3 text-sm text-text-muted">
                        {post.highlights.map((highlight) => (
                          <li className="flex items-center gap-2" key={highlight}>
                            <span className="material-symbols-outlined text-base text-secondary">
                              check_circle
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {post.nextSteps.length > 0 ? (
                    <div>
                      <p className="text-sm font-bold uppercase text-secondary">
                        Next Steps
                      </p>
                      <ul className="mt-4 space-y-3 text-sm text-text-muted">
                        {post.nextSteps.map((step) => (
                          <li className="flex items-center gap-2" key={step}>
                            <span className="material-symbols-outlined text-base text-secondary">
                              arrow_forward
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {post.tags.map((tag) => (
                <span
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-surface-dark">
              <h3 className="text-lg font-bold text-text-main dark:text-white">
                Article Summary
              </h3>
              <p className="mt-3 text-sm text-text-muted">{post.excerpt}</p>
              {post.stats.length > 0 ? (
                <div className="mt-6 space-y-4 text-sm text-text-muted">
                  {post.stats.map((stat) => (
                    <div className="flex items-center gap-3" key={stat}>
                      <span className="material-symbols-outlined text-base text-secondary">
                        experiment
                      </span>
                      {stat}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="rounded-3xl bg-primary p-6 text-white shadow-lg">
              <h3 className="text-lg font-bold">Get the Newsletter</h3>
              <p className="mt-2 text-sm text-white/80">
                Monthly stories, impact reports, and project updates from CCAS.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <input
                  className="h-11 rounded-lg border border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                  placeholder="Email address"
                  type="email"
                />
                <button
                  className="h-11 rounded-lg bg-white text-sm font-bold text-primary"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-surface-dark">
              <h3 className="text-lg font-bold text-text-main dark:text-white">
                Share this story
              </h3>
              <div className="mt-4 grid gap-3 text-sm text-text-muted">
                <button className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:border-primary hover:text-primary dark:border-gray-700">
                  Facebook
                  <span className="material-symbols-outlined text-base">share</span>
                </button>
                <button className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:border-primary hover:text-primary dark:border-gray-700">
                  Twitter
                  <span className="material-symbols-outlined text-base">public</span>
                </button>
                <button className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:border-primary hover:text-primary dark:border-gray-700">
                  Copy Link
                  <span className="material-symbols-outlined text-base">link</span>
                </button>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-secondary">More Stories</p>
              <h2 className="text-2xl font-black text-text-main dark:text-white">
                Related Articles
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
              href="/blog"
            >
              View all
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <article
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-surface-dark"
                key={item.slug}
              >
                <div className="relative h-40 w-full">
                  {item.imageUrl ? (
                    <Image
                      alt={item.title}
                      className="object-cover"
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      src={item.imageUrl}
                    />
                  ) : null}
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs text-text-muted">
                    {formatDate(item.publishedAt)}
                    {item.readTime ? ` • ${item.readTime}` : ""}
                  </p>
                  <h3 className="text-base font-bold text-text-main group-hover:text-primary dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {item.excerpt}
                  </p>
                  <Link
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
                    href={`/blog/${item.slug}`}
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
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
