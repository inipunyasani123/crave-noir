import { Inter_Tight, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Inter_Tight({ subsets: ["latin"], variable: "--font-display", weight: ["700","800","900"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"Positive Crave — Konsep Noir","description":"Konsep desain toko brand keintiman pasangan bertema Tanpa Label, dibuat untuk kontes brief Positive Crave","url":"https://crave-noir.pintuweb.id"};

export const metadata = {
  metadataBase: new URL("https://crave-noir.pintuweb.id"),
  title: "Positive Crave — Konsep Noir",
  description: "Konsep toko Positive Crave bertema Tanpa Label: koleksi per situasi, kotak cokelat polos, dan halaman yang memperlihatkan apa yang dilihat kurir.",
  applicationName: "Positive Crave",
  keywords: ["intimacy brand", "wellness pasangan", "landing page", "desain web", "positive crave"],
  authors: [{ name: "Positive Crave" }],
  creator: "Positive Crave",
  publisher: "Positive Crave",
  alternates: { canonical: "https://crave-noir.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://crave-noir.pintuweb.id",
    siteName: "Positive Crave — Konsep Noir",
    title: "Positive Crave — Konsep Noir",
    description: "Konsep toko Positive Crave bertema Tanpa Label: koleksi per situasi, kotak cokelat polos, dan halaman yang memperlihatkan apa yang dilihat kurir.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Positive Crave — Konsep Noir" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Positive Crave — Konsep Noir",
    description: "Konsep toko Positive Crave bertema Tanpa Label: koleksi per situasi, kotak cokelat polos, dan halaman yang memperlihatkan apa yang dilihat kurir.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: "#0c0a0b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased bg-void text-ash overflow-x-hidden max-w-[100vw]`}>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-neon focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-void"
        >
          Lompat ke konten utama
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Konsep desain untuk kontes, buatan PintuWeb — bukan situs resmi merek ini.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=crave-noir" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
