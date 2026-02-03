import type { CSSProperties } from "react";
import SiteNav from "@/components/SiteNav";

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

export default function AboutPage() {
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
              <button className="mt-4 w-fit h-12 px-8 rounded-lg bg-white border border-gray-200 hover:border-primary hover:text-primary transition-all text-text-main font-bold shadow-sm flex items-center gap-2 group">
                <span>Read our Annual Report</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
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
              <div className="group flex flex-col gap-4">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Portrait of Ahmed Ali, Executive Director, wearing a suit and smiling"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD98ag23cB9YgdwI7xL4JZ1u5uar0kKcDYz7PXM-S6ZqHxDePRe2SO01lT6-X0j0H-aurkvmY0dwoim-CFJX7Nh4fWvpeK8oZJB-eGk6HQ8t0pC_Bam8_GyhZ-YBVsOZACuljX3cVpEQGbslniAjm8YUA90P3WvNsknXrgYWm44pB5nIi4r4MgYC1KoehqIeAKiNmUnfyZ3Sfyr5CYTuSWL2SdhdQ_XNo7PrdtQKvnF3QJd0OZ7mqXT6BVWMWjfddq6Wg0RQ78PkppA')",
                    }}
                  ></div>
                </div>
                <div>
                  <h3 className="text-text-main dark:text-white text-lg font-bold">
                    Ahmed Ali
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    Executive Director
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-4">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Portrait of Fatima Nur, Program Manager, wearing a hijab and business attire"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBahSuE31qMWMt84gvlD98_tT13PI9EY4bEgH2DKODN-FZwlMMVW3dXDum2mCAKoUeJAY7a8evs_4vWfYyvXJteJy31dcWkCIyMCbTJWYGqklUEGttXBScdgxDX0YoXjoInn2tcLmwvGTgKlYKCC6kR7Hq8sZhRFNrN4ugy0Buc9ni6jtT15niRKm7TYcjrPBcQywzv8DbtxgBYGbJtbxLNX0K6UV8e0K6SC9-3NHVw7FNYTzSPdb0G44MxE7zsZcveGi5_-uskyLO')",
                    }}
                  ></div>
                </div>
                <div>
                  <h3 className="text-text-main dark:text-white text-lg font-bold">
                    Fatima Nur
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    Program Manager
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-4">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Portrait of Hassan Gedi, Community Outreach, smiling warmly"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpr8IuFrQx6o2LIE_KbK6vDG4UuhstOKb0_FVFtdjPaRWllEiUPKPQTQFBHVyDwrEp_jZos3SJyfLNg7n4HVPh4ofivH6bGKDQsWoZlxXmNVrMLqq8XTg0oGGqik50RsGz_ogVpn_zwI4E2MnnJH81yHt93vJRvoZlbEJCIWzdwGTww7nMfoAWSR7IX5JaV1-l2DYdpbgVztnoNbkJ-u7yYe1a2_bWutvXnWOShY60ovrLyYlxdMXVyoSk9E4JXzyeM2Iu4Tei_E0u')",
                    }}
                  ></div>
                </div>
                <div>
                  <h3 className="text-text-main dark:text-white text-lg font-bold">
                    Hassan Gedi
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    Community Outreach
                  </p>
                </div>
              </div>
              <div className="group flex flex-col gap-4">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    data-alt="Portrait of Safia Abdi, Finance Officer, in professional attire"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxxEiu38E_sklLJIFeQIh58TfSHbuQPUT7EEZllqvXAGB0hUWrUr_xgcbICvDXWbeT9I4HuIdNcAIdkumIU-PY-215gTIcf_G5PFL9V6P8x-xOP87PYdwCVja3HRkaJMRgu6QCcA1zOEqzIi9BXz7ZUXST91MKcU0inIe8Z-nn0Se-G0IDkGlr7kvMecStQyRr7H-l3s2HDpDB9_O3EA0ZIml7wdXUMBp6R6EsJZmr8GaIVykY0CMr8txsPPL1c9GPV2jGDGCRJNuq')",
                    }}
                  ></div>
                </div>
                <div>
                  <h3 className="text-text-main dark:text-white text-lg font-bold">
                    Safia Abdi
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    Finance Officer
                  </p>
                </div>
              </div>
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
              <button className="h-12 px-8 rounded-lg bg-text-main text-white font-bold hover:bg-black transition-colors shadow-lg">
                Make a Donation
              </button>
              <button className="h-12 px-8 rounded-lg bg-white/20 text-text-main font-bold border border-text-main/20 hover:bg-white/30 transition-colors backdrop-blur-sm">
                Partner With Us
              </button>
            </div>
          </div>
        </section>

        <footer className="bg-surface-light dark:bg-surface-dark border-t border-[#e7f3eb] dark:border-[#2a4533] pt-16 pb-8">
          <div className="layout-container px-4 md:px-10 mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-text-main dark:text-white">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    eco
                  </span>
                  <span className="text-xl font-bold">CCAS</span>
                </div>
                <p className="text-text-main/60 dark:text-white/60 text-sm">
                  Empowering Somalia through sustainable energy solutions for a
                  healthier future.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-text-main dark:text-white mb-4">
                  Organization
                </h4>
                <ul className="flex flex-col gap-2 text-sm text-text-main/70 dark:text-white/70">
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Our Projects
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Impact Reports
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Team
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-main dark:text-white mb-4">
                  Get Involved
                </h4>
                <ul className="flex flex-col gap-2 text-sm text-text-main/70 dark:text-white/70">
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Donate
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Volunteer
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Partner
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="#">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-text-main dark:text-white mb-4">
                  Contact
                </h4>
                <ul className="flex flex-col gap-2 text-sm text-text-main/70 dark:text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">mail</span>
                    <span>info@ccas.so</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">call</span>
                    <span>+252 61 5000000</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    <span>Mogadishu, Somalia</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#e7f3eb] dark:border-[#2a4533] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-text-main/50 dark:text-white/50 text-xs">
                © 2024 Clean Cooking Association of Somalia. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a
                  className="text-text-main/50 hover:text-primary dark:text-white/50 transition-colors"
                  href="#"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
                <a
                  className="text-text-main/50 hover:text-primary dark:text-white/50 transition-colors"
                  href="#"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
