import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloating } from "@/components/ui/whatsapp-floating";
import { buildMetadata } from "@/lib/seo";
import { CartProvider } from "@/components/cart/cart-context";
import { SiteJsonLd } from "@/components/seo/site-json-ld";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const instrument = localFont({
  src: "./fonts/instrument-sans-latin.woff2",
  variable: "--font-instrument",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = buildMetadata({
  title: "EagleCast TV | IPTV Streaming, Live TV, Sports & Entertainment",
  description:
    "Discover EagleCast TV for live TV, sports, movies, supported devices, setup help, and a practical trial path.",
  pathname: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} h-full`}
    >
      <body className="min-h-full bg-canvas text-ink-muted antialiased flex flex-col font-sans selection:bg-blue-600/20 selection:text-ink">
        <SiteJsonLd />
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsappFloating />
        </CartProvider>
      </body>
    </html>
  );
}
