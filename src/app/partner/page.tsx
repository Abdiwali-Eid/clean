import type { CSSProperties } from "react";

import SiteFooter from "@/components/SiteFooter";
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

export default function PartnerPage() {
  return (
    <div
      className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased overflow-x-hidden"
      style={themeStyles}
    >
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        <SiteNav />

        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            data-alt="Collaboration and partnership visual"
            style={{
              backgroundImage:
                "linear-gradient(rgba(13, 27, 18, 0.7) 0%, rgba(13, 27, 18, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyxQfxNS8Rw5cM3RRqn8LbYeLCLo82CXc2azhhMdBU5KY5gxJIUf_fu2il_CWLyI0DnwbPjgM44VZ89GcQhgru79DtIW0lQucj_oXqI8SeAhAV4qCwRhWfyTwYLOyw5IxATH_bgjXDqClJYH_Sl_ubGYTMbgvjg7IhbCnR4-_xujNU-2mmGPfl3SyMAVLeBVYQsvnoEMqxxnFcLVLPD4oc97kE6pngVgwAN7uoSlkpBlgutuW3xDP2-NfoU6ZidzOPym9g3VocsESy')",
            }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-wider mb-2">
              Build The Future Together
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Partner With CCAS
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Collaborate with us to accelerate the transition to clean cooking
              across Somalia. Together, we can create a healthier, greener, and
              more sustainable future.
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24 px-4 md:px-10 flex justify-center bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] lg:h-[550px] w-full">
              <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform -translate-x-4 translate-y-4"></div>
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden bg-cover bg-center shadow-xl"
                data-alt="Community meeting and partnership discussion"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtKPrfWifCw6T6i6-FwXmrV7nqxfh4cJxS8Aid5B-AQ4Th0Ll66CKtFEqdcJFxYfPkq1KArqLFFC-jH_CjEIqsZXyTyQBEYM4rTw3q6Y3MZeHFY-zKjyIxkg7U6OAquZiHIgG7oUSdoXCPli4y2EvzkKYXXELt5mWPMPSi-v3KEbUydDTNW6HFDsgMHNz28ErAxj8nOKEAhEBBMOkJolgcZEAxBiRtkv64aiTivda4Hmxog0iCjBk66h2gWmzMa8ansZbDCXKloMA_')",
                }}
              ></div>
              <div className="absolute -top-6 -right-6 bg-white dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 max-w-[220px] hidden md:block">
                <p className="text-4xl font-black text-primary">100+</p>
                <p className="text-sm font-medium text-text-main dark:text-white mt-1">
                  Active partners driving impact today
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-12 h-1 bg-secondary rounded-full"></span>
                  <span className="text-secondary font-bold uppercase text-sm tracking-wider">
                    The CCAS Advantage
                  </span>
                </div>
                <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                  Why Partner With Us?
                </h2>
                <p className="text-text-main/80 dark:text-white/80 text-lg leading-relaxed">
                  CCAS offers a unique platform for organizations to achieve ESG
                  goals while making a tangible difference in the lives of
                  Somali families.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">insights</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Local Expertise
                    </h4>
                    <p className="text-text-main/70 dark:text-white/70">
                      Deep-rooted connections in local communities across
                      Somalia ensure that projects are culturally relevant and
                      impactful.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Proven Track Record
                    </h4>
                    <p className="text-text-main/70 dark:text-white/70">
                      With over 50,000 households reached, we have the
                      infrastructure and experience to scale clean cooking
                      solutions effectively.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Transparent Reporting
                    </h4>
                    <p className="text-text-main/70 dark:text-white/70">
                      We provide detailed impact metrics, ensuring our partners
                      can see exactly how their contributions are changing
                      lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-surface-light dark:bg-surface-dark px-4 md:px-10 flex justify-center">
          <div className="w-full max-w-[1280px] flex flex-col gap-12">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
              <span className="text-primary font-bold uppercase text-sm tracking-wider">
                Get Involved
              </span>
              <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold">
                Partnership Types
              </h2>
              <p className="text-text-main/70 dark:text-white/70 text-lg">
                There are many ways to support our mission. Choose the path that
                best aligns with your goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#2a4533] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="size-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    corporate_fare
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  Corporate Partners
                </h3>
                <p className="text-text-main/70 dark:text-white/70 leading-relaxed mb-6">
                  Support us through CSR initiatives, technology grants, or
                  co-branded campaigns that highlight your commitment to
                  sustainability.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check
                    </span>
                    <span>ESG Alignment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check
                    </span>
                    <span>Brand Visibility</span>
                  </li>
                </ul>
                <a
                  className="mt-auto text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  href="/partner/corporate"
                >
                  Inquire Now
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="flex flex-col p-8 rounded-2xl bg-white dark:bg-surface-dark border-2 border-primary shadow-lg scale-105 relative z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-text-main text-[10px] font-black uppercase px-4 py-1 rounded-full">
                  Most Common
                </div>
                <div className="size-14 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6 text-secondary">
                  <span className="material-symbols-outlined text-3xl">
                    public
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  NGOs &amp; Institutional
                </h3>
                <p className="text-text-main/70 dark:text-white/70 leading-relaxed mb-6">
                  Collaborate on large-scale development programs, research, and
                  policy advocacy to create systemic change across the region.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      check
                    </span>
                    <span>Joint Program Implementation</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      check
                    </span>
                    <span>Resource Sharing</span>
                  </li>
                </ul>
                <a
                  className="mt-auto text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  href="/partner/ngo"
                >
                  Collaborate
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
              <div className="flex flex-col p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-[#e7f3eb] dark:border-[#2a4533] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="size-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-500">
                  <span className="material-symbols-outlined text-3xl">
                    person_celebrate
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  Individual &amp; Volunteer
                </h3>
                <p className="text-text-main/70 dark:text-white/70 leading-relaxed mb-6">
                  Offer your time or expertise in marketing, technology, or
                  fundraising to help our operations grow and reach more
                  households.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-blue-500 text-sm">
                      check
                    </span>
                    <span>Skill-based Volunteering</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-blue-500 text-sm">
                      check
                    </span>
                    <span>Advocacy Programs</span>
                  </li>
                </ul>
                <a
                  className="mt-auto text-blue-500 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  href="/partner/volunteer"
                >
                  Join Us
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-16 md:py-24 px-4 md:px-10 flex justify-center bg-background-light dark:bg-background-dark"
          id="contact"
        >
          <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold dark:text-white mb-4">
                  Start a Conversation
                </h2>
                <p className="text-text-main/70 dark:text-white/70 text-lg">
                  Ready to make an impact? Fill out the form below and our
                  partnership team will get back to you within 48 hours.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-bold dark:text-white">Email Us</p>
                    <p className="text-text-main/60 dark:text-white/60">
                      partnerships@ccas.so
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-bold dark:text-white">Call Us</p>
                    <p className="text-text-main/60 dark:text-white/60">
                      +252 61 5000000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold dark:text-white">Office Location</p>
                    <p className="text-text-main/60 dark:text-white/60">
                      Km4, Airport Road, Mogadishu, Somalia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <form className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold dark:text-white">
                    Full Name
                  </label>
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold dark:text-white">
                    Email Address
                  </label>
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="john@organization.com"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold dark:text-white">
                    Organization Name
                  </label>
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    placeholder="Optional"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold dark:text-white">
                    Partnership Type
                  </label>
                  <select className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none">
                    <option>Corporate</option>
                    <option>NGO / Non-Profit</option>
                    <option>Volunteer</option>
                    <option>Academic / Research</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold dark:text-white">
                    Message / Proposal
                  </label>
                  <textarea
                    className="w-full p-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                    placeholder="Tell us how you would like to partner..."
                    rows={4}
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    className="w-full h-14 bg-primary hover:bg-primary-dark text-text-main font-black rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
                    type="submit"
                  >
                    Submit Inquiry
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
