import NavBar from "@/app/components/widgets/Navbar";
import Footer from "../components/widgets/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/img/.png')] bg-cover bg-center min-h-screen flex flex-col">
        <NavBar />

        <main className="flex-1 container mx-auto px-4 md:px-20 py-20">
          <h2 className="text-3xl md:text-4xl font-bold font-minhaFonte text-center md:text-left">
            Olá, me chamo Mônica!
          </h2>

          <p className="pt-8 font-minhaFonte text-justify leading-relaxed">
            Desenvolvedora em formação e apaixonada por tecnologia, estou cursando Análise e Desenvolvimento de Sistemas e construindo minha jornada no mundo do desenvolvimento web. Com domínio em HTML, CSS, JavaScript, React, Node.js, Tailwind CSS e Next.js, busco criar interfaces modernas, funcionais e de alto desempenho.
          </p>

          <p className="pt-6 font-minhaFonte text-justify leading-relaxed">
            Meu objetivo é me tornar uma desenvolvedora full-stack, unindo frontend e backend para desenvolver aplicações completas e escaláveis. Tenho um olhar atento para UI/UX, priorizando interfaces intuitivas e acessíveis que proporcionam a melhor experiência ao usuário.
          </p>

          <p className="pt-6 font-minhaFonte text-justify leading-relaxed">
            Aberta a desafios e novas oportunidades, estou pronta para colaborar em projetos que me permitam evoluir e agregar valor ao mundo da tecnologia!
          </p>
        </main>
      </div>

      <div id="footer-trigger" className="h-1 w-full" />
      <Footer />
    </>
  );
}
