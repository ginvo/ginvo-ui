import Link from 'next/link'
import { User, LogOut, Rocket } from 'lucide-react'

export default function NavLeft() {
  return (
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
  )
}