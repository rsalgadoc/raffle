"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react" // Removed MountainIcon
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet" // Added Sheet components
import Image from "next/image"

interface HeaderProps {
  lang: "es" | "en"
  dict: any // Dictionary object passed from server component
}

interface Language {
  code: string
  name: string
  shortName: string // Added shortName for mobile
}

interface Country {
  code: string
  name: string
  flagUrl: string
}

const languages: Language[] = [
  { code: "es", name: "Español", shortName: "ES" },
  { code: "en", name: "English", shortName: "EN" },
]

const countries: Country[] = [
  { code: "ES", name: "España", flagUrl: "/images/country/es.png?height=16&width=24" },
  { code: "MX", name: "México", flagUrl: "/images/country/mx.png?height=16&width=24" },
  { code: "US", name: "Estados Unidos", flagUrl: "/images/country/us.png?height=16&width=24" },
  { code: "AR", name: "Argentina", flagUrl: "/images/country/ar.png?height=16&width=24" },
  { code: "CL", name: "Chile", flagUrl: "/images/country/cl.png?height=16&width=24" },
]

export default function Header({ lang, dict }: HeaderProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages.find((l) => l.code === lang) || languages[0],
  )
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries.find((c) => c.code === "CL") || countries[0], // Default to Chile
  )

  // Update selected language if lang prop changes (e.g., via direct URL navigation)
  useEffect(() => {
    setSelectedLanguage(languages.find((l) => l.code === lang) || languages[0])
  }, [lang])

  const handleLanguageChange = (newLangCode: string) => {
    const newLang = languages.find((l) => l.code === newLangCode)
    if (newLang) {
      setSelectedLanguage(newLang)
      // Next.js i18n handles the actual route change via Link component
    }
  }

  const handleCountryChange = (newCountryCode: string) => {
    const newCountry = countries.find((c) => c.code === newCountryCode)
    if (newCountry) {
      setSelectedCountry(newCountry)
      // For now, country selection is purely UI.
      // To affect content, you'd need to extend Next.js i18n with regional locales (e.g., es-CL)
      // and potentially store this preference (e.g., in cookies or local storage).
    }
  }

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-background border-b">
      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 pt-6">
              <SheetClose asChild>
                <Link href={`/${lang}/raffles`} className="text-lg font-medium hover:underline underline-offset-4">
                  {dict.header.nav_raffles}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={`/${lang}/how-it-works`} className="text-lg font-medium hover:underline underline-offset-4">
                  {dict.header.nav_how_it_works}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={`/${lang}/contact`} className="text-lg font-medium hover:underline underline-offset-4">
                  {dict.header.nav_contact}
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <Image src="/images/misorteologo.png" alt={dict.header.logo_alt} width={32} height={32} className="h-6 w-6" />
          <span className="sr-only">{dict.header.logo_alt}</span>
        </Link>
      </div>

      {/* Desktop Logo and Navigation */}
      <div className="hidden sm:flex items-center">
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <Image src="/images/misorteologo.png" alt={dict.header.logo_alt} width={32} height={32} className="h-6 w-6" />
          <span className="font-bold text-lg">mis-sorteos.com</span> {/* Changed text here */}
          <span className="sr-only">{dict.header.logo_alt}</span>
        </Link>
        <nav className="hidden md:flex gap-6 ml-6">
          {" "}
          {/* Added ml-6 for spacing */}
          <Link href={`/${lang}/raffles`} className="text-sm font-medium hover:underline underline-offset-4">
            {dict.header.nav_raffles}
          </Link>
          <Link href={`/${lang}/how-it-works`} className="text-sm font-medium hover:underline underline-offset-4">
            {dict.header.nav_how_it_works}
          </Link>
          <Link href={`/${lang}/contact`} className="text-sm font-medium hover:underline underline-offset-4">
            {dict.header.nav_contact}
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        {" "}
        {/* Adjusted ml-auto for spacing */}
        {/* Language Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1 bg-transparent">
              <span className="hidden sm:inline">{selectedLanguage.name}</span>
              <span className="sm:hidden">{selectedLanguage.shortName}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map((langOption) => (
              <DropdownMenuItem key={langOption.code} asChild>
                <Link href={`/${langOption.code}`} onClick={() => handleLanguageChange(langOption.code)}>
                  {langOption.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Country Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1 bg-transparent">
              <Image
                src={selectedCountry.flagUrl || "/placeholder.svg"}
                alt={`${selectedCountry.name} Flag`}
                width={24}
                height={16}
                className="rounded"
              />
              <span className="hidden sm:inline">{selectedCountry.name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {countries.map((countryOption) => (
              <DropdownMenuItem
                key={countryOption.code}
                onClick={() => handleCountryChange(countryOption.code)}
                className="flex items-center gap-2"
              >
                <Image
                  src={countryOption.flagUrl || "/placeholder.svg"}
                  alt={`${countryOption.name} Flag`}
                  width={24}
                  height={16}
                  className="rounded"
                />
                {countryOption.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button asChild>
          <Link href={`/${lang}/login`}>{dict.header.cta_button}</Link>
        </Button>
      </div>
    </header>
  )
}
