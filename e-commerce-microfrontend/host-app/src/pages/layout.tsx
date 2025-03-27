import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import AppLayout from "../components/AppLayout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Ticaret Ana Uygulama",
  description: "Mikro Ön Uç Mimarisiyle Geliştirilmiş E-Ticaret Uygulaması",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Providers>
          <AppLayout>
            {children}
          </AppLayout>
        </Providers>
      </body>
    </html>
  );
} 