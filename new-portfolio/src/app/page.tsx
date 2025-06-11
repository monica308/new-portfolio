import NavBar from "@/app/components/widgets/Navbar";
import Image from "next/image"
import Footer from "./components/widgets/Footer";
import TypedText from "./components/apresentacao/Digitando";
import { IconDownload } from "@tabler/icons-react";

export default function Home(){
    return(
        <>
        <div>
            <NavBar />
        </div>

        <main className="flex flex-col md:flex-row items-center justify-center pt-20 gap-8">
             
             <Image className="p-10 rounded-full"
            src="/img/monica.png"
            alt="Eu" 
            width={300}
            height={300}
            />

            <div className="flex flex-col items-start gap-4">
                <TypedText />

                <a
                    href="/CurriculoMonica.pdf"
                    download
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                    >
                    <IconDownload />
                    Download CV
                    </a>
            </div>
    
        </main>

        <div id="footer-trigger" className="h-1 w-full" />
           <Footer />

        </>
    )
}