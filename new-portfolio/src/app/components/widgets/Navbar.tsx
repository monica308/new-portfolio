import Link from "next/link"

export default function NavBar() {
  return (
    <header className="w-full bg-[#0a0a0a] border-b border-[#1f1f1f]">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col text-center md:text-left">
          <span className="text-2xl font-bold text-[#ededed] tracking-tight">
            Mônica Araújo
          </span>
          <span className="text-xs font-medium text-blue-500 uppercase tracking-[0.2em] mt-1">
            Full-Stack Developer
          </span>
        </div>

        <nav className="flex items-center justify-center gap-6 md:gap-8 text-sm font-medium text-gray-400">
          <Link className="hover:text-white transition-colors" href="/">
            Início
          </Link>
          <Link className="hover:text-white transition-colors" href="/Sobre">
            Sobre
          </Link>
          <Link className="hover:text-white transition-colors" href="/Projetos">
            Projetos
          </Link>
          <Link className="hover:text-white transition-colors" href="/Contato">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}