// Removed "use client" directive
import { getDictionary } from "../dictionaries"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AllRafflesClient from "@/components/all-raffles-client" // Import the new client component
import { getAllRaffles } from "@/lib/raffles"

export default async function AllRafflesPage({ params }: { params: Promise<{ lang: "es" | "en" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang)
  const raffles = await getAllRaffles()

  return (
    <div className="flex flex-col min-h-dvh">
      <Header lang={lang} dict={dict} />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{dict.all_raffles.title}</h1>
            <p className="max-w-[700px] text-muted-foreground mx-auto mt-4">{dict.all_raffles.description}</p>
          </div>
          {/* Render the client component and pass server-fetched data */}
          <AllRafflesClient initialRaffles={raffles} dict={dict} lang={lang} />
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  )
}
