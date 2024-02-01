import "@styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";

import { cn } from "@lib/utils";

import { ThemeProvider } from "@theme/ThemeProvider";
import { Analytics } from "@components/Analytics";
import { TailwindIndicator } from "@theme/TailwindIndicator";

import Footer from "@components/Footer";
import { ModeToggle } from "@theme/ModeToggle";
import { MainNav } from "@components/navigation/MainNav";

import { marketingConfig } from "@config/marketing";
import { siteConfig } from "@config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Moez", "Moez Yacoubi"],
  authors: [
    {
      name: "moez",
      url: "https://moez-cyan.vercel.app",
    },
  ],
  creator: "shadcn",
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
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <header className="container z-40 bg-background">
            <div className="flex h-20 items-center justify-between py-6">
              <MainNav items={marketingConfig.mainNav} />
              <nav>
                <ModeToggle />
              </nav>
            </div>
          </header>

          <main className="flex-1">
            {children}
            <Footer />
          </main>

          <Analytics />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
