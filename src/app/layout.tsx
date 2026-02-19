import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-display-font",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-body-font",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "CCAS Profile - Clean Cooking Association of Somalia",
  description:
    "Driving sustainable energy solutions for a healthier Somalia.",
  icons: {
    icon: "/file/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${montserrat.variable} ${openSans.variable} bg-background-light text-gray-800 antialiased dark:bg-background-dark dark:text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
