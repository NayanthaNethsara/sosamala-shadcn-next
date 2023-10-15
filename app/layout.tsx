//@ts-nocheck
import "@/styles/globals.css"
import { Metadata } from "next"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import SideBar from "@/components/custom/SideBar"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="stack-parent relative  grid min-h-screen">
              {/* Side menu */}
              <SideBar />

              {/* Top bar */}
              {/* -------------------------------  meke thiyene height ekema Body eke  "pt"padding-top eke widiyata denne ---------devnote */}
              <div className="stack-child z-[98] flex h-24 w-full flex-row items-center justify-between  px-5">
                <div>
                  <h2 className="text-xl font-bold">Hello, Sosamala</h2>
                  <p className="text-sm">Welcome back and check your plants</p>
                </div>

                <Image alt="" src="/img/profile.svg" width={100} height={100} className="w-12 rounded-full" />
              </div>

              {/* Body */}
              <div className="stack-child z-0 bg-[#0E0E0E] pt-24">{children}</div>
            </div>
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
