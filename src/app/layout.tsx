import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteTitle = "Zahed Alam | Senior QA Engineer";
const siteDescription =
  "Portfolio for Zahed Alam — QA leader specializing in automation, performance, and mobile testing for large-scale SaaS and high-traffic platforms.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zahed-portfolio.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Zahed Alam",
    "QA Engineer",
    "Software Quality Assurance",
    "SDET",
    "Playwright",
    "Selenium",
    "Automation Testing",
    "Performance Testing",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://zahed-portfolio.vercel.app",
    type: "website",
    siteName: siteTitle,
    images: [
      {
        url: "/images/zahed.jpg",
        width: 800,
        height: 1067,
        alt: "Portrait of Zahed Alam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/zahed.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${plexMono.variable} bg-[#030016] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
