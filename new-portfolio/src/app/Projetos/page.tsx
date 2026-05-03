import Footer from "@/app/components/widgets/Footer"
import NavBar from "@/app/components/widgets/Navbar"
import ProjetosFiltrados from "../components/ProjetosFiltrados/page"

export default function Projetos() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
            <NavBar />

            <main className="flex-1 flex flex-col">
                <section className="max-w-7xl mx-auto w-full px-4 md:px-10 pt-16 md:pt-24">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#1f1f1f] pb-12">
                        <div className="max-w-2xl">
                            <h1 className="text-6xl font-bold tracking-tighter mb-4">
                                Meus <span className="text-blue-500">Projetos</span>
                            </h1>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Uma vitrine do meu desenvolvimento técnico, focando na transição para Full Stack e arquiteturas modernas com .NET e Next.js.
                            </p>
                        </div>
                        
                        <div className="hidden md:flex flex-col items-end">
                            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">Status</span>
                            <div className="flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/20 text-sm font-medium">
                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                Desenvolvendo novas features
                            </div>
                        </div>
                    </div>
                </section>

                <div className="py-10">
                    <ProjetosFiltrados />
                </div>
            </main>

            <Footer />
        </div>
    )
}