import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mario-portfolio-r8la.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mario Gonsalvez | Senior Software Engineer",
    template: "%s | Mario Gonsalvez",
  },
  description: "Senior Software Engineer with 7+ years of experience across Flutter/mobile, Python/FastAPI backend, TypeScript, cloud architecture on GCP/AWS/Azure, CI/CD and applied AI engineering.",
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
    title: "Mario Gonsalvez | Senior Software Engineer",
    description: "Mobile · Backend · Cloud · AI. Production software, Flutter expertise, backend/cloud engineering and a clear AI engineering direction.",
    siteName: "Mario Gonsalvez Portfolio",
    locale: "en_US",
    alternateLocale: ["es_CO"],
  },
  twitter: {
    card: "summary",
    title: "Mario Gonsalvez | Senior Software Engineer",
    description: "Mobile · Backend · Cloud · AI",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
