import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--f-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono", display: "swap" });

const siteUrl = "https://mario-portfolio-r8la.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mario Gonsalvez | Senior Software Engineer · Mobile · Backend · Cloud · AI",
    template: "%s | Mario Gonsalvez",
  },
  description: "Senior Software Engineer with 7+ years of experience across mobile, backend, cloud and AI engineering. Flutter, Python, FastAPI, TypeScript, GCP, AWS and Azure.",
  keywords: [
    "Mario Gonsalvez",
    "Senior Software Engineer",
    "Flutter",
    "Dart",
    "Python",
    "FastAPI",
    "TypeScript",
    "Backend Engineer",
    "Cloud Engineer",
    "GCP",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "AI Engineering",
    "Mobile Engineering",
  ],
  authors: [{ name: "Mario Fernando Gonsalvez Arias" }],
  creator: "Mario Fernando Gonsalvez Arias",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mario Gonsalvez | Senior Software Engineer · Mobile · Backend · Cloud · AI",
    description: "Senior Software Engineer with 7+ years of experience across mobile, backend, cloud and AI engineering. Flutter, Python, FastAPI, TypeScript, GCP, AWS and Azure.",
    siteName: "Mario Gonsalvez Portfolio",
    locale: "en_US",
    alternateLocale: ["es_CO"],
  },
  twitter: {
    card: "summary",
    title: "Mario Gonsalvez | Senior Software Engineer · Mobile · Backend · Cloud · AI",
    description: "Senior Software Engineer with 7+ years of experience across mobile, backend, cloud and AI engineering.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
