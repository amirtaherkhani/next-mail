import  "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils"

import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Next.mail",
  description: "Docker Mailserver web client app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >{children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
