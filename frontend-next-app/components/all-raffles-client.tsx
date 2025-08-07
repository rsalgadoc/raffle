"use client"

import { useState, useEffect, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table" // Import Table components
import Link from "next/link"
import Image from "next/image"
import { SearchIcon } from "lucide-react"
import type { Raffle } from "@/lib/raffles"

interface AllRafflesClientProps {
  initialRaffles: Raffle[]
  dict: any
  lang: "es" | "en"
}

export default function AllRafflesClient({ initialRaffles, dict, lang }: AllRafflesClientProps) {
  const [raffles, setRaffles] = useState<Raffle[]>(initialRaffles)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterCountry, setFilterCountry] = useState<string>("all")

  // Update raffles if initialRaffles prop changes (e.g., if data is re-fetched on server)
  useEffect(() => {
    setRaffles(initialRaffles)
  }, [initialRaffles])

  const filteredRaffles = useMemo(() => {
    let filtered = raffles

    if (searchTerm) {
      filtered = filtered.filter(
        (raffle) =>
          raffle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          raffle.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter((raffle) => raffle.status === filterStatus)
    }

    if (filterCountry !== "all") {
      filtered = filtered.filter((raffle) => raffle.country === filterCountry)
    }

    return filtered
  }, [raffles, searchTerm, filterStatus, filterCountry])

  const uniqueCountries = useMemo(() => {
    const countries = new Set<string>()
    initialRaffles.forEach((raffle) => countries.add(raffle.country))
    return Array.from(countries).sort()
  }, [initialRaffles])

  const getStatusTranslation = (status: Raffle["status"]) => {
    switch (status) {
      case "active":
        return dict.raffle_detail.status_active
      case "upcoming":
        return dict.all_raffles.status_upcoming
      case "past":
        return dict.all_raffles.status_past
      default:
        return status
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder={dict.all_raffles.search_placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10"
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder={dict.all_raffles.filter_status_label} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{dict.all_raffles.status_all}</SelectItem>
            <SelectItem value="active">{dict.raffle_detail.status_active}</SelectItem>
            <SelectItem value="upcoming">{dict.all_raffles.status_upcoming}</SelectItem>
            <SelectItem value="past">{dict.all_raffles.status_past}</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterCountry} onValueChange={setFilterCountry}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder={dict.all_raffles.filter_country_label} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{dict.all_raffles.country_all}</SelectItem>
            {uniqueCountries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{dict.all_raffles.table_name}</TableHead>
                <TableHead>{dict.all_raffles.table_draw_date}</TableHead>
                <TableHead>{dict.all_raffles.table_status}</TableHead>
                <TableHead>{dict.all_raffles.table_country}</TableHead>
                <TableHead className="text-right">{dict.all_raffles.table_action}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRaffles.length > 0 ? (
                filteredRaffles.map((raffle) => (
                  <TableRow key={raffle.id}>
                    <TableCell className="font-medium flex items-center gap-2">
                      <Image
                        src={raffle.imageUrl || "/placeholder.svg"}
                        alt={`${raffle.name} icon`}
                        width={24}
                        height={24}
                        className="rounded-sm"
                      />
                      {raffle.name}
                    </TableCell>
                    <TableCell>{raffle.drawDate}</TableCell>
                    <TableCell>{getStatusTranslation(raffle.status)}</TableCell>
                    <TableCell>{raffle.country}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/${lang}/raffle/${raffle.id}`}>{dict.hero.participate_button}</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                    {dict.all_raffles.no_raffles_found}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
