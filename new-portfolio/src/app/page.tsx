import {
  IconBrandAws,
  IconCode,
  IconDownload,
} from "@tabler/icons-react"

import Footer from "./components/widgets/Footer"
import Image from "next/image"
import NavBar from "@/app/components/widgets/Navbar"
import TypedText from "./components/apresentacao/Digitando"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <NavBar />

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min md:grid-flow-dense">
          <div className="md:col-span-2 bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-8 flex flex-col justify-center min-h-[300px] hover:border-blue-500 transition-colors">
            <h1 className="text-4xl font-bold mb-4">Olá, sou Mônica Araújo</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Desenvolvedora Full Stack focada em construir aplicações robustas
              com .NET Core e interfaces modernas em Next.js. Atualmente
              cursando ADS e me especializando em arquiteturas de nuvem.
            </p>
          </div>

          <div className="md:row-span-2 bg-[#111111] border border-[#1f1f1f] rounded-[2rem] overflow-hidden group">
            <Image
              src="/img/monica.png"
              alt="Mônica Araújo"
              width={500}
              height={700}
              className="object-cover w-full h-full grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center">
            <TypedText />
          </div>

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-6 flex flex-col gap-4">
            <h3 className="font-bold flex items-center gap-2">
              <IconCode size={20} /> Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-900/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-900/30 font-medium">
                C#
              </span>
              <span className="bg-blue-900/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-900/30 font-medium">
                .NET Core
              </span>
              <span className="bg-cyan-900/20 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-900/30 font-medium">
                React
              </span>
              <span className="bg-gray-800 text-blue-500 text-xs px-3 py-1 rounded-full border border-gray-700 font-medium">
                SQL Server
              </span>
              <span className="bg-gray-800 text-amber-700 text-xs px-3 py-1 rounded-full border border-gray-700 font-medium">
                GraphQl
              </span>
              <span className="bg-gray-800 text-yellow-600 text-xs px-3 py-1 rounded-full border border-gray-700 font-medium">
                Typescript 
              </span>
              <span className="bg-gray-800 text-lime-400 text-xs px-3 py-1 rounded-full border border-gray-700 font-medium">
                APIs REST 
              </span>
              <span className="bg-gray-800 text-lime-400 text-xs px-3 py-1 rounded-full border border-gray-700 font-medium">
                +
              </span>
            </div>
          </div>

          <div className="md:col-span-2 bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-8 flex items-center justify-between group">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Projetos & Experiência
              </h2>
              <p className="text-gray-400">
                Explore meus últimos trabalhos em desenvolvimento web.
              </p>
            </div>
            <a
              href="/CurriculoMonicaAtualizado.pdf"
              download
              className="bg-[#ededed] text-[#0a0a0a] p-4 rounded-2xl hover:scale-105 transition-transform"
            >
              <IconDownload />
            </a>
          </div>

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-orange-400">
              <IconBrandAws />
              <span className="text-sm font-bold uppercase tracking-widest">
                AWS Learning
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Preparando para Developer Associate
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
