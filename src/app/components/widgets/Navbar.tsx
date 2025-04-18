import Link from "next/link";

export default function NavBar() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="text-3xl font-bold text-center md:text-left">
          Mônica Araújo
          <div className="text-base text-gray-500">Front-End Developer</div>
        </div>

        <nav className="mt-6 md:mt-0 flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xl">
          <Link className="hover:text-blue-600 transition" href="/">Início</Link>
          <Link className="hover:text-blue-600 transition" href="/Sobre">Sobre</Link>
          <Link className="hover:text-blue-600 transition" href="/Projetos">Projetos</Link>
          <Link className="hover:text-blue-600 transition" href="/Contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
