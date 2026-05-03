import { IconCode, IconFlame, IconSchool, IconTarget } from "@tabler/icons-react"

import Footer from "../components/widgets/Footer"
import Image from "next/image"
import NavBar from "@/app/components/widgets/Navbar"

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <NavBar />

      <main className="flex-1 max-w-5xl mx-auto w-full p-6 md:p-20">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-3 mb-8">
            <h1 className="text-5xl font-bold tracking-tighter">
              Construindo o amanhã, <span className="text-blue-500">um commit por vez.</span>
            </h1>
          </div>

          <div className="md:col-span-2 bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-8">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <IconSchool className="text-blue-500" /> Formação Acadêmica
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Atualmente no penúltimo semestre de Análise e Desenvolvimento de Sistemas. Minha jornada acadêmica é focada em entender não apenas o código, mas a arquitetura por trás de sistemas escaláveis e eficientes.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-8 flex flex-col justify-center">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
              <IconTarget className="text-orange-500" /> Objetivo
            </h2>
            <p className="text-sm text-gray-400">
              Me consolidar como Full Stack Developer, unindo a robustez do .NET Core com a agilidade do ecossistema React.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-8">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <IconCode className="text-cyan-500" /> Filosofia de Código
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Acredito em interfaces intuitivas e código limpo. Para mim, o desenvolvimento web é a junção perfeita entre lógica matemática e expressão criativa.
            </p>
          </div>

          <div className="md:col-span-2 bg-[#111111] border border-[#1f1f1f] rounded-[2rem] overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 flex-1">
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <IconFlame className="text-red-500" /> Além do Terminal
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                Fora do ambiente de desenvolvimento, sou mãe, o que moldou minha resiliência e foco. Dedico-me à leitura e à musculação, que pratico como um pilar essencial para minha saúde física, estética e, principalmente, saúde mental. Essa disciplina e equilíbrio transbordam para minha vida profissional, garantindo clareza e determinação em cada desafio técnico.
              </p>
            </div>
            <div className="relative w-full md:w-64 h-80 md:h-auto">
              <Image 
                src="/img/mom.jpeg" 
                alt="Eu e meu filho" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  )
}