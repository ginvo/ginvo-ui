import { Card, CardContent } from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import AvailabilityDay from "@/components/ui/availability-day"
import HeaderApp from '@/components/ui/header-app'

export default function Schedule() {
    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <HeaderApp></HeaderApp>

            <div className="container grid flex-1 gap-12">
                <main className="flex max-w-screen-sm flex-1 flex-col overflow-hidden space-y-4">
                    <div className="space-y-0">
                        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Disponibilidad
                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                            Indica la disponibilidad en días y horas para cada semana.
                        </p>
                    </div>
                    <Card>
                        <CardContent className="p-4 space-y-4">
                            <AvailabilityDay day="Lunes" />
                            <AvailabilityDay day="Martes" />
                            <AvailabilityDay day="Miércoles" />
                            <AvailabilityDay day="Jueves" />
                            <AvailabilityDay day="Viernes" />
                            <AvailabilityDay day="Sábado" />
                            <AvailabilityDay day="Domingo" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex w-full max-w-sm items-center space-x-16">
                                <Label htmlFor="zone">Zona horaria</Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Santiago Chile" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Zonas horarias</SelectLabel>
                                            <SelectItem value="apple">(UTC-02:00) Salvador</SelectItem>
                                            <SelectItem value="banana">(UTC-01:00) Cabo verde</SelectItem>
                                            <SelectItem value="blueberry">(UTC) Dublin</SelectItem>
                                            <SelectItem value="grapes">(UTC+01:00) Amsterdam</SelectItem>
                                            <SelectItem value="pineapple">(UTC+02:00) Brussels</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    )
}