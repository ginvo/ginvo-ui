import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, LogOut, Rocket } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import AvailabilityDay from "@/components/custom/availability-day"

export default function Schedule() {
    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex gap-6 md:gap-10">
                        <Link href="/">
                            <h2 className="hidden items-center space-x-2 md:flex text-2xl font-semibold">Ginvo UI</h2>
                        </Link>
                        <nav className="hidden gap-6 md:flex">
                            <Link href="/bookings" className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm'>Reservas</Link>
                            <Link href="/schedule" className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm'>Agenda</Link>
                            <Link href="#" className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm'>Servicios</Link>
                        </nav>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                                <AvatarFallback>
                                    <User />
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            {/* <DropdownMenuLabel>Cuenta</DropdownMenuLabel> */}
                            <small className="text-sm font-medium leading-none px-2">crstphx@gmail.com</small>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Cuenta</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Rocket className="mr-2 h-4 w-4" />
                                <span>Ginvo Pro</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Cerrar sesión</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>

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