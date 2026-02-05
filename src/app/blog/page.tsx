import Link from "next/link";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-200">
      <SiteNav />

      <main className="flex-grow">
        <section className="w-full py-12 md:py-16 px-4 md:px-8 bg-gradient-to-b from-background-light to-white dark:from-background-dark dark:to-background-dark/50">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="w-full lg:w-3/5 relative group cursor-pointer overflow-hidden rounded-xl shadow-md">
                <div
                  className="aspect-video w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-alt="Somali women cooking with clean energy stoves in a bright kitchen"
                  style={{
                    backgroundImage:
                      "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBao2OSfhlujlZQP9Fi0phbpe1UumYecv-3vTtyJDon4wt7KQBr_QJNqCt9s3oYtqfQqJNmHukq6fcJ5RFeuNF0k9oIENSMqPjCriCaarLpEF_wscwRX3fYJFdxbSq0hyHLoY2gXc0AdTCdrYr7pYlosTQ1HxLhHiyEZOiyU9eWPr_iSeyx_xpZEZMCkP8LNqgAiZX1ZUEoF1lCoLNwT8SJofb1okG6SS4x-g7p2aKRuaiRBUAembfDN9MJ6y3rxnel-vHOr1ndHDtL\")",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white mb-3 shadow-sm">
                    Featured Story
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 text-text-sub-light dark:text-text-sub-dark text-sm">
                  <span className="material-symbols-outlined text-lg">
                    calendar_today
                  </span>
                  <span>October 24, 2023</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4 text-text-main-light dark:text-text-main-dark">
                  Transforming Mogadishu’s Kitchens: The Shift to LPG
                </h1>
                <p className="text-base md:text-lg text-text-sub-light dark:text-text-sub-dark mb-8 leading-relaxed">
                  Discover how the transition to clean cooking energy is improving
                  health, reducing deforestation, and empowering communities across
                  Somalia&apos;s capital.
                </p>
                <Link
                  className="flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-[#0d1b12] shadow-lg shadow-primary/20 transition-all hover:bg-green-400 hover:shadow-green-400/30"
                  href="/blog/mogadishu-lpg-shift"
                >
                  <span>Read Full Article</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="group flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Clean energy meeting with Ministry officials in a conference room"
                    style={{
                      backgroundImage:
                        "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuAOWYOiD6xPBUW7VUOrLFrachvYWTf0J8_DyvE7JauhfYCsx098aDMMNVcmDox2Zz8cib7TyEheTw9EbuUkLl9JZ3zilXCV3ye7E8J2nb7ZgsRcA78JBZ24086dAA58eYwS-0s-fceeTd-2UdZm9FwKxeF3E1y1gQB3xolgTqNfkkBDVgUFbX7WSbzF38QVHuKOptNHIkPBueqsQUt220eYASDmdHVNReU7ljR5mHA0nB6KjAJzPIy9p6TFv8rS6nG98s22u8sIOs4H\")",
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded bg-white/90 dark:bg-black/80 px-2 py-1 text-xs font-bold uppercase tracking-wide text-secondary backdrop-blur-sm">
                      News
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-text-sub-light dark:text-text-sub-dark">
                    <span>Oct 24, 2023</span>
                    <span>•</span>
                    <span>3 min read</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                    CCAS Partners with Ministry of Energy for New Initiative
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-text-sub-light dark:text-text-sub-dark line-clamp-3">
                    A landmark agreement to accelerate the adoption of clean cooking
                    solutions across rural regions in Somalia.
                  </p>
                  <Link
                    className="inline-flex items-center text-sm font-bold text-primary hover:text-green-400"
                    href="/blog/ministry-energy-initiative"
                  >
                    Read more
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>

              <article className="group flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Happy Somali family gathered around a meal cooked with clean energy"
                    style={{
                      backgroundImage:
                        "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDpg3dU8XaZSE5JVxJ0ob30ArTBiNClyLKNAYCQq7VqMuOVMpfOggBrAEjeg0kf9MaI2G37Flv6lreLuK-kBvJ0tNtYktKXKkeCkPZuqsHcThRW965HVDeZ6RFtOHkLV-RzTsaPv1cYor6aWUTRlyyLJKTkWTi56i248I4ru1xXRHMnViW1g5TRDSEk491KEsyC9zgr8x8wLc2pvW1dL6qDdjFZEuGofjgPimIoyLadcOfwuQ7x3h1s2jyMxm1v5XtvbFs3B1tzj2cw\")",
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded bg-white/90 dark:bg-black/80 px-2 py-1 text-xs font-bold uppercase tracking-wide text-secondary backdrop-blur-sm">
                      Impact
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-text-sub-light dark:text-text-sub-dark">
                    <span>Oct 18, 2023</span>
                    <span>•</span>
                    <span>4 min read</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                    5 Benefits of Clean Cooking for Somali Families
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-text-sub-light dark:text-text-sub-dark line-clamp-3">
                    Beyond convenience, clean cooking brings vital health improvements
                    and economic savings to households.
                  </p>
                  <Link
                    className="inline-flex items-center text-sm font-bold text-primary hover:text-green-400"
                    href="/blog/clean-cooking-benefits"
                  >
                    Read more
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>

              <article className="group flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Data chart showing reduction in charcoal usage over time"
                    style={{
                      backgroundImage:
                        "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBrw6uCsEBAKzir1Et8VLO4-otuxXsa9aHEukZnXJDJNbOZ5fIad3usRxEvkEuS-TjuRqZKuHpYnXPIWNLX8jL7K8o2x1DjN-BmOb4UosRnp3srWDvAG9muXqCRxFBnAjBVtyFDBISRdaKyGzScKCRhfe0h8PoZi2rnHv-0nAGIPgShddardNtRv_S1cKZdbnpEJWvoySbAWb_P401TOTjx0oB_ZEA9uJOECP8TF4uXkl91E2VSXoFSLiBtIDlBqENLVmVMUMZsi88t\")",
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded bg-white/90 dark:bg-black/80 px-2 py-1 text-xs font-bold uppercase tracking-wide text-secondary backdrop-blur-sm">
                      Reports
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-text-sub-light dark:text-text-sub-dark">
                    <span>Oct 10, 2023</span>
                    <span>•</span>
                    <span>10 min read</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                    Quarterly Report: Reducing Charcoal Usage by 20%
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-text-sub-light dark:text-text-sub-dark line-clamp-3">
                    Our latest data shows significant progress in reducing reliance on
                    harmful charcoal in pilot districts.
                  </p>
                  <Link
                    className="inline-flex items-center text-sm font-bold text-primary hover:text-green-400"
                    href="/blog/quarterly-report-20"
                  >
                    Download Report
                    <span className="material-symbols-outlined text-sm ml-1">
                      download
                    </span>
                  </Link>
                </div>
              </article>

              <article className="group flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Community members gathered for a workshop on LPG safety"
                    style={{
                      backgroundImage:
                        "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDGCLaE5GU473KPLjDUE0Y4fifUemI9YCgJfr9XwhMvO-48k3qnVgYvbu33_FGM3gHG19QyofZ9HiWPqKmjV5WyzclvbnIhMSao-i2PiI4mldCIFpYzmJwJUOsF1BpAUK2KzTx-1iXiKYae65VAgC_T0Qp1YrDsct5JXfTBJwMdPT6GbhgM9UP0TPZEpcDQAzAEfTbyP9pXuvDKbSGnIvpb14X9QYSEyJjFZWnUgmGdWv47eeiXXO8GgryD3qaQ3G2KGroHfuZriKQX\")",
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded bg-white/90 dark:bg-black/80 px-2 py-1 text-xs font-bold uppercase tracking-wide text-secondary backdrop-blur-sm">
                      Events
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-text-sub-light dark:text-text-sub-dark">
                    <span>Sep 28, 2023</span>
                    <span>•</span>
                    <span>2 min read</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                    Community Workshop: Safe LPG Handling
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-text-sub-light dark:text-text-sub-dark line-clamp-3">
                    Join us this Saturday for a hands-on demonstration on how to safely
                    connect and use LPG cylinders.
                  </p>
                  <Link
                    className="inline-flex items-center text-sm font-bold text-primary hover:text-green-400"
                    href="/blog/lpg-safety-workshop"
                  >
                    View Details
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>

              <article className="group flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Solar cooker being used outdoors under the sun"
                    style={{
                      backgroundImage:
                        "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuB8pq17Of8CV9fPjgODJZBinKalihg2pNgzJnwSZ0z0nd0hDGbSlKZx3Q5cOoMtD6mQNpwp1U1iEY3HxDf_BWm5ViL0kUCHtdqmlD5hxWB3-8-PKU_m2cZkGsdY6Gcm8ELn_Tyr5KklBo1xkn-GLFU0JLZhTcVwllandaSLwu9aZ87mT3OSERJmJvBeNdhXHdd2QE9-EQulIxOjCn6YpmT9Xe3b6s60IqRBEnEaa99MdqD4fUrCCg5G3bZ36Qawfd_ugeZwkbc4kguu\")",
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded bg-white/90 dark:bg-black/80 px-2 py-1 text-xs font-bold uppercase tracking-wide text-secondary backdrop-blur-sm">
                      Insights
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-text-sub-light dark:text-text-sub-dark">
                    <span>Sep 15, 2023</span>
                    <span>•</span>
                    <span>6 min read</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                    Solar Cooking: A Viable Alternative?
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-text-sub-light dark:text-text-sub-dark line-clamp-3">
                    Exploring the potential and challenges of solar-based cooking
                    technologies in the Horn of Africa.
                  </p>
                  <Link
                    className="inline-flex items-center text-sm font-bold text-primary hover:text-green-400"
                    href="/blog/solar-cooking-alternative"
                  >
                    Read more
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>

              <article className="group flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Interview setting with CCAS Director and journalist"
                    style={{
                      backgroundImage:
                        "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuB6atQDB3RDQcRiwJ0z3hUI1H1kD0cD1a3ZX0lasmHyMxCvgcRoHhCvvNF7LGk_3EYVR15jDnWly_JFT9BpNn_c9QSIU3bZwpfVpH_Rm6zaRq6aJJhQvAWMyKWNkduihaQy-aX8lnzSzsFKXITlMlHEQOcaAIIih87ZuxWYxjV2DYW8NDXqJr5p7ZjrSVk-293ic44A-Rd4vYR74tJZ9wDqId1PZ1TXh_RwU1LGjNMI6lGQi9y_9Y-uOci_sJbP7PC16sLVBaCzt-PK\")",
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded bg-white/90 dark:bg-black/80 px-2 py-1 text-xs font-bold uppercase tracking-wide text-secondary backdrop-blur-sm">
                      News
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-text-sub-light dark:text-text-sub-dark">
                    <span>Sep 01, 2023</span>
                    <span>•</span>
                    <span>8 min read</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight text-text-main-light dark:text-text-main-dark group-hover:text-primary transition-colors">
                    Interview with CCAS Director on Future Goals
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-text-sub-light dark:text-text-sub-dark line-clamp-3">
                    Our Director discusses the 5-year roadmap for achieving 100% clean
                    cooking access in urban centers.
                  </p>
                  <Link
                    className="inline-flex items-center text-sm font-bold text-primary hover:text-green-400"
                    href="/blog/director-interview"
                  >
                    Read more
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>
            </div>

            <div className="mt-12 flex justify-center">
              <nav aria-label="Pagination" className="flex items-center gap-2">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-text-main-light dark:text-text-main-dark hover:bg-gray-50 dark:hover:bg-gray-800"
                  type="button"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-[#0d1b12] font-bold shadow-sm ring-1 ring-inset ring-transparent"
                  type="button"
                >
                  1
                </button>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-text-main-light dark:text-text-main-dark hover:bg-gray-50 dark:hover:bg-gray-800"
                  type="button"
                >
                  2
                </button>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-text-main-light dark:text-text-main-dark hover:bg-gray-50 dark:hover:bg-gray-800"
                  type="button"
                >
                  3
                </button>
                <span className="flex h-10 w-10 items-center justify-center text-text-sub-light">
                  ...
                </span>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-text-main-light dark:text-text-main-dark hover:bg-gray-50 dark:hover:bg-gray-800"
                  type="button"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </nav>
            </div>
          </div>
        </section>

        <section className="bg-[#102216] py-16 px-4 md:px-8">
          <div className="mx-auto max-w-[800px] text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-secondary/20 p-3 mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">
                mail
              </span>
            </div>
            <h2 className="text-3xl font-black text-white mb-4">
              Stay Updated with CCAS
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Get the latest news, impact stories, and reports on clean cooking in
              Somalia delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary backdrop-blur-sm"
                placeholder="Your email address"
                type="email"
              />
              <button
                className="bg-secondary hover:bg-[#ff7b29] text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-secondary/20"
                type="button"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
