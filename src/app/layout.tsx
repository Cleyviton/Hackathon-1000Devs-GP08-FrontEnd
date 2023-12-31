import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <Link href="/vacinas" className="text-white">
                Vacinas
              </Link>
              <Link href="/" className="text-white">
                Pacientes
              </Link>
              <Link href="/campanha" className="text-white">
                Campanha
              </Link>
              <Link href="/posto" className="text-white">
                Posto
              </Link>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
