import { CheckCircle2} from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-scroll";
export default function Footer(){

    const copyEmail = () => {
       navigator.clipboard.writeText("icaro.teodoro84@icloud.com");
       toast(
        "O e-mail foi copiado para sua área de tranferencia!", {
            icon: <CheckCircle2 className="text-lime-500" />,
            className : "space-x-3"
        })
    }
    const copyNumber = () => {
       navigator.clipboard.writeText("+5582998389953");
       toast(
        "O número de telefone foi copiado para sua área de tranferencia!", {
            icon: <CheckCircle2 className="text-lime-500" />,
            className : "space-x-3"
        })
    }

    return (
        <footer className="bg-stone-300 w-full py-20 lg:py-28">
            <div className="container flex">
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10">
                    <p className="hover:cursor-pointer hover:text-white transition-all text-xl lg:text-2xl font-poppins font-medium" onClick={() => copyEmail() }>icaro.teodoro84@icloud.com</p>
                    <p className="hover:cursor-pointer hover:text-white transition-all text-xl lg:text-2xl font-poppins font-medium" onClick={() => copyNumber() }>+55 82 998389953</p>
                </div>
                <div className="w-full lg:w-1/2 hidden lg:flex flex-col items-end gap-5">
                    <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" to="sumary" spy={true} smooth={true} offset={-70} duration={500}>HOME</Link>
                    <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" to="about" spy={true} smooth={true} offset={-70} duration={500}>SOBRE</Link>
                    <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" to="projects" spy={true} smooth={true} offset={20} duration={500}>PROJETOS</Link>
                    <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" to="contact" spy={true} smooth={true} offset={-70} duration={500}>CONTATO</Link>
                </div>
            </div>
            <div className="container mt-10">
                <div className="border-t border-stone-400">
                    <p className="mt-5 text-xl lg:text-2xl font-poppins">© Ícaro Teodoro Canuto 2024</p>
                </div>
            </div>
        </footer>
    );
}