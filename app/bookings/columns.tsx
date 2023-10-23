"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  event: string
  email: string
  date: string
  time: string
  status: "por pagar" | "pagada" | "eliminada"
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "event",
    header: "Evento",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date",
    header: "Fecha",
  },
  {
    accessorKey: "time",
    header: "Hora",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
]
