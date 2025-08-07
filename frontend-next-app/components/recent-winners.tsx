import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { getDictionary } from "@/app/[lang]/dictionaries"
import Link from "next/link"
import Image from "next/image"

interface Winner {
  id: string
  raffleName: string
  drawDate: string
  winnerName: string
  imageUrl: string
}

interface RecentWinnersProps {
  lang: "es" | "en"
}

export default async function RecentWinners({ lang }: RecentWinnersProps) {
  const dict = await getDictionary(lang)

  // Placeholder data for recent winners
  const recentWinners: Winner[] = [
    {
      id: "w1",
      raffleName: "Sorteo de Verano",
      drawDate: "2025-08-15",
      winnerName: "Juan Pérez",
      imageUrl: "/images/twitter-logo.png",
    },
    {
      id: "w2",
      raffleName: "Gran Premio Tecnológico",
      drawDate: "2025-09-01",
      winnerName: "María García",
      imageUrl: "/images/ford-logo.png",
    },
    {
      id: "w3",
      raffleName: "Viaje a la Playa",
      drawDate: "2025-09-10",
      winnerName: "Carlos López",
      imageUrl: "/images/mcdonalds-logo.png",
    },
    {
      id: "w4",
      raffleName: "Cesta de Productos Locales",
      drawDate: "2025-09-20",
      winnerName: "Ana Martínez",
      imageUrl: "/images/ge-logo.png", // Updated image
    },
    {
      id: "w5",
      raffleName: "Consola de Última Generación",
      drawDate: "2025-10-05",
      winnerName: "Pedro Sánchez",
      imageUrl: "/images/pepsico-logo.png", // Updated image
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.recent_winners.description}
          </p>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Card>
            <CardHeader>
              <CardTitle>{dict.recent_winners.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{dict.recent_winners.table_name}</TableHead>
                    <TableHead>{dict.recent_winners.table_draw_date}</TableHead>
                    <TableHead>{dict.recent_winners.table_winner}</TableHead>
                    <TableHead className="text-right">{dict.recent_winners.table_action}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentWinners.map((winner) => (
                    <TableRow key={winner.id}>
                      <TableCell className="font-medium flex items-center gap-2">
                        <Image
                          src={winner.imageUrl || "/placeholder.svg"}
                          alt={`${winner.raffleName} icon`}
                          width={24}
                          height={24}
                          className="rounded-sm"
                        />
                        {winner.raffleName}
                      </TableCell>
                      <TableCell>{winner.drawDate}</TableCell>
                      <TableCell>{winner.winnerName}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/${lang}/raffle/${winner.id}`}>{dict.recent_winners.view_button}</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination className="mt-6">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href={`/${lang}/winners`}>{dict.recent_winners.view_more_winners}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
