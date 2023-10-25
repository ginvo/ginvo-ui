"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  event: string
  duration: string
  endDate: string
  price: string
  slots: string
  booking: "completa" | "por completar"
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "event",
    header: "Evento",
  },
  {
    accessorKey: "duration",
    header: "Duración",
  },
  {
    accessorKey: "endDate",
    header: "Término",
  },
  {
    accessorKey: "price",
    header: "Precio",
  },
  {
    accessorKey: "slots",
    header: "Cupos",
  },
  {
    accessorKey: "booking",
    header: "Reserva",
  },
]
