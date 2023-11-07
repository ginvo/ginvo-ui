"use client"

import HeaderApp from '@/components/ui/header-app'
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"


export default function Events() {
    const [selectedDay, setSelectedDay] = React.useState<Date | undefined>(new Date())

    const availabilitySelectedDay = selectedDay ? (
        <p>Bloques disponibles para {selectedDay.toDateString()}.</p>
    ) : (
        <p>Please pick a day.</p>
    );

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <HeaderApp></HeaderApp>

            <div className="container grid flex-1 gap-12">
                <main className="flex w-full flex-1 flex-col overflow-hidden space-y-4">
                    <Card>
                        <CardContent className="p-4 flex flex-row w-full">
                            <div className="w-full">
                                <p>Servicio</p>
                            </div>
                            <Calendar
                                mode="single"
                                selected={selectedDay}
                                onSelect={setSelectedDay}
                                weekStartsOn={1}
                                className="w-full"
                            />
                            <div className="w-full">{availabilitySelectedDay}
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    )
}