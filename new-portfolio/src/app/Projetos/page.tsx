import NavBar from "@/app/components/widgets/Navbar";
import Footer from "../components/widgets/Footer";
import ProjetosFiltrados from "../components/ProjetosFiltrados/page";

export default function Home(){
    return(
        <>
        <div>
             <NavBar />
        </div>

        <main>
            <ProjetosFiltrados />
        </main>

        <div id="footer-trigger" className="h-1 w-full" />
            <Footer />

        </>
        )
    }