import NavBar from "@/app/components/widgets/Navbar";
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"
import Link from "next/link"
import Footer from "../components/widgets/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <NavBar />
      </div>

      <main className="flex-grow flex justify-center items-center">
        <div className="p-10 border-1 border-gray-800 rounded-xl">
          <h1 className="text-4xl text-gray-700">Entre em Contato:</h1>

          <nav className="p-5">
            <ul className="pt-5">
              <Link
                className="flex items-center gap-2 hover:text-gray-400"
                href="https://github.com/monica308"
                target="_blank"
              >
                <IconBrandGithub /> GitHub
              </Link>
            </ul>

            <ul className="pt-5">
              <Link
                className="flex items-center gap-2 hover:text-gray-400"
                href="https://www.linkedin.com/in/m%C3%B4nica-ara%C3%BAjo-91214317a/"
                target="_blank"
              >
                <IconBrandLinkedin /> Linkedin
              </Link>
            </ul>

            <ul className="pt-5">
              <Link
                className="flex items-center gap-2 hover:text-gray-400"
                href="https://wa.me/553194998935"
                target="_blank"
              >
                <IconBrandWhatsapp /> Whatsapp
              </Link>
            </ul>
          </nav>
        </div>
      </main>

      <div id="footer-trigger" className="h-1 w-full" />
      <Footer />
    </div>
  );
}
