import { getDictionary } from "../../dictionaries"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from 'next/navigation';
import { getRaffleById } from '@/api/sdk.gen';
interface RaffleDetails {
  id: string
  name: string
  description: string
  drawDate: string
  imageUrl: string
  fullDescription: string
  prize: string // New field
  participationPeriod: string // New field
  country: string // New field
  rulesUrl: string // New field
}

// Mock function to simulate fetching raffle details
async function getRaffleDetails(id: string): Promise<RaffleDetails | null> {
  // In a real application, you would fetch this from a database or API
  const mockRaffles: RaffleDetails[] = [
    {
      id: "1",
      name: "Sorteo de Verano",
      description: "¡Participa y gana increíbles premios para disfrutar este verano!",
      drawDate: "2025-08-15",
      imageUrl: "/images/twitter-logo.png",
      fullDescription:
        "Este sorteo especial de verano incluye una variedad de premios perfectos para la temporada, como una barbacoa de alta gama, un set de sillas de playa y una nevera portátil. ¡No te lo pierdas!",
      prize: "Barbacoa de alta gama, set de sillas de playa y nevera portátil.",
      participationPeriod: "1 de Julio a 14 de Agosto",
      country: "Global",
      rulesUrl: "#",
    },
    {
      id: "2",
      name: "Gran Premio Tecnológico",
      description: "Gana los últimos gadgets tecnológicos, desde smartphones hasta consolas.",
      drawDate: "2025-09-01",
      imageUrl: "/images/ford-logo.png",
      fullDescription:
        "El Gran Premio Tecnológico te da la oportunidad de llevarte un iPhone 16, una PlayStation 6, o un nuevo portátil de última generación. ¡La tecnología más avanzada a tu alcance!",
      prize: "iPhone 16, PlayStation 6, o portátil de última generación.",
      participationPeriod: "15 de Agosto a 31 de Agosto",
      country: "Global",
      rulesUrl: "#",
    },
    {
      id: "3",
      name: "Viaje a la Playa",
      description: "Un viaje todo incluido a un destino paradisíaco. ¡Arena, sol y mar te esperan!",
      drawDate: "2025-09-10",
      imageUrl: "/images/mcdonalds-logo.png",
      fullDescription:
        "Disfruta de unas vacaciones inolvidables con un viaje para dos personas a una playa tropical, con alojamiento en un resort de lujo y actividades incluidas. ¡Tu escapada perfecta!",
      prize: "Viaje todo incluido para dos a un destino paradisíaco.",
      participationPeriod: "1 de Septiembre a 9 de Septiembre",
      country: "Global",
      rulesUrl: "#",
    },
    {
      id: "4",
      name: "Cesta de Productos Locales",
      description: "Descubre los sabores de nuestra región con esta cesta gourmet.",
      drawDate: "2025-09-20",
      imageUrl: "/images/ge-logo.png",
      fullDescription:
        "Una selección exquisita de productos artesanales y locales, incluyendo quesos, embutidos, vinos y dulces. Ideal para los amantes de la gastronomía.",
      prize: "Cesta gourmet con productos artesanales y locales.",
      participationPeriod: "10 de Septiembre a 19 de Septiembre",
      country: "Global",
      rulesUrl: "#",
    },
    {
      id: "5",
      name: "Consola de Última Generación",
      description: "La consola más deseada del momento puede ser tuya.",
      drawDate: "2025-10-05",
      imageUrl: "/images/pepsico-logo.png",
      fullDescription:
        "Participa por la oportunidad de ganar la consola de videojuegos más reciente, con un paquete de juegos y accesorios para que empieces a disfrutar al máximo.",
      prize: "Consola de videojuegos de última generación con juegos y accesorios.",
      participationPeriod: "20 de Septiembre a 4 de Octubre",
      country: "Global",
      rulesUrl: "#",
    },
    {
      id: "6", // New raffle ID
      name: "Un Minuto de Supermercado con Saldo CencoPay",
      description: "¡Gana un minuto de supermercado gratis con saldo CencoPay!",
      drawDate: "1 de Agosto del 2025",
      imageUrl: "/placeholder.svg?height=128&width=128", // Placeholder for new raffle
      fullDescription:
        "La vigencia y validez del concurso será desde el martes 15 de julio a las 16:00 hrs, hasta el jueves 31 de julio a las 23:59 hrs.",
      prize: "Un minuto de supermercado gratis, con un tope de $250.000 (doscientos cincuenta mil pesos)",
      participationPeriod: "15 de julio a las 16:00 hrs, hasta el jueves 31 de julio a las 23:59 hrs.",
      country: "Chile",
      rulesUrl: "https://cencopay.cl/bases-de-concurso/un-minuto-de-supermercado-con-saldo-cencopay/",
    },
  ]
  return mockRaffles.find((raffle) => raffle.id === id) || null
}



async function getRaffle(id: string) {
  const raffleId = Number.parseInt(id, 10);
  const { data: raffle } = await getRaffleById({
    cache: 'force-cache',
    path: {
      raffleId,
    },
    throwOnError: true,
  });
  if (!raffle) {
    notFound();
  }
  return raffle;
}


export default async function RaffleDetailPage({ params }: { params: Promise<{ lang: "es" | "en"; id: string }> }) {
  const { lang, id } = await params;
  const dict = await getDictionary(lang)
  const raffle = await getRaffleDetails(id)

  const raffleApi = await getRaffle(id);

  if (!raffle) {
    return (
      <div className="flex flex-col min-h-dvh">
        <Header lang={lang} dict={dict} />
        <main className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl font-bold">{dict.raffle_detail.not_found_title}</h1>
            <p className="text-muted-foreground mt-2">{dict.raffle_detail.not_found_description}</p>
            <Button asChild className="mt-6">
              <Link href={`/${lang}/raffles`}>{dict.raffle_detail.back_to_raffles}</Link>
            </Button>
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <Header lang={lang} dict={dict} />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Card className="mx-auto max-w-3xl">
            <CardHeader className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6">
              {" "}
              {/* Adjusted for layout */}
              <Image
                src={raffle.imageUrl || "/placeholder.svg"}
                alt={`${raffle.name} image`}
                width={64} // Reduced image size
                height={64} // Reduced image size
                className="rounded-lg object-cover flex-shrink-0" // Added flex-shrink-0
              />
              <div className="flex flex-col text-center sm:text-left">
                {" "}
                {/* Grouped text and aligned left */}
                <CardTitle className="text-3xl font-bold">{raffle.name} - {raffleApi.name}</CardTitle> {/* Adjusted font size */}
                <p className="text-muted-foreground mt-2">{raffle.description}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 p-6 pt-0">
              {" "}
              {/* Adjusted padding */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {" "}
                  {/* Made flex to align date and button */}
                  <div>
                    <h3 className="text-lg font-semibold">{dict.raffle_detail.draw_date_label}</h3>
                    <p className="text-muted-foreground">{raffle.drawDate}</p>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0">
                    {dict.raffle_detail.participate_button}
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{dict.raffle_detail.status_label}</h3>
                  <p className="text-green-600 font-medium">{dict.raffle_detail.status_active}</p>
                </div>
                {/* New fields */}
                <div>
                  <h3 className="text-lg font-semibold">{dict.raffle_detail.prize_label}</h3>
                  <p className="text-muted-foreground">{raffle.prize}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{dict.raffle_detail.participation_period_label}</h3>
                  <p className="text-muted-foreground">{raffle.participationPeriod}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{dict.raffle_detail.country_label}</h3>
                  <p className="text-muted-foreground">{raffle.country}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{dict.raffle_detail.rules_label}</h3>
                  <Link
                    href={raffle.rulesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {dict.raffle_detail.view_rules_link}
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{dict.raffle_detail.about_raffle_label}</h3>
                <p className="text-muted-foreground mt-2">{raffle.fullDescription}</p>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" asChild>
                  <Link href={`/${lang}/raffles`}>{dict.raffle_detail.back_to_raffles}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  )
}
