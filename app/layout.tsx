import type { Metadata } from "next";
import { Cinzel, Crimson_Pro } from "next/font/google";
import AmbientAtmosphere from "@/components/AmbientAtmosphere";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "a-Tormenta",
  description: "Compêndio fã-feito para Tormenta 20",
};

// Roda antes da primeira pintura para aplicar o tema salvo sem flash.
// Tenta localStorage primeiro; se não houver preferência salva, mantém o
// modo escuro (Tinta Arcana) como padrão do site.
const themeInitScript = `
  try {
    var saved = localStorage.getItem('a-tormenta-theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${cinzel.variable} ${crimsonPro.variable} antialiased`}>
        <AmbientAtmosphere />
        {children}
      </body>
    </html>
  );
}