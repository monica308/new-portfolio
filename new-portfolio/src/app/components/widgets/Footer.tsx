import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full bg-[#0a0a0a] border-t border-[#1f1f1f] py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-500 font-medium">
                    © {year} Mônica Araújo — <span className="text-gray-600">Full-Stack Developer</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/monica308" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <IconBrandGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/monica-araujo-dev/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                        <IconBrandLinkedin size={20} />
                    </a>
                    <a href="https://wa.me/553194998935" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors">
                        <IconBrandWhatsapp size={20} />
                    </a>
                </div>

                <div className="text-[10px] uppercase tracking-widest text-gray-700 font-bold">
                    Built with Next.js & .NET 8
                </div>
            </div>
        </footer>
    )
}
