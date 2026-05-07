import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

import Footer from "@/app/components/widgets/Footer";
import NavBar from "@/app/components/widgets/Navbar";

export default function Contato() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <NavBar />

      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-10">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold tracking-tighter mb-4">
              Vamos conversar sobre o seu{" "}
              <span className="text-blue-500">próximo projeto?</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Sinta-se à vontade para me chamar em qualquer uma das redes
              abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://github.com/monica308"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-8 flex flex-col items-center gap-4 hover:border-white transition-all group"
            >
              <IconBrandGithub
                size={40}
                className="text-gray-400 group-hover:text-white"
              />
              <span className="font-bold">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/m%C3%B4nica-ara%C3%BAjo-91214317a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-8 flex flex-col items-center gap-4 hover:border-blue-500 transition-all group"
            >
              <IconBrandLinkedin
                size={40}
                className="text-gray-400 group-hover:text-blue-500"
              />
              <span className="font-bold">LinkedIn</span>
            </a>

            <a
              href="https://wa.me/553194998935"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-8 flex flex-col items-center gap-4 hover:border-green-500 transition-all group"
            >
              <IconBrandWhatsapp
                size={40}
                className="text-gray-400 group-hover:text-green-500"
              />
              <span className="font-bold">WhatsApp</span>
            </a>

            <div className="md:col-span-2 bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-8 flex items-center gap-6 overflow-hidden">
              <div className="bg-blue-500/10 p-4 rounded-2xl shrink-0">
                <IconMail className="text-blue-500" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  E-mail Profissional
                </p>
                <p className="text-base md:text-lg font-medium break-all md:break-normal">
                  monicaiaraaraujo@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-[#111111] border border-[#1f1f1f] rounded-[2rem] p-8 flex items-center gap-4">
              <IconMapPin className="text-gray-500" />
              <span className="text-gray-400">Ipatinga, MG</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
