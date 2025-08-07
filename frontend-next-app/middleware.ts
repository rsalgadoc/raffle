import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import Negotiator from "negotiator"
import { match } from "@formatjs/intl-localematcher"

const locales = ["es", "en"] // Supported locales
const defaultLocale = "es" // Default locale

function getLocale(request: NextRequest) {
  const acceptLanguageHeader = request.headers.get("accept-language")
  const languages = new Negotiator({ headers: { "accept-language": acceptLanguageHeader || "" } }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) {
    return // Path already has a locale, continue
  }

  // Redirect if there is no locale in the pathname
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Matcher to run middleware on all paths except internal Next.js paths and public files
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
