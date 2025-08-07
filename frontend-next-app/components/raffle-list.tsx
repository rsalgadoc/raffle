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
import Image from "next/image" // Import Image component
import { allRaffles, type Raffle } from "@/lib/raffles" // Import allRaffles

interface RaffleListProps {
  lang: "es" | "en"
}

export default async function RaffleList({ lang }: RaffleListProps) {
  const dict = await getDictionary(lang)

  // Use a subset of allRaffles for recent raffles
  const recentRaffles: Raffle[] = allRaffles.filter((r) => r.status === "active" || r.status === "upcoming").slice(0, 5)

  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.hero.description}
          </p>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <Card>
            <CardHeader>
              <CardTitle>{dict.hero.recent_raffles}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{dict.hero.table_name}</TableHead>
                    <TableHead>{dict.hero.table_draw_date}</TableHead>
                    <TableHead className="text-right">{dict.hero.table_action}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentRaffles.map((raffle) => (
                    <TableRow key={raffle.id}>
                      <TableCell className="font-medium flex items-center gap-2">
                        <Image
                          src={raffle.imageUrl || "/placeholder.svg"}
                          alt={`${raffle.name} icon`}
                          width={24}
                          height={24}
                          className="rounded-sm" // Added rounded corners for the image
                        />
                        {raffle.name}
                      </TableCell>
                      <TableCell>{raffle.drawDate}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/${lang}/raffle/${raffle.id}`}>{dict.hero.participate_button}</Link>
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
              <Link href={`/${lang}/raffles`}>{dict.hero.view_more_raffles}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
