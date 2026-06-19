import type { Metadata } from "next";
import { Archivo_Black, Big_Shoulders, Caveat, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import LoadingScreen from "@/components/loading-screen";
import PageTransition from "@/components/page-transition";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  weight: "900",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: "700",
  subsets: ["latin"],
});

const tiny5x3 = localFont({
  src: "./fonts/TINY5x3-160.otf",
  variable: "--font-tiny5x3",
});

const manicotti = localFont({
  src: "./fonts/Manicotti-Regular.otf",
  variable: "--font-manicotti",
});

const ppMori = localFont({
  src: [
    { path: "./fonts/PPMori-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/NeueMontreal-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/NeueMontreal-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-ppmori",
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FourShots Coffee Co. — More than coffee.",
  description:
    "A specialty roastery built on coffee, music, and bonding games. Small batches, tight ratios, and a barista who'll happily pull you a fourth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${bigShoulders.variable} ${caveat.variable} ${tiny5x3.variable} ${manicotti.variable} ${ppMori.variable} ${jbMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
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
