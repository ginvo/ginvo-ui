import HeaderFormFull from '@/components/ui/header-form-full'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import NavLeft from '@/components/ui/nav-left'

export default function NewEvent() {

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <HeaderFormFull></HeaderFormFull>

            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] mx-auto w-[900px]">
                <NavLeft></NavLeft>
                <main className="flex w-full flex-1 flex-col overflow-hidden space-y-4">
                    <div>
                        <div className="space-y-0">
                            <Label htmlFor="event-name">Nombre evento</Label>
                            <Input type="text" id="event-name" placeholder="Nombre evento" />
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