import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "../globals.css" // Changed import path

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "mis-sorteos.com",
  description: "Participe en emocionantes sorteos",
}

// Generate static paths for supported locales
export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: "es" | "en" }
}>) {
  const resolvedParams = await params // Await params if it's a Promise
  return (
    <html lang={resolvedParams.lang}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
