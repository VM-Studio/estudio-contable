import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estudio Contable - Servicios Profesionales de Contabilidad",
  description: "Estudio contable profesional especializado en servicios de contabilidad, auditoría, impuestos y asesoramiento empresarial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* WhatsApp Floating Button */}
        <Link
          href="https://wa.me/5491123456789"
          target="_blank"
          className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-all"
          aria-label="Contactar por WhatsApp"
        >
          <Image
            src="/wpp.png"
            alt="WhatsApp"
            width={90}
            height={90}
            className="object-contain drop-shadow-lg"
          />
        </Link>
      </body>
    </html>
  );
}
