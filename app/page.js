
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-2xl">
      Todo App Using NextJs and TailwindCSS
      <div>
        <li><Link href='/about'>Aboutpage</Link></li>
        <li><Link href='./about/team'>teampage</Link></li>
        <li><Link href='/contact'>ContactPAGE</Link></li>
      </div>
    </main>
  )
}
