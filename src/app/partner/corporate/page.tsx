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

export default function CorporatePartnerPage() {
  return (
    <div
      className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased overflow-x-hidden"
      style={themeStyles}
    >
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        <SiteNav />

        <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(13, 27, 18, 0.75) 0%, rgba(13, 27, 18, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyxQfxNS8Rw5cM3RRqn8LbYeLCLo82CXc2azhhMdBU5KY5gxJIUf_fu2il_CWLyI0DnwbPjgM44VZ89GcQhgru79DtIW0lQucj_oXqI8SeAhAV4qCwRhWfyTwYLOyw5IxATH_bgjXDqClJYH_Sl_ubGYTMbgvjg7IhbCnR4-_xujNU-2mmGPfl3SyMAVLeBVYQsvnoEMqxxnFcLVLPD4oc97kE6pngVgwAN7uoSlkpBlgutuW3xDP2-NfoU6ZidzOPym9g3VocsESy')",
            }}
          ></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-4">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-wider mb-2">
              Corporate Solutions
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Corporate Partner Inquiry
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Align your business goals with sustainable impact. Join us in
              transforming the energy landscape of Somalia.
            </p>
          </div>
        </div>

        <main className="py-16 md:py-24 px-4 md:px-10 flex justify-center bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold dark:text-white">
                  Why Partner with CCAS?
                </h2>
                <p className="text-text-main/70 dark:text-white/70 text-lg">
                  We provide measurable ESG outcomes for corporate entities
                  looking to drive climate action and social development in East
                  Africa.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Strategic Alignment
                    </h4>
                    <p className="text-text-main/70 dark:text-white/70 text-sm">
                      Direct contribution to SDGs 7 (Affordable and Clean Energy)
                      and 13 (Climate Action).
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 size-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">public</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Regional Leadership
                    </h4>
                    <p className="text-text-main/70 dark:text-white/70 text-sm">
                      Position your brand as a leader in Somali&apos;s sustainable
                      development and green economy.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 size-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined">bar_chart</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">
                      Reporting &amp; Compliance
                    </h4>
                    <p className="text-text-main/70 dark:text-white/70 text-sm">
                      Detailed impact data and transparent reporting for your
                      annual CSR/ESG disclosures.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-2xl border border-[#e7f3eb] dark:border-[#2a4533] mt-4">
                <h5 className="font-bold mb-3 text-text-main dark:text-white">
                  Dedicated Support
                </h5>
                <p className="text-sm text-text-main/60 dark:text-white/60 mb-4">
                  Our partnership team will review your proposal and respond
                  within 2 business days to discuss customized collaboration
                  models.
                </p>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  <span>partnerships@ccas.so</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <form
                action="/api/forms"
                className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
                method="post"
              >
                <input
                  name="formType"
                  type="hidden"
                  value="partner_corporate"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold dark:text-white flex items-center gap-2">
                      Company Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      name="companyName"
                      placeholder="e.g. Energy Solutions Ltd"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold dark:text-white flex items-center gap-2">
                      Industry <span className="text-secondary">*</span>
                    </label>
                    <select
                      className="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      defaultValue=""
                      name="industry"
                      required
                    >
                      <option value="" disabled>
                        Select industry
                      </option>
                      <option>Energy &amp; Utilities</option>
                      <option>Technology</option>
                      <option>Manufacturing</option>
                      <option>Finance &amp; Banking</option>
                      <option>Retail &amp; Consumer Goods</option>
                      <option>Logistics &amp; Transport</option>
                      <option>Telecommunications</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold dark:text-white flex items-center gap-2">
                      Contact Person Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      name="contactName"
                      placeholder="First and Last Name"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold dark:text-white flex items-center gap-2">
                      Business Email <span className="text-secondary">*</span>
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      name="businessEmail"
                      placeholder="name@company.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-8">
                  <label className="text-sm font-bold dark:text-white">
                    CSR Interests &amp; Alignment
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                      <input
                        className="mt-1 rounded border-gray-300 text-primary focus:ring-primary h-5 w-5"
                        name="csr_interest"
                        type="checkbox"
                        value="climate"
                      />
                      <div>
                        <span className="block font-bold text-sm">
                          Climate Action
                        </span>
                        <span className="text-xs text-text-main/50 dark:text-white/50">
                          Carbon offsetting and emissions reduction.
                        </span>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                      <input
                        className="mt-1 rounded border-gray-300 text-primary focus:ring-primary h-5 w-5"
                        name="csr_interest"
                        type="checkbox"
                        value="health"
                      />
                      <div>
                        <span className="block font-bold text-sm">Public Health</span>
                        <span className="text-xs text-text-main/50 dark:text-white/50">
                          Reducing respiratory issues in households.
                        </span>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                      <input
                        className="mt-1 rounded border-gray-300 text-primary focus:ring-primary h-5 w-5"
                        name="csr_interest"
                        type="checkbox"
                        value="women"
                      />
                      <div>
                        <span className="block font-bold text-sm">Women Empowerment</span>
                        <span className="text-xs text-text-main/50 dark:text-white/50">
                          Economic opportunities for female entrepreneurs.
                        </span>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                      <input
                        className="mt-1 rounded border-gray-300 text-primary focus:ring-primary h-5 w-5"
                        name="csr_interest"
                        type="checkbox"
                        value="innovation"
                      />
                      <div>
                        <span className="block font-bold text-sm">Tech Innovation</span>
                        <span className="text-xs text-text-main/50 dark:text-white/50">
                          Advancing clean energy technology deployment.
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-8">
                  <label className="text-sm font-bold dark:text-white">
                    Partnership Proposal / Key Objectives
                  </label>
                  <textarea
                    className="w-full p-4 rounded-xl bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                    name="proposal"
                    placeholder="Describe how your organization envisions collaborating with CCAS..."
                    rows={5}
                  ></textarea>
                </div>
                <div className="flex flex-col gap-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      name="agreeTerms"
                      required
                      type="checkbox"
                      value="yes"
                    />
                    <span className="text-xs text-text-main/60 dark:text-white/60">
                      I agree to the CCAS Corporate Partnership Terms and Privacy
                      Policy.
                    </span>
                  </label>
                  <button
                    className="w-full h-14 bg-primary hover:bg-primary-dark text-text-main font-black rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                    type="submit"
                  >
                    Submit Corporate Inquiry
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
