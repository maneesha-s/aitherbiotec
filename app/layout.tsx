import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://aetherbiotec.com"),
  title: {
    default: "AETHER BIOTEC | Better health, built on trust",
    template: "%s | AETHER BIOTEC",
  },
  description: "Discover AETHER BIOTEC’s thoughtfully developed pharmaceutical and wellness products. Learn about our quality-led approach and enquire with our team.",
  keywords: ["AETHER BIOTEC", "pharmaceutical products", "healthcare", "pharmaceutical portfolio", "wellness products"],
  openGraph: {
    title: "AETHER BIOTEC | Better health, built on trust",
    description: "Thoughtfully developed pharmaceutical and wellness products from AETHER BIOTEC.",
    type: "website",
    siteName: "AETHER BIOTEC",
  },
  twitter: { card: "summary_large_image", title: "AETHER BIOTEC", description: "Quality medicine. Thoughtfully made." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
