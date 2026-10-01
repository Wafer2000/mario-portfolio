import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mario Gonsalvez | Senior Flutter & Full-Stack Engineer",
  description: "Mario Fernando Gonsalvez Arias. Aplicaciones móviles, plataformas web e ingeniería con IA. Proyectos, experiencia y decisiones técnicas.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
