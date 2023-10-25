import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import HeaderApp from '@/components/custom/header-app'

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            event: "Trekking Manquehuito",
            email: "m@example.com",
            date: "4 ene 2024",
            time: "17:00 - 23:00",
            status: "pagada",
        },
        {
            id: "453egf345",
            event: "Terapia Consultiva",
            email: "m@example.com",
            date: "4 ene 2024",
            time: "18:00 - 20:00",
            status: "por pagar",
        },
        {
            id: "453egf345",
            event: "Corte clásico y perfilado barba",
            email: "m@example.com",
            date: "4 ene 2024",
            time: "18:00 - 20:00",
            status: "por pagar",
        },
        {
            id: "453egf345",
            event: "Habitación 2: Cama doble - Baño privado",
            email: "m@example.com",
            date: "4 ene 2024",
            time: "18:00 - 20:00",
            status: "por pagar",
        },
        // ...
    ]
}

export default async function Bookings() {
    const data = await getData()

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <HeaderApp></HeaderApp>

            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[200px] flex-col md:flex">
                    <div className="w-full">
                        <div className="pb-8">
                            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
                                Menú
                            </h4>
                            <div className="grid grid-flow-row auto-rows-max text-sm">
                                <Link
                                    href="#"
                                    className="flex w-full items-center rounded-md p-2 hover:underline"
                                >
                                    Reservas
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
                <main className="flex w-full flex-1 flex-col overflow-hidden space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0">
                            <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                Reservas
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                                Gestiona las reservas a tus eventos futuros y pasados.
                            </p>
                        </div>
                    </div>

                    <Tabs defaultValue="next" className="w-full">
                        <TabsList>
                            <TabsTrigger value="next">Próximas</TabsTrigger>
                            <TabsTrigger value="confirm">Por confirmar</TabsTrigger>
                            <TabsTrigger value="canceled">Canceladas</TabsTrigger>
                            <TabsTrigger value="past">Pasadas</TabsTrigger>
                        </TabsList>
                        <TabsContent value="next">
                            <DataTable columns={columns} data={data} />
                        </TabsContent>
                        <TabsContent value="confirm">Aún no hay reservas por confirmar.</TabsContent>
                        <TabsContent value="canceled">Aún no hay reservas canceladas.</TabsContent>
                        <TabsContent value="past">Aún no hay reservas pasadas.</TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    )
}