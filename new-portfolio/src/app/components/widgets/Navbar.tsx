'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Início" },
  { href: "/Sobre", label: "Sobre" },
  { href: "/Projetos", label: "Projetos" },
  { href: "/Contato", label: "Contato" },
]

export default function NavBar() {
  const pathname = usePathname()
  return (
    <header className="w-full bg-[#0a0a0a] border-b border-[#1f1f1f]">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col text-center md:text-left">
          <span className="text-2xl font-bold text-[#ededed] tracking-tight">Mônica Araújo</span>
          <span className="text-xs font-medium text-blue-500 uppercase tracking-[0.2em] mt-1">
            Full-Stack Developer
          </span>
        </div>
        <nav className="flex items-center justify-center gap-6 md:gap-8 text-sm font-medium">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${
                pathname === href ? "text-blue-500" : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}