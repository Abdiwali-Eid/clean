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

export default function DonatePage() {
  return (
    <div
      className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased overflow-x-hidden"
      style={themeStyles}
    >
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        <SiteNav />

        <section className="relative pt-16 pb-32 px-4 md:px-10 flex flex-col items-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] z-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
          <div className="relative z-10 w-full max-w-[1280px] text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
              Empower Change
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-tight tracking-tight mb-6">
              Support Clean Cooking <br className="hidden md:block" />
              <span className="text-primary">Transform Lives in Somalia</span>
            </h1>
            <p className="text-text-main/70 dark:text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              Your contribution provides clean stoves and fuels to families,
              reducing smoke inhalation and protecting Somalia&apos;s forests.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-[#e7f3eb] dark:border-[#2a4533] shadow-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    volunteer_activism
                  </span>
                  How your gift helps
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">$25 - Clean Stove Starter</h4>
                      <p className="text-text-main/70 dark:text-white/70 text-sm">
                        Provides one high-efficiency stove to a rural household,
                        reducing fuel needs by 50%.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">$100 - Community Training</h4>
                      <p className="text-text-main/70 dark:text-white/70 text-sm">
                        Funds an educational workshop for a village on the health
                        benefits of smoke-free cooking.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">$500 - Village Transformation</h4>
                      <p className="text-text-main/70 dark:text-white/70 text-sm">
                        Equips an entire small community with bio-fuel
                        infrastructure and maintenance tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtKPrfWifCw6T6i6-FwXmrV7nqxfh4cJxS8Aid5B-AQ4Th0Ll66CKtFEqdcJFxYfPkq1KArqLFFC-jH_CjEIqsZXyTyQBEYM4rTw3q6Y3MZeHFY-zKjyIxkg7U6OAquZiHIgG7oUSdoXCPli4y2EvzkKYXXELt5mWPMPSi-v3KEbUydDTNW6HFDsgMHNz28ErAxj8nOKEAhEBBMOkJolgcZEAxBiRtkv64aiTivda4Hmxog0iCjBk66h2gWmzMa8ansZbDCXKloMA_')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white italic text-lg font-medium">
                    &quot;Since receiving my stove, my children breathe easier and I
                    spend less time collecting wood.&quot;
                  </p>
                  <p className="text-primary font-bold mt-2">
                    — Amina, Mogadishu Resident
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden border border-[#e7f3eb] dark:border-[#2a4533]">
                <div className="bg-primary p-6 flex items-center justify-between">
                  <h3 className="text-text-main font-bold text-xl">
                    Make a Secure Donation
                  </h3>
                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-text-main/60">
                      shield_lock
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-main/60 self-center">
                      Secure Payment
                    </span>
                  </div>
                </div>
                <form className="p-8 space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-text-main/60 dark:text-white/60 uppercase mb-4 tracking-wider">
                      Select Amount (USD)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="relative">
                        <input
                          defaultChecked
                          className="sr-only peer"
                          id="amt25"
                          name="amount"
                          type="radio"
                          value="25"
                        />
                        <label
                          className="flex items-center justify-center h-14 border-2 border-gray-100 dark:border-gray-800 rounded-xl cursor-pointer hover:border-primary/50 transition-all font-bold text-lg peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:ring-2 peer-checked:ring-primary peer-checked:ring-offset-2 peer-checked:ring-offset-white dark:peer-checked:ring-offset-background-dark"
                          htmlFor="amt25"
                        >
                          $25
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          className="sr-only peer"
                          id="amt50"
                          name="amount"
                          type="radio"
                          value="50"
                        />
                        <label
                          className="flex items-center justify-center h-14 border-2 border-gray-100 dark:border-gray-800 rounded-xl cursor-pointer hover:border-primary/50 transition-all font-bold text-lg peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:ring-2 peer-checked:ring-primary peer-checked:ring-offset-2 peer-checked:ring-offset-white dark:peer-checked:ring-offset-background-dark"
                          htmlFor="amt50"
                        >
                          $50
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          className="sr-only peer"
                          id="amt100"
                          name="amount"
                          type="radio"
                          value="100"
                        />
                        <label
                          className="flex items-center justify-center h-14 border-2 border-gray-100 dark:border-gray-800 rounded-xl cursor-pointer hover:border-primary/50 transition-all font-bold text-lg peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:ring-2 peer-checked:ring-primary peer-checked:ring-offset-2 peer-checked:ring-offset-white dark:peer-checked:ring-offset-background-dark"
                          htmlFor="amt100"
                        >
                          $100
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          className="sr-only peer"
                          id="amt500"
                          name="amount"
                          type="radio"
                          value="500"
                        />
                        <label
                          className="flex items-center justify-center h-14 border-2 border-gray-100 dark:border-gray-800 rounded-xl cursor-pointer hover:border-primary/50 transition-all font-bold text-lg peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:ring-2 peer-checked:ring-primary peer-checked:ring-offset-2 peer-checked:ring-offset-white dark:peer-checked:ring-offset-background-dark"
                          htmlFor="amt500"
                        >
                          $500
                        </label>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-main/50 font-bold">
                          $
                        </span>
                        <input
                          className="w-full h-14 pl-8 pr-4 bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-800 rounded-xl focus:ring-primary focus:border-primary font-medium"
                          placeholder="Custom Amount"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-text-main/60 dark:text-white/60 uppercase">
                        First Name
                      </label>
                      <input
                        className="w-full h-12 bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-800 rounded-lg focus:ring-primary focus:border-primary"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-text-main/60 dark:text-white/60 uppercase">
                        Last Name
                      </label>
                      <input
                        className="w-full h-12 bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-800 rounded-lg focus:ring-primary focus:border-primary"
                        type="text"
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <label className="block text-sm font-bold text-text-main/60 dark:text-white/60 uppercase">
                        Email Address
                      </label>
                      <input
                        className="w-full h-12 bg-background-light dark:bg-background-dark border-gray-200 dark:border-gray-800 rounded-lg focus:ring-primary focus:border-primary"
                        placeholder="email@example.com"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-bold text-text-main/60 dark:text-white/60 uppercase tracking-wider">
                      Payment Details
                    </label>
                    <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-background-dark space-y-4">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex -space-x-1">
                          <div className="w-8 h-5 bg-blue-600 rounded-sm"></div>
                          <div className="w-8 h-5 bg-orange-500 rounded-sm"></div>
                          <div className="w-8 h-5 bg-gray-400 rounded-sm"></div>
                        </div>
                        <span className="text-xs font-medium text-text-main/50">
                          All major cards &amp; PayPal accepted
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div className="relative">
                          <input
                            className="w-full h-12 bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-lg pl-10"
                            placeholder="Card number"
                            type="text"
                          />
                          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-main/30">
                            credit_card
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            className="h-12 bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-lg"
                            placeholder="MM / YY"
                            type="text"
                          />
                          <input
                            className="h-12 bg-white dark:bg-surface-dark border-gray-200 dark:border-gray-700 rounded-lg"
                            placeholder="CVC"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      className="w-full h-16 bg-secondary hover:bg-orange-600 text-white font-black text-xl rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-3"
                      type="submit"
                    >
                      <span>Complete Donation</span>
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <p className="text-center text-xs text-text-main/50 dark:text-white/50 mt-4 px-8">
                      By donating, you agree to our Terms of Service and Privacy
                      Policy. All transactions are encrypted and secure.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-[#e7f3eb] dark:border-[#1e3a29] flex justify-center">
          <div className="w-full max-w-[1280px] px-4 md:px-10 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">verified</span>
              <span className="font-bold">Verified Charity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">security</span>
              <span className="font-bold">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">public</span>
              <span className="font-bold">Global Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">history_edu</span>
              <span className="font-bold">Tax Deductible</span>
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
