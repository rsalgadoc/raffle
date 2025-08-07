import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import { getDictionary } from "@/app/[lang]/dictionaries"

interface FooterProps {
  lang: "es" | "en"
}

export default async function Footer({ lang }: FooterProps) {
  const dict = await getDictionary(lang)

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} mis-sorteos.com {dict.footer.copyright}
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href={`/${lang}/terms`} className="text-xs hover:underline underline-offset-4">
          {dict.footer.terms}
        </Link>
        <Link href={`/${lang}/privacy`} className="text-xs hover:underline underline-offset-4">
          {dict.footer.privacy}
        </Link>
        <Link href="#" className="text-xs hover:text-primary">
          <FacebookIcon className="h-4 w-4" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link href="#" className="text-xs hover:text-primary">
          <TwitterIcon className="h-4 w-4" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link href="#" className="text-xs hover:text-primary">
          <InstagramIcon className="h-4 w-4" />
          <span className="sr-only">Instagram</span>
        </Link>
      </nav>
    </footer>
  )
}
