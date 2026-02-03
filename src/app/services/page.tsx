import type { CSSProperties } from "react";

import Image from "next/image";

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

const themeStyles = {
  "--color-primary": "#13ec5b",
  "--color-background-light": "#f6f8f6",
  "--color-background-dark": "#102216",
  "--color-accent-orange": "#f97316",
  "--font-display-font": '"Public Sans", sans-serif',
  "--font-body-font": '"Noto Sans", sans-serif',
} as CSSProperties;

export default function ServicesPage() {
  return (
    <div
      className="bg-background-light dark:bg-background-dark text-[#0d1b12] dark:text-white font-display overflow-x-hidden antialiased"
      style={themeStyles}
    >
      <SiteNav />

      <section className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-background-dark py-20 text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
          <Image
            alt="Community gathering representing clean cooking impact"
            className="h-full w-full object-cover opacity-60"
            priority
            fill
            sizes="100vw"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8I3KSElsMNIs9ROTRyxYe1zYN1wEEM5-CmLLjBujZMaIYy3tAvss9Gwc3FxPKJlmkRPCkzETmICNPHnV2tI5MCg3tQpb6K4QnBznynwIq5Zihm82dEU0PsBlZoGIxKqzPMl-e29emOco-PETkb3XlhDAa9M8QQKRD8UqM5a0Kemn8y47AXegCWhAj2OXzpAih0pWhWL0L4N3jhryts51ayW9ryxPSNF1aEe5sA4pRelq5keORkDvdIIE0M7RWxoUWgMN1yu2KztY6"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <span className="mb-4 inline-block rounded-full bg-accent-orange/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-orange backdrop-blur-sm border border-accent-orange/30">
            Our Mission
          </span>
          <h1 className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Strategic Focus Areas
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl font-body">
            Driving the transition to clean cooking across Somalia through
            targeted initiatives, sustainable solutions, and community
            empowerment.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0d1b12] dark:text-white">
            Our Core Pillars
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-body">
            CCAS operates through specific strategic pillars designed to create
            an enabling environment for the adoption of clean cooking
            technologies. We believe in a holistic approach that addresses
            policy, finance, and community needs simultaneously.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-20 rounded-full bg-primary"></div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white dark:bg-[#1a2e22] dark:border-[#2a4535]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "50k+",
                label: "Households Reached",
              },
              {
                value: "30%",
                label: "Fuel Cost Reduction",
              },
              {
                value: "12",
                label: "Policy Frameworks",
              },
              {
                value: "100+",
                label: "Entrepreneurs Trained",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-black text-accent-orange">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "gavel",
                title: "Enabling Environment",
                text: "Advocating for favorable policies and government regulations to support the clean cooking sector, reducing barriers to entry for new technologies.",
              },
              {
                icon: "school",
                title: "Capacity Building",
                text: "Providing comprehensive training and mentorship programs specifically designed for local businesses and women entrepreneurs in the energy sector.",
              },
              {
                icon: "payments",
                title: "Access to Finance",
                text: "Facilitating critical access to funding, micro-loans, and international grants for stakeholders to scale their clean cooking solutions effectively.",
              },
              {
                icon: "verified",
                title: "Technology & Standards",
                text: "Establishing and rigorously monitoring quality and safety standards for stoves and fuels to ensure consumer trust and product longevity.",
              },
              {
                icon: "campaign",
                title: "Consumer Awareness",
                text: "Conducting wide-reaching public education campaigns across Somalia to highlight the health, economic, and environmental benefits of clean cooking.",
              },
              {
                icon: "analytics",
                title: "Research & Development",
                text: "Gathering data, conducting field studies, and measuring impact to inform national strategy and attract investment into the sector.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 dark:bg-[#1a2e22] dark:border-[#2a4535]"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-[#e7f3eb] text-primary group-hover:bg-primary group-hover:text-white transition-colors dark:bg-[#254230]">
                  <span className="material-symbols-outlined text-3xl">
                    {card.icon}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0d1b12] dark:text-white">
                  {card.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-body">
                  {card.text}
                </p>
                <a
                  className="inline-flex items-center text-sm font-bold text-accent-orange hover:text-accent-orange/80"
                  href="#"
                >
                  Learn more
                  <span className="material-symbols-outlined ml-1 text-lg">
                    arrow_forward
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-background-dark relative">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Background pattern"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              fill
              sizes="100vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK4Penl6JUBbO86vYqJR7VVZ86Y-8bvcxCqHfbYTzrrHKtVethOjulPQ2Yhfh6uHLZyzaJ-u_6_8EugagR2COeN2NWME93uXjajGVAqeVKXUl132aaqnBce-Gx7wmsNioZ16Xcvsv2v9rU8wtH-rixcv9S9x8ji98-T6ENv6WQ3rYdAGgVmjJbpIeRVNpptKh-cO7dGQiJ_0Hb8pFmGqVJrdy53u3ZON858JuWVg1OKSvQbpUzt0hnUe6Qd9b_H8LcCvSTmr6nWOMK"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 px-8 py-12 text-center md:flex-row md:text-left lg:px-16">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to make an impact?
              </h2>
              <p className="text-lg text-gray-300 font-body">
                Join the movement towards a cleaner, healthier Somalia. Your
                partnership can change lives.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-[#0d1b12] hover:bg-white hover:text-background-dark transition-all">
                Become a Partner
              </button>
              <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg border-2 border-primary/30 bg-transparent px-6 text-base font-bold text-primary hover:border-primary hover:bg-primary/10 transition-all">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
