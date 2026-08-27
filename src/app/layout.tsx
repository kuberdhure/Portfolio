import type { Metadata, Viewport } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site } from "@/data/content";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0f0f0f",
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta name="google-site-verification" content="8AUsj58Sgq0wzzNnstOFsTHue2qlMx6cNNLj4w7GTVE" />
      <body className="font-sans">
        <Nav />
        {children}
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
