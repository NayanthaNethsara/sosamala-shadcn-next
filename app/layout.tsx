//@ts-nocheck
import "@/styles/globals.css"
import { Metadata } from "next"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import SideBarThumbnails from "@/components/custom/SideBarThumbnails"
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
            <div className="stack-parent  grid min-h-screen">
              {/* Side menu */}
              <aside className="stack-child z-[999] flex h-screen w-[70dvw] flex-col justify-between bg-[#0A0A0A] px-16 py-10">
                {/* logo here */}
                <div className="flex flex-row gap-3">
                  <SideBarThumbnails
                    src="/icons/logo.svg"
                    title="Sosamala"
                    textColor="text-neutral-200"
                  />

                  
                </div>

                {/* Sections here */}
                <ul className="flex flex-col gap-10 ">
                  <li>
                    <SideBarThumbnails
                      src="/icons/home.svg"
                      title="Home"
                      textColor="text-[#4BFFBE]"
                    />
                  </li>
                  <li>
                    <SideBarThumbnails src="/icons/home.svg" title="Superior" />
                  </li>
                  <li>
                    <SideBarThumbnails src="/icons/home.svg" title="Logs" />
                  </li>
                  <li>
                    <SideBarThumbnails src="/icons/home.svg" title="About" />
                  </li>
                  <li>
                    <SideBarThumbnails src="/icons/home.svg" title="Team" />
                  </li>
                </ul>

                {/* logout button */}
                <div>
                  <SideBarThumbnails src="/icons/home.svg" title="Logout" />
                </div>
              </aside>

              {/* Body */}
              <div className="stack-child z-0 bg-slate-500">{children}</div>
            </div>
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
