import Image from "next/image";
import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

const posts = [
  {
    slug: "mogadishu-lpg-shift",
    category: "Featured Story",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    title: "Transforming Mogadishu’s Kitchens: The Shift to LPG",
    excerpt:
      "A closer look at how clean cooking energy is improving health, reducing deforestation, and empowering communities across Somalia’s capital city.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBao2OSfhlujlZQP9Fi0phbpe1UumYecv-3vTtyJDon4wt7KQBr_QJNqCt9s3oYtqfQqJNmHukq6fcJ5RFeuNF0k9oIENSMqPjCriCaarLpEF_wscwRX3fYJFdxbSq0hyHLoY2gXc0AdTCdrYr7pYlosTQ1HxLhHiyEZOiyU9eWPr_iSeyx_xpZEZMCkP8LNqgAiZX1ZUEoF1lCoLNwT8SJofb1okG6SS4x-g7p2aKRuaiRBUAembfDN9MJ6y3rxnel-vHOr1ndHDtL",
    author: "Dr. Hodan Abdi",
    authorRole: "Director of Research",
    quote:
      "Since switching to LPG, my children no longer cough every night. Cooking is faster, and I feel safer.",
    quoteBy: "Amina, Hodan District",
    highlights: [
      "30% decrease in indoor smoke exposure",
      "2,500 households supported in 2023",
      "14 new community training sessions",
    ],
    nextSteps: [
      "Expand LPG access to 5 new districts",
      "Launch the clean cooking microfinance pilot",
      "Publish Somalia Clean Energy Outlook",
    ],
    summary: [
      "Learn how clean cooking initiatives are reshaping daily life in Mogadishu through safer technology and community partnerships.",
      "CCAS coordinates local supply chains to keep LPG prices stable, while public awareness campaigns improve adoption confidence.",
    ],
    stats: [
      "3-year LPG adoption program",
      "12 distribution partners",
      "7 community advisory boards",
    ],
    tags: ["Clean Cooking", "LPG", "Health", "Climate", "Somalia"],
  },
  {
    slug: "ministry-energy-initiative",
    category: "News Update",
    date: "Oct 24, 2023",
    readTime: "3 min read",
    title: "CCAS Partners with Ministry of Energy for New Initiative",
    excerpt:
      "A landmark agreement to accelerate the adoption of clean cooking solutions across rural regions in Somalia.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOWYOiD6xPBUW7VUOrLFrachvYWTf0J8_DyvE7JauhfYCsx098aDMMNVcmDox2Zz8cib7TyEheTw9EbuUkLl9JZ3zilXCV3ye7E8J2nb7ZgsRcA78JBZ24086dAA58eYwS-0s-fceeTd-2UdZm9FwKxeF3E1y1gQB3xolgTqNfkkBDVgUFbX7WSbzF38QVHuKOptNHIkPBueqsQUt220eYASDmdHVNReU7ljR5mHA0nB6KjAJzPIy9p6TFv8rS6nG98s22u8sIOs4H",
    author: "Ahmed Nur",
    authorRole: "Policy Lead",
    quote:
      "This partnership is a turning point for expanding clean cooking access in rural districts.",
    quoteBy: "Ministry of Energy",
    highlights: [
      "Joint policy roadmap for 2024",
      "New LPG distribution corridors",
      "Regional training hubs announced",
    ],
    nextSteps: [
      "Finalize implementation schedule",
      "Coordinate district-level launches",
      "Publish progress dashboard",
    ],
    summary: [
      "The agreement strengthens policy alignment and accelerates clean cooking adoption beyond urban centers.",
      "CCAS will coordinate partner training, distribution planning, and impact monitoring.",
    ],
    stats: ["8 rural districts", "25 community champions", "4 pilot regions"],
    tags: ["Policy", "Partnership", "Rural", "Energy"],
  },
  {
    slug: "clean-cooking-benefits",
    category: "Impact Story",
    date: "Oct 18, 2023",
    readTime: "4 min read",
    title: "5 Benefits of Clean Cooking for Somali Families",
    excerpt:
      "Beyond convenience, clean cooking brings vital health improvements and economic savings to households.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpg3dU8XaZSE5JVxJ0ob30ArTBiNClyLKNAYCQq7VqMuOVMpfOggBrAEjeg0kf9MaI2G37Flv6lreLuK-kBvJ0tNtYktKXKkeCkPZuqsHcThRW965HVDeZ6RFtOHkLV-RzTsaPv1cYor6aWUTRlyyLJKTkWTi56i248I4ru1xXRHMnViW1g5TRDSEk491KEsyC9zgr8x8wLc2pvW1dL6qDdjFZEuGofjgPimIoyLadcOfwuQ7x3h1s2jyMxm1v5XtvbFs3B1tzj2cw",
    author: "Muna Abdirahman",
    authorRole: "Community Coordinator",
    quote:
      "Clean cooking has given families more time, better health, and safer kitchens.",
    quoteBy: "Community Health Worker",
    highlights: [
      "Lower household fuel expenses",
      "Reduced respiratory illnesses",
      "Shorter cooking times",
    ],
    nextSteps: [
      "Scale household training",
      "Introduce clean cooking starter kits",
      "Expand health outreach",
    ],
    summary: [
      "Families report fewer health issues and higher productivity after switching to clean fuels.",
      "CCAS continues to support awareness sessions and reliable fuel access.",
    ],
    stats: ["5 key benefits", "1,800 households", "12 community clinics"],
    tags: ["Health", "Families", "Savings"],
  },
  {
    slug: "quarterly-report-20",
    category: "Report",
    date: "Oct 10, 2023",
    readTime: "10 min read",
    title: "Quarterly Report: Reducing Charcoal Usage by 20%",
    excerpt:
      "Our latest data shows significant progress in reducing reliance on harmful charcoal in pilot districts.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrw6uCsEBAKzir1Et8VLO4-otuxXsa9aHEukZnXJDJNbOZ5fIad3usRxEvkEuS-TjuRqZKuHpYnXPIWNLX8jL7K8o2x1DjN-BmOb4UosRnp3srWDvAG9muXqCRxFBnAjBVtyFDBISRdaKyGzScKCRhfe0h8PoZi2rnHv-0nAGIPgShddardNtRv_S1cKZdbnpEJWvoySbAWb_P401TOTjx0oB_ZEA9uJOECP8TF4uXkl91E2VSXoFSLiBtIDlBqENLVmVMUMZsi88t",
    author: "CCAS Insights Team",
    authorRole: "Data & Monitoring",
    quote:
      "The data confirms that clean cooking policies and market incentives are working.",
    quoteBy: "Quarterly Monitoring Brief",
    highlights: [
      "20% drop in charcoal sales",
      "Fuel price stability achieved",
      "Expanded distribution routes",
    ],
    nextSteps: [
      "Publish district scorecards",
      "Strengthen monitoring visits",
      "Expand pilot to new zones",
    ],
    summary: [
      "Pilot districts show measurable declines in charcoal consumption and increases in LPG adoption.",
      "The report highlights policy alignment and supply chain improvements.",
    ],
    stats: ["6 pilot districts", "20% reduction", "9 supply partners"],
    tags: ["Report", "Data", "Impact"],
  },
  {
    slug: "lpg-safety-workshop",
    category: "Event",
    date: "Sep 28, 2023",
    readTime: "2 min read",
    title: "Community Workshop: Safe LPG Handling",
    excerpt:
      "Join us this Saturday for a hands-on demonstration on how to safely connect and use LPG cylinders.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGCLaE5GU473KPLjDUE0Y4fifUemI9YCgJfr9XwhMvO-48k3qnVgYvbu33_FGM3gHG19QyofZ9HiWPqKmjV5WyzclvbnIhMSao-i2PiI4mldCIFpYzmJwJUOsF1BpAUK2KzTx-1iXiKYae65VAgC_T0Qp1YrDsct5JXfTBJwMdPT6GbhgM9UP0TPZEpcDQAzAEfTbyP9pXuvDKbSGnIvpb14X9QYSEyJjFZWnUgmGdWv47eeiXXO8GgryD3qaQ3G2KGroHfuZriKQX",
    author: "Ayaan Yusuf",
    authorRole: "Training Coordinator",
    quote:
      "Safety training builds trust and long-term confidence in LPG adoption.",
    quoteBy: "Workshop Facilitator",
    highlights: [
      "Live safety demonstrations",
      "Certified local trainers",
      "Emergency response tips",
    ],
    nextSteps: [
      "Launch neighborhood safety clinics",
      "Distribute safety checklists",
      "Partner with local stations",
    ],
    summary: [
      "Community workshops help families transition to LPG safely and confidently.",
      "Participants receive starter safety kits and follow-up training schedules.",
    ],
    stats: ["120 attendees", "15 trainers", "3 districts"],
    tags: ["Safety", "Training", "Community"],
  },
  {
    slug: "solar-cooking-alternative",
    category: "Insight",
    date: "Sep 15, 2023",
    readTime: "6 min read",
    title: "Solar Cooking: A Viable Alternative?",
    excerpt:
      "Exploring the potential and challenges of solar-based cooking technologies in the Horn of Africa.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8pq17Of8CV9fPjgODJZBinKalihg2pNgzJnwSZ0z0nd0hDGbSlKZx3Q5cOoMtD6mQNpwp1U1iEY3HxDf_BWm5ViL0kUCHtdqmlD5hxWB3-8-PKU_m2cZkGsdY6Gcm8ELn_Tyr5KklBo1xkn-GLFU0JLZhTcVwllandaSLwu9aZ87mT3OSERJmJvBeNdhXHdd2QE9-EQulIxOjCn6YpmT9Xe3b6s60IqRBEnEaa99MdqD4fUrCCg5G3bZ36Qawfd_ugeZwkbc4kguu",
    author: "Layla Ali",
    authorRole: "Innovation Analyst",
    quote:
      "Solar cookers can complement LPG, especially in sun-rich rural areas.",
    quoteBy: "Innovation Brief",
    highlights: [
      "Lower fuel dependency",
      "Long-term cost savings",
      "Strong interest from rural households",
    ],
    nextSteps: [
      "Pilot solar cookers in 3 regions",
      "Collect performance data",
      "Explore blended financing",
    ],
    summary: [
      "Solar cooking offers promise but requires training and durable equipment.",
      "CCAS evaluates solar options alongside LPG to build resilient energy systems.",
    ],
    stats: ["3 pilot zones", "50 test units", "1 innovation grant"],
    tags: ["Innovation", "Solar", "Research"],
  },
  {
    slug: "director-interview",
    category: "Interview",
    date: "Sep 01, 2023",
    readTime: "8 min read",
    title: "Interview with CCAS Director on Future Goals",
    excerpt:
      "Our Director discusses the 5-year roadmap for achieving 100% clean cooking access in urban centers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6atQDB3RDQcRiwJ0z3hUI1H1kD0cD1a3ZX0lasmHyMxCvgcRoHhCvvNF7LGk_3EYVR15jDnWly_JFT9BpNn_c9QSIU3bZwpfVpH_Rm6zaRq6aJJhQvAWMyKWNkduihaQy-aX8lnzSzsFKXITlMlHEQOcaAIIih87ZuxWYxjV2DYW8NDXqJr5p7ZjrSVk-293ic44A-Rd4vYR74tJZ9wDqId1PZ1TXh_RwU1LGjNMI6lGQi9y_9Y-uOci_sJbP7PC16sLVBaCzt-PK",
    author: "Editor Desk",
    authorRole: "CCAS Media",
    quote:
      "Our focus is to build affordable access while supporting local entrepreneurs.",
    quoteBy: "CCAS Director",
    highlights: [
      "5-year roadmap announced",
      "Urban adoption targets",
      "Entrepreneurship focus",
    ],
    nextSteps: [
      "Scale workforce development",
      "Increase micro-retailer support",
      "Expand city partnerships",
    ],
    summary: [
      "The director outlines the next phase of CCAS growth, focused on scaling access and affordability.",
      "Key milestones include workforce development, infrastructure upgrades, and policy coordination.",
    ],
    stats: ["5-year plan", "15 city partners", "200 entrepreneurs"],
    tags: ["Leadership", "Strategy", "Urban"],
  },
];

type BlogDetailPageProps = {
  params: { slug: string };
};

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = posts.find((item) => item.slug === params.slug) ?? posts[0];
  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

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
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base">schedule</span>
            {post.readTime}
          </span>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-3xl font-black leading-tight text-text-main dark:text-white md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-text-muted">{post.excerpt}</p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-surface-dark">
              <Image
                alt={post.title}
                className="h-[360px] w-full object-cover"
                height={720}
                priority
                sizes="(min-width: 1024px) 700px, 100vw"
                src={post.image}
                width={1200}
              />
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
              {post.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <blockquote className="rounded-2xl border-l-4 border-primary bg-primary/10 px-6 py-6 text-lg font-semibold text-text-main dark:text-white">
                “{post.quote}” — {post.quoteBy}
              </blockquote>
              <div className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark sm:grid-cols-2">
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
              </div>
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
              <p className="mt-3 text-sm text-text-muted">{post.summary[0]}</p>
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
                  <Image
                    alt={item.title}
                    className="object-cover"
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    src={item.image}
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="text-xs text-text-muted">
                    {item.date} • {item.readTime}
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
