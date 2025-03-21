"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <AppSidebar />
              <div className="flex flex-col flex-1">
                <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
                  <div className="flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <SidebarTrigger />
                      <h1 className="text-lg font-semibold md:text-xl">Change Readiness Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">{/* Header content can go here */}</div>
                  </div>
                </header>
                <motion.main
                  className="flex-1 w-full max-w-full p-4 md:p-6 lg:p-8 overflow-x-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full max-w-full">{children}</div>
                </motion.main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

