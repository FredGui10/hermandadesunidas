
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hermandades Unidas del Señor de los Milagros en Europa",
  description:
    "Unidos por nuestra fe y devoción al Señor de los Milagros. Conoce las hermandades que forman parte de nuestra comunidad en Europa.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
