import Navbar from "@/components/Navbar";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL as string),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Server Actions",
    "Smart Finance Service",
  ],
  authors: [
    {
      name: "shrestha shashank",
      url: "https://github.com/shresth72",
    },
  ],
  creator: "shrestha",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/*@ts-expect-error Server Component */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
