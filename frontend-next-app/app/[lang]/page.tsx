import { getDictionary } from "./dictionaries"
import Header from "@/components/header"
import RaffleList from "@/components/raffle-list"
import RecentWinners from "@/components/recent-winners" // Import the new component
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function HomePage({
  params,
}: {
  params: { lang: "es" | "en" }
}) {
  const resolvedParams = await params // Await params if it's a Promise
  const lang = resolvedParams.lang
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-dvh">
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        {/* Recent Raffles Section */}
        <RaffleList lang={lang} />
        {/* Recent Winners Section */}
        <RecentWinners lang={lang} /> {/* Add the new section here */}
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-1">
                  {" "}
                  {/* Changed from space-y-2 */}
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {dict.hero.title}
                  </h1>
                  <p className="max-w-[600px] text-lg md:text-xl mx-auto lg:mx-0">{dict.hero.description}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button asChild className="bg-white text-primary hover:bg-gray-100">
                    <Link href={`/${lang}/login`}>{dict.header.cta_button}</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    <Link href={`/${lang}/raffles`}>{dict.hero.view_more_raffles}</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>
        {/* Call to Action Section (Example - can be expanded) */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {lang === "es" ? "¿Listo para crear tu propio sorteo?" : "Ready to create your own raffle?"}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {lang === "es"
                  ? "Es rápido, fácil y divertido. ¡Empieza ahora mismo!"
                  : "It's fast, easy, and fun. Get started now!"}
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <Button asChild>
                <Link href={`/${lang}/login`}>{dict.header.cta_button}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/${lang}/how-it-works`}>{dict.header.nav_how_it_works}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  )
}
