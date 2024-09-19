import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Text_Me_One } from "next/font/google";
import { Providers } from "@/store/Provider";
import PrivateRoute from "@/components/PrivateRoute";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: 'CINE 24 Exam Portal',
  description: 'CSI Recruitment Drive (CINE 24) Exam Portal',
}

const textMeOne = Text_Me_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-text-me-one",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${textMeOne.variable}`}>
        <Providers>
          <PrivateRoute>
            {children}
          </PrivateRoute>
        </Providers>
      </body>
    </html>
  );
}
