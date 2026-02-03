import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer
      className="bg-gray-800 dark:bg-black text-white pt-12 pb-8 transition-colors duration-200"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                alt="CCAS Logo White"
                className="h-10 w-auto brightness-200 grayscale contrast-200"
                height={40}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsntybWIC64sdbDFMxZ_bClkl5c7GR47Jrph1439xTb1NfJPErimkArFVLbeltojwDTtmH58clhHlsdZMq6Jeis_fvpauHbqROMCV9oaWPscZH6Hw8YZPKKaiCMC3mLwrMY0idnymlbP-s_0n_2AfhRlVfJ-y7A1c3P_R4D31wR9-H_NFj6YTowi6a8vCyyGxzXf1HYcV8YqijoutdmOfko63-P2cCKNqCjwdoqEhJdnZrPdW6VdSSjDgWZ_ZIOjg2qwT5RA9_v_bB"
                width={120}
              />
              <span className="font-bold text-xl font-display">CCAS</span>
            </div>
            <p className="text-gray-400 text-sm">
              Advocating for a cleaner, healthier Somalia through sustainable
              cooking solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <span className="material-symbols-outlined text-base mr-2">
                  location_on
                </span>
                Mogadishu, Somalia
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-base mr-2">
                  email
                </span>
                info@ccas.so
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-base mr-2">
                  phone
                </span>
                +252 61 000 0000
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest news and updates.
            </p>
            <form className="flex flex-col gap-2">
              <input
                className="px-3 py-2 bg-gray-700 rounded text-white border-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="bg-secondary hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2023 Clean Cooking Association of Somalia. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a className="text-gray-400 hover:text-white" href="#">
              <span className="sr-only">Facebook</span>
              FB
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              <span className="sr-only">Twitter</span>
              TW
            </a>
            <a className="text-gray-400 hover:text-white" href="#">
              <span className="sr-only">LinkedIn</span>
              LI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
