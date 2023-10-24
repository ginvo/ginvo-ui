"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  event: string
  duration: string
  price: string
  slots: string
  status: "activo" | "inactivo" | "borrador"
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
    accessorKey: "price",
    header: "Precio",
  },
  {
    accessorKey: "slots",
    header: "Cupos",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
]
