"use client"

import Link from 'next/link'
import HeaderFormFull from '@/components/custom/header-form-full'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function NewEvent() {

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <HeaderFormFull></HeaderFormFull>

            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] mx-auto w-[800px]">
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
                    <div className="flex items-center justify-between">
                        <div className="space-y-0">
                            <Input className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none border-none focus-visible:ring-transparent" type="text" id="event" placeholder="Nuevo evento" />
                            <Label htmlFor="event-url">Url</Label>
                            <Input type="text" id="event-url" placeholder="https://ginvo.app/user/nuevo-evento" />
                            <Label htmlFor="description">Descripción</Label>
                            <Input type="text" id="description" placeholder="Escribe una descripción" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}