import Image from "next/image";

import SiteNav from "@/components/SiteNav";

export default function ContactPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-[#0d1b12] dark:text-white transition-colors duration-200">
      <SiteNav />

      <main className="flex flex-col flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-10 py-5">
        <div className="w-full mb-10">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[220px] md:min-h-[280px] relative shadow-md"
            data-alt="Abstract green foliage pattern representing clean energy"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(16, 34, 22, 0.7) 0%, rgba(16, 34, 22, 0.1) 100%), url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuCsK_VmqovKlpnyuv17MF3UbakZa2NPDPE8-txsaFYzSbsvBnrBYuu8PC2ovno7JcgsGGKW_9kJDQpV45bVG7nBdz6tOXtjbjDWpso3ayxrrN9ZBl1cbLMs-aLX5_15jmN15ZPttZ0Tql30GLUCC0xQDgcYYrYLE5-Cpf9PBB8pMZJI_lshA0HbXN9Q0K7xxbr96zDYJPY3Xm_KhjLfWBAjwauLHwNAAurFu7yQh41_WoKmkhAcLPfImfZQZiOCvC2uswRIO2_KkFe5\")",
            }}
          >
            <div className="flex p-6 md:p-10">
              <h1 className="text-white tracking-tight text-3xl md:text-5xl font-bold leading-tight">
                Get in Touch
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-[#0d1b12] dark:text-white text-3xl font-bold leading-tight mb-4">
                Connect with CCAS
              </h2>
              <p className="text-[#4e6556] dark:text-gray-300 text-base font-normal leading-relaxed">
                We are dedicated to transforming cooking practices across Somalia.
                Whether you are a donor, partner, or community member, we are here
                to answer your questions about our clean cooking initiatives.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#1a3324] border border-[#e7f3eb] dark:border-[#2a4a35] shadow-sm">
                <div className="flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12 text-primary dark:text-green-300">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <p className="text-[#0d1b12] dark:text-white text-base font-semibold">
                    Mogadishu, Somalia
                  </p>
                  <p className="text-[#4e6556] dark:text-gray-400 text-sm">
                    KM4 Junction, Hodan District
                    <br />
                    Main Office
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#1a3324] border border-[#e7f3eb] dark:border-[#2a4a35] shadow-sm hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12 text-primary dark:text-green-300">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <p className="text-[#0d1b12] dark:text-white text-base font-semibold">
                    Email Us
                  </p>
                  <p className="text-[#4e6556] dark:text-gray-400 text-sm group-hover:text-primary transition-colors">
                    info@ccas.so
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#1a3324] border border-[#e7f3eb] dark:border-[#2a4a35] shadow-sm">
                <div className="flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12 text-primary dark:text-green-300">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <p className="text-[#0d1b12] dark:text-white text-base font-semibold">
                    Call Us
                  </p>
                  <p className="text-[#4e6556] dark:text-gray-400 text-sm">
                    +252 61 500 0000
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2 rounded-xl overflow-hidden border border-[#e7f3eb] dark:border-[#2a4a35] h-64 relative bg-[#e7f3eb] dark:bg-[#1a3324]">
              <Image
                alt="Map location of Mogadishu"
                className="object-cover opacity-80"
                data-alt="Map view showing Mogadishu city streets"
                data-location="Mogadishu, Somalia"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcNbKypoAe-zvR-hwFXWKaI19P6nxsIAWYJHqEt7MgHP5DJA_h92x6-BLBP3T3EO4nSYw0sp1TqGDSCuivNhFjcSnLmb0tGZTCeBiv59eBA-3wBGwDAPP8ikDuwOu7b34e06V6taB6NoW37eHBNDriybQoP3qPzka76A7OOh6AOw5B2dmqWC-joXC2I5lUGo30qP7kjobcxamDVQUMJKQIgDQtdzVIZ5eZdaH1c8wSPWKwhA0txuuVY7fwrbmBidy8I7wM0JgaC15H"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-white dark:bg-[#102216] text-[#0d1b12] dark:text-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
                  type="button"
                >
                  <span className="material-symbols-outlined text-accent-orange text-[20px]">
                    map
                  </span>
                  View on Google Maps
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a3324] p-6 md:p-8 rounded-2xl border border-[#e7f3eb] dark:border-[#2a4a35] shadow-lg h-fit">
            <h3 className="text-xl font-bold text-[#0d1b12] dark:text-white mb-6 flex items-center gap-2">
              Send a Message
              <span className="material-symbols-outlined text-primary">
                edit_square
              </span>
            </h3>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#0d1b12] dark:text-gray-200">
                    Full Name <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    className="w-full h-12 rounded-lg border border-[#d1dcd5] dark:border-[#2a4a35] bg-[#f8fcf9] dark:bg-[#102216] px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder:text-gray-400"
                    placeholder="Jane Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#0d1b12] dark:text-gray-200">
                    Email Address <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    className="w-full h-12 rounded-lg border border-[#d1dcd5] dark:border-[#2a4a35] bg-[#f8fcf9] dark:bg-[#102216] px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder:text-gray-400"
                    placeholder="jane@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#0d1b12] dark:text-gray-200">
                  Organization
                  <span className="text-gray-400 font-normal text-xs ml-1">
                    (Optional)
                  </span>
                </label>
                <input
                  className="w-full h-12 rounded-lg border border-[#d1dcd5] dark:border-[#2a4a35] bg-[#f8fcf9] dark:bg-[#102216] px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder:text-gray-400"
                  placeholder="Company or NGO Name"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#0d1b12] dark:text-gray-200">
                  Subject <span className="text-accent-orange">*</span>
                </label>
                <div className="relative">
                  <select className="w-full h-12 rounded-lg border border-[#d1dcd5] dark:border-[#2a4a35] bg-[#f8fcf9] dark:bg-[#102216] px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white appearance-none transition-all cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunities</option>
                    <option>Project Information</option>
                    <option>Press &amp; Media</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-3 pointer-events-none text-gray-500">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#0d1b12] dark:text-gray-200">
                  Message <span className="text-accent-orange">*</span>
                </label>
                <textarea
                  className="w-full min-h-[140px] rounded-lg border border-[#d1dcd5] dark:border-[#2a4a35] bg-[#f8fcf9] dark:bg-[#102216] p-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white resize-y transition-all placeholder:text-gray-400"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                className="mt-2 w-full h-12 bg-primary hover:bg-[#0fd650] text-[#0d1b12] font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
                type="button"
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-[20px]">
                  send
                </span>
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="mt-20 bg-white dark:bg-[#1a3324] border-t border-[#e7f3eb] dark:border-[#2a4a35]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 text-[#0d1b12] dark:text-white mb-4">
                <span className="material-symbols-outlined text-primary text-[28px]">
                  skillet
                </span>
                <h2 className="text-lg font-bold">CCAS</h2>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Promoting clean, efficient, and sustainable cooking solutions for a
                healthier Somalia.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-[#0d1b12] dark:text-white">
                Organization
              </h4>
              <a
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                About Us
              </a>
              <a
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Our Team
              </a>
              <a
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Careers
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-[#0d1b12] dark:text-white">
                Resources
              </h4>
              <a
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Reports
              </a>
              <a
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Projects
              </a>
              <a
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                News
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-[#0d1b12] dark:text-white">
                Stay Updated
              </h4>
              <div className="flex w-full">
                <input
                  className="flex-1 min-w-0 rounded-l-lg border-y border-l border-[#d1dcd5] dark:border-[#2a4a35] bg-[#f8fcf9] dark:bg-[#102216] px-3 py-2 text-sm outline-none dark:text-white focus:border-primary"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="bg-primary hover:bg-green-400 text-[#0d1b12] px-3 py-2 rounded-r-lg font-bold text-sm transition-colors" type="button">
                  Subscribe
                </button>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="size-8 rounded-full bg-[#f8fcf9] dark:bg-[#102216] border border-[#e7f3eb] dark:border-[#2a4a35] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-accent-orange hover:border-accent-orange transition-all cursor-pointer">
                  <svg
                    aria-hidden="true"
                    className="size-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </div>
                <div className="size-8 rounded-full bg-[#f8fcf9] dark:bg-[#102216] border border-[#e7f3eb] dark:border-[#2a4a35] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-accent-orange hover:border-accent-orange transition-all cursor-pointer">
                  <svg
                    aria-hidden="true"
                    className="size-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
                <div className="size-8 rounded-full bg-[#f8fcf9] dark:bg-[#102216] border border-[#e7f3eb] dark:border-[#2a4a35] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-accent-orange hover:border-accent-orange transition-all cursor-pointer">
                  <svg
                    aria-hidden="true"
                    className="size-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d1dcd5] dark:border-[#2a4a35] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © 2023 Clean Cooking Association of Somalia. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                className="text-xs text-gray-500 hover:text-primary dark:text-gray-400 transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-xs text-gray-500 hover:text-primary dark:text-gray-400 transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
