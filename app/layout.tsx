import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client"

export const metadata: Metadata = {
  title: "Change Readiness Dashboard",
  description: "AI-Powered Change Readiness Dashboard for Transformation ROI",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout children={children} />
}



import './globals.css'