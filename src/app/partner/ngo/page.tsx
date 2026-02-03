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

export default function NgoPartnerPage() {
  return (
    <div
      className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased overflow-x-hidden"
      style={themeStyles}
    >
      <div className="relative flex min-h-screen w-full flex-col">
        <SiteNav />

        <div className="relative w-full bg-[#0d1b12] py-16 md:py-24 border-b border-primary/10">
          <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
          </div>
          <div className="relative z-10 px-4 max-w-4xl mx-auto text-center">
            <nav className="flex justify-center mb-6">
              <ol className="flex items-center space-x-2 text-sm text-primary font-medium">
                <li>
                  <a className="hover:underline" href="/partner">
                    Partnership
                  </a>
                </li>
                <li>
                  <span className="material-symbols-outlined text-xs">
                    chevron_right
                  </span>
                </li>
                <li className="text-white/60">NGO &amp; Institutional</li>
              </ol>
            </nav>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
              NGO &amp; Institutional <span className="text-primary">Collaboration</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Join forces with CCAS to scale clean energy solutions. We invite
              international and local NGOs, academic institutions, and government
              agencies to collaborate on systemic change.
            </p>
          </div>
        </div>

        <main className="flex-grow py-16 md:py-24 px-4 md:px-10 flex justify-center bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 flex flex-col gap-10">
              <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    handshake
                  </span>
                  Partnering for Impact
                </h3>
                <p className="text-text-main/70 dark:text-white/70 mb-6 text-sm leading-relaxed">
                  We look for partners who share our commitment to the SDGs,
                  particularly Health (Goal 3), Gender Equality (Goal 5), and
                  Affordable Clean Energy (Goal 7).
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <p className="text-sm font-bold">Scalability</p>
                      <p className="text-xs text-text-main/60 dark:text-white/60">
                        Proven models ready for national expansion.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <p className="text-sm font-bold">Local Network</p>
                      <p className="text-xs text-text-main/60 dark:text-white/60">
                        Access to remote and underserved Somali regions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <p className="text-sm font-bold">Data Driven</p>
                      <p className="text-xs text-text-main/60 dark:text-white/60">
                        Rigorous impact monitoring and evaluation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="font-bold text-lg dark:text-white">
                  Recent Collaboration Case Studies
                </h4>
                <div className="group cursor-pointer">
                  <div
                    className="h-40 rounded-xl bg-cover bg-center mb-3 grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtKPrfWifCw6T6i6-FwXmrV7nqxfh4cJxS8Aid5B-AQ4Th0Ll66CKtFEqdcJFxYfPkq1KArqLFFC-jH_CjEIqsZXyTyQBEYM4rTw3q6Y3MZeHFY-zKjyIxkg7U6OAquZiHIgG7oUSdoXCPli4y2EvzkKYXXELt5mWPMPSi-v3KEbUydDTNW6HFDsgMHNz28ErAxj8nOKEAhEBBMOkJolgcZEAxBiRtkv64aiTivda4Hmxog0iCjBk66h2gWmzMa8ansZbDCXKloMA_')",
                    }}
                  ></div>
                  <h5 className="font-bold text-sm group-hover:text-primary transition-colors">
                    Urban Clean Cooking Initiative 2023
                  </h5>
                  <p className="text-xs text-text-main/60 dark:text-white/60">
                    Partnered with GIZ on household stove distribution.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold dark:text-white mb-2">
                    Inquiry Form
                  </h2>
                  <p className="text-text-main/60 dark:text-white/60">
                    Please provide detailed information about your organization
                    and proposed collaboration area.
                  </p>
                </div>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold dark:text-white">
                        Organization Name*
                      </label>
                      <input
                        className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                        placeholder="Enter full organization name"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold dark:text-white">
                        Organization Type*
                      </label>
                      <select
                        className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                        required
                      >
                        <option value="">Select Type</option>
                        <option>International NGO</option>
                        <option>Local NGO / CBO</option>
                        <option>Intergovernmental Organization (IGO)</option>
                        <option>Academic / Research Institution</option>
                        <option>Foundations / Philanthropy</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold dark:text-white">
                        Headquarters Country
                      </label>
                      <input
                        className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                        placeholder="e.g. Kenya, USA, Somalia"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold dark:text-white">
                        Website URL
                      </label>
                      <input
                        className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                        placeholder="https://..."
                        type="url"
                      />
                    </div>
                  </div>
                  <hr className="border-gray-100 dark:border-gray-800" />
                  <div className="space-y-6">
                    <div className="flex flex-col gap-4">
                      <label className="text-sm font-bold dark:text-white">
                        Primary Focus Areas (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          "Environment",
                          "Health",
                          "Energy Access",
                          "Gender & Inclusion",
                          "Economic Development",
                          "Climate Action",
                        ].map((label) => (
                          <label
                            key={label}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <input
                              className="size-5 rounded border-gray-300 text-primary focus:ring-primary bg-background-light dark:bg-background-dark"
                              type="checkbox"
                            />
                            <span className="text-sm dark:text-white/80 group-hover:text-primary transition-colors">
                              {label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <label className="text-sm font-bold dark:text-white">
                        Potential Collaboration Type
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: "Research & Development",
                            description:
                              "Data collection, monitoring, and impact studies.",
                          },
                          {
                            title: "Field Implementation",
                            description:
                              "Direct project execution and stove distribution.",
                          },
                          {
                            title: "Policy & Advocacy",
                            description:
                              "Engaging with stakeholders for legislative support.",
                          },
                          {
                            title: "Capacity Building",
                            description:
                              "Training programs for local artisans and technicians.",
                          },
                        ].map((item) => (
                          <label
                            key={item.title}
                            className="flex items-start gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary/50 cursor-pointer transition-all"
                          >
                            <input
                              className="mt-1 text-primary focus:ring-primary"
                              name="collab_type"
                              type="radio"
                            />
                            <div>
                              <p className="text-sm font-bold">{item.title}</p>
                              <p className="text-xs text-text-main/60 dark:text-white/60">
                                {item.description}
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-100 dark:border-gray-800" />
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold dark:text-white">
                        Collaboration Proposal / Message
                      </label>
                      <p className="text-xs text-text-main/50 dark:text-white/50 mb-1">
                        Briefly outline your vision for this partnership (min.
                        100 words recommended).
                      </p>
                      <textarea
                        className="w-full p-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                        placeholder="Describe the objectives, geographic scope, and estimated resources..."
                        rows={6}
                      ></textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold dark:text-white">
                        Upload Concept Note or Profile (Optional)
                      </label>
                      <div className="relative group">
                        <input
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          type="file"
                        />
                        <div className="w-full py-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center gap-2 group-hover:bg-primary/5 transition-colors">
                          <span className="material-symbols-outlined text-3xl text-text-main/40 dark:text-white/40">
                            cloud_upload
                          </span>
                          <p className="text-sm font-medium">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-text-main/40 dark:text-white/40">
                            PDF, DOCX up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold dark:text-white">
                      Point of Contact Email*
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      placeholder="representative@organization.org"
                      required
                      type="email"
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      className="w-full h-14 bg-primary hover:bg-primary-dark text-text-main font-black rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 transform active:scale-[0.98]"
                      type="submit"
                    >
                      Submit Formal Inquiry
                      <span className="material-symbols-outlined">send</span>
                    </button>
                    <p className="text-center text-[11px] text-text-main/40 dark:text-white/40 mt-4 italic">
                      By submitting, you agree to our Partnership Privacy Policy.
                      Our team will review your inquiry and respond within 5-7
                      business days.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

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
                    <a className="hover:text-primary transition-colors" href="/about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="/projects">
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
                    <a className="hover:text-primary transition-colors" href="/donate">
                      Donate
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors" href="/partner/volunteer">
                      Volunteer
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primary transition-colors text-primary font-bold" href="/partner/ngo">
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
                    <span className="material-symbols-outlined text-sm">location_on</span>
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
                <a className="text-text-main/50 hover:text-primary dark:text-white/50 transition-colors" href="#">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
                <a className="text-text-main/50 hover:text-primary dark:text-white/50 transition-colors" href="#">
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
