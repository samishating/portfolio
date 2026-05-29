import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sam.dev"),
  title: {
    default: "Sam | Software Engineer & Technical Support Specialist",
    template: "%s | Sam",
  },
  description:
    "Modern portfolio for Sam, a Morocco-based software engineer, technical support specialist, web developer, and community platform builder.",
  keywords: [
    "Sam",
    "software engineer Morocco",
    "technical support specialist",
    "web developer",
    "Next.js portfolio",
    "gaming community platform",
    "TELUS technical support",
  ],
  authors: [{ name: "Sam" }],
  openGraph: {
    title: "Sam | Software Engineer & Technical Support Specialist",
    description:
      "Building reliable digital systems, smooth web experiences, and community-driven platforms.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
