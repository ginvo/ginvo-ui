import HeaderApp from '@/components/custom/header-app'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <HeaderApp></HeaderApp>

      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          Dashboard
        </main>
      </div>
    </div>
  )
}