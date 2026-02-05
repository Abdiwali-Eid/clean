import Image from "next/image";

import SiteFooter from "@/components/SiteFooter";
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
            <form action="/api/forms" className="flex flex-col gap-5" method="post">
              <input name="formType" type="hidden" value="contact" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#0d1b12] dark:text-gray-200">
                    Full Name <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    className="w-full h-12 rounded-lg border border-[#d1dcd5] dark:border-[#2a4a35] bg-[#f8fcf9] dark:bg-[#102216] px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder:text-gray-400"
                    name="fullName"
                    placeholder="Jane Doe"
                    required
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#0d1b12] dark:text-gray-200">
                    Email Address <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    className="w-full h-12 rounded-lg border border-[#d1dcd5] dark:border-[#2a4a35] bg-[#f8fcf9] dark:bg-[#102216] px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white transition-all placeholder:text-gray-400"
                    name="email"
                    placeholder="jane@example.com"
                    required
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
                  name="organization"
                  placeholder="Company or NGO Name"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#0d1b12] dark:text-gray-200">
                  Subject <span className="text-accent-orange">*</span>
                </label>
                <div className="relative">
                  <select
                    className="w-full h-12 rounded-lg border border-[#d1dcd5] dark:border-[#2a4a35] bg-[#f8fcf9] dark:bg-[#102216] px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:text-white appearance-none transition-all cursor-pointer"
                    name="subject"
                    required
                  >
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
                  name="message"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                className="mt-2 w-full h-12 bg-primary hover:bg-[#0fd650] text-[#0d1b12] font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
                type="submit"
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

      <SiteFooter />
    </div>
  );
}
