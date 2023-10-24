import Link from 'next/link'
import HeaderApp from '@/components/custom/header-app'
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            event: "Trekking Manquehuito",
            duration: "7 horas",
            price: "$25.000",
            slots: "10",
            status: "activo",
        },
        // ...
    ]
}

export default async function Events() {
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
                                    Disponibilidad
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
                <main className="flex w-full flex-1 flex-col overflow-hidden space-y-4">
                    <div className="space-y-0">
                        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Eventos
                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                            Crea eventos para que la gente que invites reserve en tu agenda.
                        </p>
                    </div>

                    <DataTable columns={columns} data={data} /> 
                </main>
            </div>
        </div>
    )
}