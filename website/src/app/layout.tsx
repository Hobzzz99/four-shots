import type { Metadata } from "next";
import { Bagel_Fat_One, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import LoadingScreen from "@/components/loading-screen";
import PageTransition from "@/components/page-transition";

const bagel = Bagel_Fat_One({
  variable: "--font-bagel",
  weight: "400",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FourShots Coffee Co. — Four shots, nothing less.",
  description:
    "A pink-soaked specialty roastery. Small batches, tight ratios, and a barista who'll happily pull you a fourth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bagel.variable} ${geist.variable} ${jbMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso">
        <CartProvider>
          <LoadingScreen />
          <SiteNav />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
