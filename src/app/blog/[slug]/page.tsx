import Image from "next/image";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

const relatedPosts = [
  {
    title: "Clean Cooking in Coastal Communities",
    date: "Nov 02, 2023",
    readTime: "4 min read",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpg3dU8XaZSE5JVxJ0ob30ArTBiNClyLKNAYCQq7VqMuOVMpfOggBrAEjeg0kf9MaI2G37Flv6lreLuK-kBvJ0tNtYktKXKkeCkPZuqsHcThRW965HVDeZ6RFtOHkLV-RzTsaPv1cYor6aWUTRlyyLJKTkWTi56i248I4ru1xXRHMnViW1g5TRDSEk491KEsyC9zgr8x8wLc2pvW1dL6qDdjFZEuGofjgPimIoyLadcOfwuQ7x3h1s2jyMxm1v5XtvbFs3B1tzj2cw",
  },
  {
    title: "How LPG Adoption Protects Forests",
    date: "Oct 18, 2023",
    readTime: "6 min read",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrw6uCsEBAKzir1Et8VLO4-otuxXsa9aHEukZnXJDJNbOZ5fIad3usRxEvkEuS-TjuRqZKuHpYnXPIWNLX8jL7K8o2x1DjN-BmOb4UosRnp3srWDvAG9muXqCRxFBnAjBVtyFDBISRdaKyGzScKCRhfe0h8PoZi2rnHv-0nAGIPgShddardNtRv_S1cKZdbnpEJWvoySbAWb_P401TOTjx0oB_ZEA9uJOECP8TF4uXkl91E2VSXoFSLiBtIDlBqENLVmVMUMZsi88t",
  },
  {
    title: "Women Leaders in Clean Energy",
    date: "Sep 30, 2023",
    readTime: "5 min read",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGCLaE5GU473KPLjDUE0Y4fifUemI9YCgJfr9XwhMvO-48k3qnVgYvbu33_FGM3gHG19QyofZ9HiWPqKmjV5WyzclvbnIhMSao-i2PiI4mldCIFpYzmJwJUOsF1BpAUK2KzTx-1iXiKYae65VAgC_T0Qp1YrDsct5JXfTBJwMdPT6GbhgM9UP0TPZEpcDQAzAEfTbyP9pXuvDKbSGnIvpb14X9QYSEyJjFZWnUgmGdWv47eeiXXO8GgryD3qaQ3G2KGroHfuZriKQX",
  },
];

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-gray-200">
      <SiteNav />

      <main className="mx-auto w-full max-w-[1100px] px-4 pb-20 pt-10 md:px-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary font-semibold">
            Featured Story
          </span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            Oct 24, 2023
          </span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base">schedule</span>
            5 min read
          </span>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-3xl font-black leading-tight text-text-main dark:text-white md:text-5xl">
              Transforming Mogadishu’s Kitchens: The Shift to LPG
            </h1>
            <p className="mt-4 text-lg text-text-muted">
              A closer look at how clean cooking energy is improving health,
              reducing deforestation, and empowering communities across Somalia’s
              capital city.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-surface-dark">
              <Image
                alt="Somali women cooking with clean energy stoves"
                className="h-[360px] w-full object-cover"
                height={720}
                priority
                sizes="(min-width: 1024px) 700px, 100vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBao2OSfhlujlZQP9Fi0phbpe1UumYecv-3vTtyJDon4wt7KQBr_QJNqCt9s3oYtqfQqJNmHukq6fcJ5RFeuNF0k9oIENSMqPjCriCaarLpEF_wscwRX3fYJFdxbSq0hyHLoY2gXc0AdTCdrYr7pYlosTQ1HxLhHiyEZOiyU9eWPr_iSeyx_xpZEZMCkP8LNqgAiZX1ZUEoF1lCoLNwT8SJofb1okG6SS4x-g7p2aKRuaiRBUAembfDN9MJ6y3rxnel-vHOr1ndHDtL"
                width={1200}
              />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-main dark:text-white">
                      Dr. Hodan Abdi
                    </p>
                    <p className="text-xs text-text-muted">Director of Research</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-6 text-base leading-7 text-text-main/80 dark:text-gray-300">
              <p>
                In the heart of Mogadishu, households are embracing cleaner and
                safer cooking methods. The shift to LPG stoves is reducing indoor
                air pollution, improving respiratory health, and saving families
                time previously spent collecting fuel.
              </p>
              <p>
                CCAS partners with local suppliers and community leaders to
                expand access to affordable LPG refills. These partnerships help
                stabilize prices, create jobs, and strengthen community trust in
                clean energy solutions.
              </p>
              <blockquote className="rounded-2xl border-l-4 border-primary bg-primary/10 px-6 py-6 text-lg font-semibold text-text-main dark:text-white">
                “Since switching to LPG, my children no longer cough every night.
                Cooking is faster, and I feel safer.” — Amina, Hodan District
              </blockquote>
              <p>
                As adoption grows, the demand for charcoal decreases, easing
                pressure on Somalia’s forests. CCAS continues to advocate for
                policies that support clean cooking adoption in both urban and
                rural communities.
              </p>
              <div className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark sm:grid-cols-2">
                <div>
                  <p className="text-sm font-bold uppercase text-secondary">
                    Impact Highlights
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-text-muted">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-secondary">
                        check_circle
                      </span>
                      30% decrease in indoor smoke exposure
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-secondary">
                        check_circle
                      </span>
                      2,500 households supported in 2023
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-secondary">
                        check_circle
                      </span>
                      14 new community training sessions
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase text-secondary">
                    Next Steps
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-text-muted">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-secondary">
                        arrow_forward
                      </span>
                      Expand LPG access to 5 new districts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-secondary">
                        arrow_forward
                      </span>
                      Launch the clean cooking microfinance pilot
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-secondary">
                        arrow_forward
                      </span>
                      Publish Somalia Clean Energy Outlook
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {[
                "Clean Cooking",
                "LPG",
                "Health",
                "Climate",
                "Somalia",
              ].map((tag) => (
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
              <p className="mt-3 text-sm text-text-muted">
                Learn how clean cooking initiatives are reshaping daily life in
                Mogadishu through safer technology and community partnerships.
              </p>
              <div className="mt-6 space-y-4 text-sm text-text-muted">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-base text-secondary">
                    experiment
                  </span>
                  3-year LPG adoption program
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-base text-secondary">
                    local_shipping
                  </span>
                  12 distribution partners
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-base text-secondary">
                    diversity_3
                  </span>
                  7 community advisory boards
                </div>
              </div>
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
            {relatedPosts.map((post) => (
              <article
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-surface-dark"
                key={post.title}
              >
                <div className="relative h-40 w-full">
                  <Image
                    alt={post.title}
                    className="object-cover"
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    src={post.image}
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs text-text-muted">
                    {post.date} • {post.readTime}
                  </p>
                  <h3 className="text-base font-bold text-text-main group-hover:text-primary dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    Explore how CCAS is driving adoption and building clean energy
                    ecosystems.
                  </p>
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
