import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import { Providers } from "@/store/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: 'CINE 24 Exam Portal',
  description: 'CSI Recruitment Drive (CINE 24) Exam Portal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}