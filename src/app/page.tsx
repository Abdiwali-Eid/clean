import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export default function Home() {
  return (
    <div className="bg-background-light text-gray-800 dark:bg-background-dark dark:text-gray-200 font-body transition-colors duration-200">
      <SiteNav />

      <div className="relative bg-surface-light dark:bg-surface-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-surface-light dark:bg-surface-dark sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 transition-colors duration-200">
            <svg
              aria-hidden="true"
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-surface-light dark:text-surface-dark transform translate-x-1/2"
              fill="currentColor"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl font-display">
                  <span className="block xl:inline">Clean Cooking</span>
                  <span className="block text-secondary">
                    Association of Somalia
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Driving sustainable energy solutions for a healthier Somalia.
                  We unite stakeholders to promote clean, efficient, and
                  affordable cooking technologies.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition-colors"
                      href="#about"
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-orange-100 hover:bg-orange-200 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-colors"
                      href="#contact"
                    >
                      Join Us
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
          <Image
            alt="People cooking outdoors"
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90 dark:opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            height={800}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmcUiEI_q7Yn4KO-F1KAV6d5t-nc8_NvqZFITtFTmTSWqPuuZBY2PyGIyttlAT9hh0nohkIInbw0ZsRktvVXdi9ltClWWNxjDr7XMEc8a08FymiOQb3cbqF3P1Mcp8B8BCiUQLqrc1y6JmE6jY3hJ5_gHpcKhAdbL4XKQcgaJ8wMsHu8qpU7DfRF3H45TvPY7daUNLPwWQa1fwwJZb7QbUvZSUMzLp9Y2UPeWocpvUjsojkMe7DL2U0gETS_RnkCTCEQG4WG-8XdpE"
            width={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-light dark:from-surface-dark to-transparent lg:via-surface-light/20"></div>
        </div>
      </div>

      <section
        className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200 overflow-hidden"
        id="about"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Who We Are
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white font-display mb-6 leading-tight">
                Pioneering <span className="text-secondary">Clean Cooking</span>
                Solutions in Somalia
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                <p>
                  Clean Cooking Association of Somalia (CCAS) is a non-profit
                  association committed to improving the clean cooking sector in
                  Somalia. Established in close consultation with the Ministry
                  of Energy and Water Resources, we bring together key
                  stakeholders to foster an enabling environment for the
                  adoption of clean cooking solutions across the country.
                </p>
                <p>
                  Traditional cooking methods using solid fuels on open fires
                  expose families to harmful smoke, contribute to deforestation,
                  and consume valuable resources. We believe clean cooking is
                  essential for health, environmental preservation, and economic
                  development.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">
                      eco
                    </span>
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Sustainable Solutions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      diversity_3
                    </span>
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Community Focused
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full -z-10 blur-xl group-hover:bg-secondary/20 transition-all"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-xl group-hover:bg-primary/20 transition-all"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                  <Image
                    alt="Community scene and clean cooking technology"
                    className="w-full h-[400px] lg:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                    height={700}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmcUiEI_q7Yn4KO-F1KAV6d5t-nc8_NvqZFITtFTmTSWqPuuZBY2PyGIyttlAT9hh0nohkIInbw0ZsRktvVXdi9ltClWWNxjDr7XMEc8a08FymiOQb3cbqF3P1Mcp8B8BCiUQLqrc1y6JmE6jY3hJ5_gHpcKhAdbL4XKQcgaJ8wMsHu8qpU7DfRF3H45TvPY7daUNLPwWQa1fwwJZb7QbUvZSUMzLp9Y2UPeWocpvUjsojkMe7DL2U0gETS_RnkCTCEQG4WG-8XdpE"
                    width={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-widest text-orange-200 mb-1">
                      Impact in Action
                    </p>
                    <p className="text-lg font-display font-bold">
                      Empowering Somalia&apos;s households
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 hidden sm:block bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-lg border-l-4 border-primary max-w-[200px]">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white leading-tight italic">
                    &quot;Bridging the gap between energy needs and environmental
                    safety.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background-light dark:bg-background-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-secondary transition-colors duration-200">
              <div className="flex items-center mb-4">
                <span className="material-symbols-outlined text-secondary text-4xl mr-3">
                  flag
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                To accelerate the growth of the clean cooking sector in Somalia
                by advocating for supportive policies, coordinating stakeholder
                efforts, and promoting the adoption of clean, efficient, and safe
                cooking technologies.
              </p>
            </div>
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-primary transition-colors duration-200">
              <div className="flex items-center mb-4">
                <span className="material-symbols-outlined text-primary text-4xl mr-3">
                  visibility
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                A Somalia where every household has access to clean, affordable,
                and sustainable cooking energy, leading to improved health,
                environmental preservation, and economic empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">
              Core Goals
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-display">
              Our Objectives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Policy Advocacy
                </h4>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Advocate for policies and regulations that support the growth
                  of the clean cooking market.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Stakeholder Coordination
                </h4>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Facilitate collaboration among government, private sector,
                  NGOs, and donors.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                  <span className="material-symbols-outlined">school</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Capacity Building
                </h4>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Provide training and technical assistance to clean cooking
                  enterprises and stakeholders.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                  <span className="material-symbols-outlined">campaign</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Awareness Raising
                </h4>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Conduct campaigns to educate the public on the benefits of
                  clean cooking solutions.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                  <span className="material-symbols-outlined">show_chart</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Market Development
                </h4>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Support the development of a sustainable market for clean
                  cooking technologies.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                  <span className="material-symbols-outlined">science</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Standards &amp; Quality
                </h4>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Promote the adoption and enforcement of quality standards for
                  stoves and fuels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-light dark:bg-background-dark transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-12 text-center font-display">
            Key Activities
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 bg-white dark:bg-surface-dark p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Networking &amp; Knowledge Exchange
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Organizing forums and events for members to share best
                  practices.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-white dark:bg-surface-dark p-6 rounded-lg shadow-md border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Research &amp; Data
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Gathering and disseminating data on the clean cooking sector in
                  Somalia.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-white dark:bg-surface-dark p-6 rounded-lg shadow-md border-l-4 border-primary">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Resource Mobilization
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Identifying funding opportunities for members and sector
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-display">
            <span className="block">Ready to make a difference?</span>
            <span className="block text-orange-200">
              Join the association today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
                href="#"
              >
                Become a Member
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-green-600"
                href="#"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
