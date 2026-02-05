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

export default function VolunteerPage() {
  return (
    <div
      className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased overflow-x-hidden"
      style={themeStyles}
    >
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        <SiteNav />

        <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(13, 27, 18, 0.7) 0%, rgba(13, 27, 18, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtKPrfWifCw6T6i6-FwXmrV7nqxfh4cJxS8Aid5B-AQ4Th0Ll66CKtFEqdcJFxYfPkq1KArqLFFC-jH_CjEIqsZXyTyQBEYM4rTw3q6Y3MZeHFY-zKjyIxkg7U6OAquZiHIgG7oUSdoXCPli4y2EvzkKYXXELt5mWPMPSi-v3KEbUydDTNW6HFDsgMHNz28ErAxj8nOKEAhEBBMOkJolgcZEAxBiRtkv64aiTivda4Hmxog0iCjBk66h2gWmzMa8ansZbDCXKloMA_')",
            }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-4">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-wider mb-2">
              Join the Movement
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Become a CCAS Volunteer
            </h1>
            <p className="text-white/90 text-lg font-normal leading-relaxed max-w-2xl">
              Your skills and passion can help bring clean energy to every
              household in Somalia. Join our dedicated community of changemakers.
            </p>
          </div>
        </div>

        <main className="py-16 md:py-24 px-4 md:px-10 flex justify-center bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 flex flex-col gap-10">
              <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-[#e7f3eb] dark:border-[#2a4533]">
                <h3 className="text-2xl font-bold mb-6 text-text-main dark:text-white">
                  Why Volunteer?
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined">favorite</span>
                    </div>
                    <div>
                      <p className="font-bold text-text-main dark:text-white">
                        Make an Impact
                      </p>
                      <p className="text-sm text-text-main/70 dark:text-white/70 leading-relaxed">
                        Directly contribute to improving health and environmental
                        outcomes for Somali families.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <div>
                      <p className="font-bold text-text-main dark:text-white">
                        Professional Growth
                      </p>
                      <p className="text-sm text-text-main/70 dark:text-white/70 leading-relaxed">
                        Gain hands-on experience in the renewable energy and NGO
                        sector in East Africa.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                      <span className="material-symbols-outlined">group</span>
                    </div>
                    <div>
                      <p className="font-bold text-text-main dark:text-white">
                        Community
                      </p>
                      <p className="text-sm text-text-main/70 dark:text-white/70 leading-relaxed">
                        Network with passionate professionals and local leaders
                        dedicated to Somalia&apos;s growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyxQfxNS8Rw5cM3RRqn8LbYeLCLo82CXc2azhhMdBU5KY5gxJIUf_fu2il_CWLyI0DnwbPjgM44VZ89GcQhgru79DtIW0lQucj_oXqI8SeAhAV4qCwRhWfyTwYLOyw5IxATH_bgjXDqClJYH_Sl_ubGYTMbgvjg7IhbCnR4-_xujNU-2mmGPfl3SyMAVLeBVYQsvnoEMqxxnFcLVLPD4oc97kE6pngVgwAN7uoSlkpBlgutuW3xDP2-NfoU6ZidzOPym9g3VocsESy')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <p className="text-white text-sm italic font-medium">
                    &quot;Volunteering with CCAS has been the most rewarding
                    experience of my career. I&apos;ve seen firsthand the change we
                    bring to rural communities.&quot; — Amina H., Field Volunteer
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold dark:text-white mb-2">
                    Volunteer Application
                  </h2>
                  <p className="text-text-main/60 dark:text-white/60">
                    Please share your details with us. We&apos;re excited to learn
                    about your skills and availability.
                  </p>
                </div>
                <form
                  action="/api/forms"
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
                  method="post"
                >
                  <input
                    name="formType"
                    type="hidden"
                    value="partner_volunteer"
                  />
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold dark:text-white">
                      Full Name
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      name="fullName"
                      placeholder="Enter your full name"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold dark:text-white">
                      Email Address
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      name="email"
                      placeholder="email@example.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold dark:text-white">
                      Phone Number
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      name="phone"
                      placeholder="+252 ..."
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold dark:text-white">
                      Availability
                    </label>
                    <select
                      className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      name="availability"
                    >
                      <option>Full-time</option>
                      <option>Part-time (Weekdays)</option>
                      <option>Part-time (Weekends)</option>
                      <option>Project-based / Remote</option>
                      <option>Occasional / Events</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <label className="text-sm font-bold dark:text-white">
                      Core Skills &amp; Interests (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        "Marketing",
                        "Technical Support",
                        "Policy & Advocacy",
                        "Community Outreach",
                        "Fundraising",
                        "Data Analysis",
                      ].map((label) => (
                        <label
                          key={label}
                          className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-primary/5 cursor-pointer transition-colors"
                        >
                          <input
                            className="w-5 h-5 rounded text-primary border-gray-300 focus:ring-primary"
                            name="skills"
                            type="checkbox"
                            value={label}
                          />
                          <span className="text-sm font-medium">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-bold dark:text-white">
                      Why do you want to join CCAS?
                    </label>
                    <textarea
                      className="w-full p-4 rounded-lg bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                      name="motivation"
                      placeholder="Tell us about your motivation and what you hope to achieve as a volunteer..."
                      required
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 mt-4">
                    <button
                      className="w-full md:w-auto px-12 h-14 bg-secondary hover:bg-orange-600 text-white font-black rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 group"
                      type="submit"
                    >
                      Submit Application
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                        send
                      </span>
                    </button>
                    <p className="mt-4 text-xs text-text-main/50 dark:text-white/40 text-center md:text-left">
                      By submitting, you agree to our volunteer code of conduct
                      and privacy policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
