import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css" // Changed from "./globals.css" to "../globals.css"
import ClientAppLayout from "./ClientAppLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RollPay Dashboard",
  description: "Privacy-first payroll management platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientAppLayout>{children}</ClientAppLayout>
      </body>
    </html>
  )
}
