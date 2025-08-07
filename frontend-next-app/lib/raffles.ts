// lib/raffles.ts
export interface Raffle {
  id: string
  name: string
  description: string
  drawDate: string
  imageUrl: string
  fullDescription: string
  prize: string
  participationPeriod: string
  country: string
  rulesUrl: string
  status: "active" | "upcoming" | "past"
}

export const allRaffles: Raffle[] = [
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
    status: "active",
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
    status: "active",
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
    status: "upcoming",
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
    status: "upcoming",
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
    status: "upcoming",
  },
  {
    id: "6",
    name: "Un Minuto de Supermercado con Saldo CencoPay",
    description: "¡Gana un minuto de supermercado gratis con saldo CencoPay!",
    drawDate: "2025-08-01",
    imageUrl: "/placeholder.svg?height=128&width=128",
    fullDescription:
      "La vigencia y validez del concurso será desde el martes 15 de julio a las 16:00 hrs, hasta el jueves 31 de julio a las 23:59 hrs.",
    prize: "Un minuto de supermercado gratis, con un tope de $250.000 (doscientos cincuenta mil pesos)",
    participationPeriod: "15 de julio a las 16:00 hrs, hasta el jueves 31 de julio a las 23:59 hrs.",
    country: "Chile",
    rulesUrl: "https://cencopay.cl/bases-de-concurso/un-minuto-de-supermercado-con-saldo-cencopay/",
    status: "past", // Assuming this is a past raffle based on the date
  },
  {
    id: "7",
    name: "Bicicleta de Montaña Pro",
    description: "Una bicicleta de montaña de alta gama para tus aventuras.",
    drawDate: "2025-11-10",
    imageUrl: "/placeholder.svg?height=128&width=128",
    fullDescription:
      "Explora nuevos senderos con esta bicicleta de montaña profesional, equipada con los mejores componentes.",
    prize: "Bicicleta de montaña profesional.",
    participationPeriod: "1 de Noviembre a 9 de Noviembre",
    country: "España",
    rulesUrl: "#",
    status: "upcoming",
  },
  {
    id: "8",
    name: "Kit de Fotografía Profesional",
    description: "Todo lo que necesitas para empezar tu carrera como fotógrafo.",
    drawDate: "2025-12-01",
    imageUrl: "/placeholder.svg?height=128&width=128",
    fullDescription:
      "Incluye cámara DSLR, lentes, trípode y mochila. Captura momentos inolvidables con calidad profesional.",
    prize: "Cámara DSLR, lentes, trípode y mochila.",
    participationPeriod: "15 de Noviembre a 30 de Noviembre",
    country: "México",
    rulesUrl: "#",
    status: "upcoming",
  },
  {
    id: "9",
    name: "Experiencia Gastronómica",
    description: "Una cena para dos en un restaurante Michelin.",
    drawDate: "2024-07-20",
    imageUrl: "/placeholder.svg?height=128&width=128",
    fullDescription:
      "Disfruta de una experiencia culinaria única en uno de los restaurantes más prestigiosos de la ciudad.",
    prize: "Cena para dos en restaurante Michelin.",
    participationPeriod: "1 de Julio a 19 de Julio",
    country: "Argentina",
    rulesUrl: "#",
    status: "past",
  },
  {
    id: "10",
    name: "Smart TV 4K de 65 pulgadas",
    description: "La mejor experiencia de cine en casa.",
    drawDate: "2025-07-25",
    imageUrl: "/placeholder.svg?height=128&width=128",
    fullDescription: "Sumérgete en tus películas y series favoritas con una calidad de imagen impresionante.",
    prize: "Smart TV 4K de 65 pulgadas.",
    participationPeriod: "10 de Julio a 24 de Julio",
    country: "Chile",
    rulesUrl: "#",
    status: "active",
  },
]

export async function getAllRaffles(): Promise<Raffle[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return allRaffles
}
