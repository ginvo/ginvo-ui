import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export default function HeaderFormFull() {
  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/events">
            <Button variant="ghost">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <p className='flex items-center text-lg font-regular sm:text-sm'>Borrador</p>
          </nav>
        </div>
        <Link href="/">
          <Button>
            Guardar
          </Button>
        </Link>
      </div>
    </header>
  )
}