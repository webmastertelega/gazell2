import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["cyrillic", "latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Артем на газели — Грузоперевозки по Тюмени и межгороду",
  description:
    "Грузоперевозки на газели 4.2м в Тюмени. Квартирные и офисные переезды, доставка стройматериалов, межгород. От 900₽/час. Водитель-грузчик.",
  keywords: [
    "грузоперевозки Тюмень",
    "газель Тюмень",
    "переезд Тюмень",
    "грузчик Тюмень",
    "доставка грузов",
    "межгород",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
