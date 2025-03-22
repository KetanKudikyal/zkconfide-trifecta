import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "zkConfide - Private AI Betting Protocol",
  description:
    "A revolutionary solution that brings privacy and security to betting and prediction markets, protecting users from MEV attacks.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "dark")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

