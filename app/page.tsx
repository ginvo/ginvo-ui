import Link from 'next/link'
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

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <header className="sticky top-0 z-40 border-b bg-background">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex gap-6 md:gap-10">
                        <Link href="/">
                            <h2 className="hidden items-center space-x-2 md:flex text-2xl font-semibold">Ginvo UI</h2>
                        </Link>
                        <nav className="hidden gap-6 md:flex">
                            <Link href="#" className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm'>Reservas</Link>
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
                <main className="flex w-full flex-1 flex-col overflow-hidden">
                    Dashboard
                </main>
            </div>
        </div>
    )
}