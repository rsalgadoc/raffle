import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getDictionary } from "../dictionaries"
import { FacebookIcon, InstagramIcon, Mail } from "lucide-react" // Removed ChromeIcon
import Image from "next/image" // Ensure Image is imported

export default async function LoginPage({
  params,
}: {
  params: { lang: "es" | "en" }
}) {
  const resolvedParams = await params // Await params if it's a Promise
  const lang = resolvedParams.lang
  const dict = await getDictionary(lang)

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md rounded-lg shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-4xl font-bold text-gray-900">¡Hola!</CardTitle>
          <CardDescription className="text-gray-600">{dict.login.subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 py-2 bg-transparent">
            <FacebookIcon className="h-5 w-5 text-blue-600" />
            {dict.login.facebook_login}
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 py-2 bg-transparent">
            <InstagramIcon className="h-5 w-5 text-pink-600" />
            {dict.login.instagram_login}
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 py-2 bg-transparent">
            <Image src="/images/google-logo.svg" alt="Google Logo" width={20} height={20} /> {/* Custom Google Logo */}
            {dict.login.google_login}
          </Button>
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-4 flex-shrink text-gray-500">{dict.login.or_separator}</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input id="email" type="email" placeholder={dict.login.email_placeholder} className="pl-10" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2">
            {dict.login.login_button}
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            {dict.login.no_account_text}{" "}
            <Link href={`/${lang}/signup`} className="text-primary underline">
              {dict.login.signup_link}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
