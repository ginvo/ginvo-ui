import Link from 'next/link'
import HeaderApp from '@/components/ui/header-app'
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            event: "Trekking Manquehuito",
            duration: "7 horas",
            endDate: "13 mar 2024",
            price: "$25.000",
            slots: "10",
            booking: "por completar",
        },
        {
            id: "728ed52f",
            event: "Terapia Consultiva",
            duration: "1 hora",
            endDate: "13 mar 2024",
            price: "$35.000",
            slots: "1",
            booking: "completa",
        },
        {
            id: "728ed52f",
            event: "Corte clásico y perfilado barba",
            duration: "45 minutos",
            endDate: "13 mar 2024",
            price: "$25.000",
            slots: "1",
            booking: "completa",
        },
        {
            id: "728ed52f",
            event: "Habitación 2: Cama doble - Baño privado",
            duration: "1 día",
            endDate: "13 mar 2024",
            price: "$15.000",
            slots: "1",
            booking: "completa",
        },
        // ...
    ]
}

export default async function Events() {
    const data = await getData()

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <HeaderApp></HeaderApp>

            <div className="container grid flex-1 gap-12">
                <main className="flex w-full flex-1 flex-col overflow-hidden space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0">
                            <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                Eventos
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                                Crea eventos para que la gente que invites reserve en tu agenda.
                            </p>
                        </div>
                        <Link href="/new-event">
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                Nuevo evento
                            </Button>
                        </Link>
                    </div>

                    <Tabs defaultValue="running" className="w-full">
                        <TabsList>
                            <TabsTrigger value="running">En curso</TabsTrigger>
                            <TabsTrigger value="next">Próximos</TabsTrigger>
                            <TabsTrigger value="canceled">Cancelados</TabsTrigger>
                            <TabsTrigger value="past">Pasados</TabsTrigger>
                            <TabsTrigger value="drafts">Borradores</TabsTrigger>
                        </TabsList>
                        <TabsContent value="running">
                            <DataTable columns={columns} data={data} />
                        </TabsContent>
                        <TabsContent value="next">Aún no hay eventos próximos.</TabsContent>
                        <TabsContent value="canceled">Aún no hay eventos cancelados.</TabsContent>
                        <TabsContent value="past">Aún no hay eventos pasados.</TabsContent>
                        <TabsContent value="drafts">Aún no hay eventos en borradores.</TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    )
}