import type { CSSProperties } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { listLeadership } from "@/lib/leadership";

const themeStyles = {
  "--color-primary": "#13ec5b",
  "--color-primary-dark": "#0fb847",
  "--color-secondary": "#f97316",
  "--color-background-light": "#f8fcf9",
  "--color-background-dark": "#102216",
  "--color-surface-light": "#ffffff",
  "--color-surface-dark": "#1a3322",
  "--color-text-main": "#0d1b12",
  "--color-text-muted": "#4c9a66",
  fontFamily: '"Public Sans", sans-serif',
} as CSSProperties;

export default async function AboutPage() {
  const leadership = await listLeadership();
  return (
    <div
      className="bg-background-light dark:bg-background-dark text-text-main dark:text-white antialiased overflow-x-hidden"
      style={themeStyles}
    >
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        <SiteNav />

        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            data-alt="A panoramic view of a sunny Somali landscape with acacia trees and blue sky"
            style={{
              backgroundImage:
                "linear-gradient(rgba(13, 27, 18, 0.6) 0%, rgba(13, 27, 18, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyxQfxNS8Rw5cM3RRqn8LbYeLCLo82CXc2azhhMdBU5KY5gxJIUf_fu2il_CWLyI0DnwbPjgM44VZ89GcQhgru79DtIW0lQucj_oXqI8SeAhAV4qCwRhWfyTwYLOyw5IxATH_bgjXDqClJYH_Sl_ubGYTMbgvjg7IhbCnR4-_xujNU-2mmGPfl3SyMAVLeBVYQsvnoEMqxxnFcLVLPD4oc97kE6pngVgwAN7uoSlkpBlgutuW3xDP2-NfoU6ZidzOPym9g3VocsESy')",
            }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/90 text-white text-xs font-bold uppercase tracking-wider mb-2">
              Non-Profit Organization
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Driving Sustainable Change
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              We are dedicated to transforming the energy landscape of Somalia by
              providing clean, safe, and sustainable cooking solutions for every
              household.
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24 px-4 md:px-10 flex justify-center bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-12 h-1 bg-secondary rounded-full"></span>
                  <span className="text-secondary font-bold uppercase text-sm tracking-wider">
                    Who We Are
                  </span>
                </div>
                <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                  Bridging the gap between technology and community.
                </h2>
                <p className="text-text-main/80 dark:text-white/80 text-lg leading-relaxed">
                  The Clean Cooking Association of Somalia (CCAS) was founded
                  with a singular vision: to eliminate the health and
                  environmental hazards associated with traditional charcoal
                  cooking.
                </p>
                <p className="text-text-main/80 dark:text-white/80 text-base leading-relaxed">
                  We operate as a bridge, connecting international sustainable
                  technology providers with local Somali communities. By
                  fostering education and accessibility, we empower families to
                  make healthier choices that protect both their loved ones and
                  the beautiful forests of our nation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span className="text-text-main dark:text-white font-medium">
                    Registered Non-Profit
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span className="text-text-main dark:text-white font-medium">
                    Community Led
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span className="text-text-main dark:text-white font-medium">
                    Impact Focused
                  </span>
                </div>
              </div>
              <a
                className="mt-4 w-fit h-12 px-8 rounded-lg bg-white border border-gray-200 hover:border-primary hover:text-primary transition-all text-text-main font-bold shadow-sm flex items-center gap-2 group"
                download
                href="/file/sample-local-pdf.pdf"
              >
                <span>Read our Annual Report</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="relative order-1 lg:order-2 h-[400px] lg:h-[500px] w-full">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden bg-cover bg-center shadow-xl"
                data-alt="A Somali woman cooking outdoors using a clean energy stove with a smile"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtKPrfWifCw6T6i6-FwXmrV7nqxfh4cJxS8Aid5B-AQ4Th0Ll66CKtFEqdcJFxYfPkq1KArqLFFC-jH_CjEIqsZXyTyQBEYM4rTw3q6Y3MZeHFY-zKjyIxkg7U6OAquZiHIgG7oUSdoXCPli4y2EvzkKYXXELt5mWPMPSi-v3KEbUydDTNW6HFDsgMHNz28ErAxj8nOKEAhEBBMOkJolgcZEAxBiRtkv64aiTivda4Hmxog0iCjBk66h2gWmzMa8ansZbDCXKloMA_')",
                }}
              ></div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 max-w-[200px] hidden md:block">
                <p className="text-4xl font-black text-secondary">50k+</p>
                <p className="text-sm font-medium text-text-main dark:text-white mt-1">
                  Households impacted across Somalia
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-surface-light dark:bg-surface-dark px-4 md:px-10 flex justify-center">
          <div className="w-full max-w-[1280px] flex flex-col gap-12">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
              <span className="text-primary font-bold uppercase text-sm tracking-wider">
                Our Purpose
              </span>
              <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold">
                Three Pillars of Impact
              </h2>
              <p className="text-text-main/70 dark:text-white/70 text-lg">
                Our strategy is built on three core pillars designed to create
                lasting, systemic change in how energy is consumed at the
                household level.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#2a4533] hover:shadow-lg transition-shadow duration-300">
                <div className="size-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-3xl">eco</span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  Environmental Sustainability
                </h3>
                <p className="text-text-main/70 dark:text-white/70 leading-relaxed">
                  Combating deforestation by promoting eco-friendly fuel sources
                  that reduce the heavy reliance on charcoal production,
                  preserving Somalia&apos;s natural heritage.
                </p>
              </div>
              <div className="flex flex-col p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#2a4533] hover:shadow-lg transition-shadow duration-300">
                <div className="size-14 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6 text-secondary">
                  <span className="material-symbols-outlined text-3xl">
                    pulmonology
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  Health &amp; Well-being
                </h3>
                <p className="text-text-main/70 dark:text-white/70 leading-relaxed">
                  Reducing indoor air pollution is critical. Our stoves minimize
                  smoke inhalation, directly lowering rates of respiratory and
                  ocular diseases in women and children.
                </p>
              </div>
              <div className="flex flex-col p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#2a4533] hover:shadow-lg transition-shadow duration-300">
                <div className="size-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-500">
                  <span className="material-symbols-outlined text-3xl">
                    diversity_3
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  Community Empowerment
                </h3>
                <p className="text-text-main/70 dark:text-white/70 leading-relaxed">
                  We don&apos;t just donate; we build markets. We empower local
                  entrepreneurs to distribute and service clean cooking
                  technologies, creating green jobs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 md:px-10 flex justify-center bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-[1280px] flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-text-main dark:text-white text-3xl font-bold">
                Our Leadership
              </h2>
              <p className="text-text-main/70 dark:text-white/70">
                Dedicated professionals committed to a cleaner Somalia.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((member) => (
                <div className="group flex flex-col gap-4" key={member.id}>
                  <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 relative">
                    {member.imageUrl ? (
                      <img
                        alt={member.altText || `Portrait of ${member.name}`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={member.imageUrl}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-4xl font-semibold text-gray-500">
                        {member.name
                          .split(" ")
                          .map((part) => part.charAt(0))
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-text-main dark:text-white text-lg font-bold">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 flex justify-center bg-primary">
          <div className="w-full max-w-[960px] text-center flex flex-col items-center gap-6">
            <h2 className="text-text-main text-3xl md:text-5xl font-black tracking-tight">
              Join the Clean Cooking Revolution
            </h2>
            <p className="text-text-main/80 text-lg md:text-xl max-w-2xl font-medium">
              Help us reach more families. Your support can provide a smokeless
              stove to a family in need today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                className="h-12 px-8 rounded-lg bg-text-main text-white font-bold hover:bg-black transition-colors shadow-lg flex items-center justify-center"
                href="/donate"
              >
                Make a Donation
              </Link>
              <Link
                className="h-12 px-8 rounded-lg bg-white/20 text-text-main font-bold border border-text-main/20 hover:bg-white/30 transition-colors backdrop-blur-sm flex items-center justify-center"
                href="/partner"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
