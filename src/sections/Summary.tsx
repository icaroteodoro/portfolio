import { Github, Linkedin } from "lucide-react";

export default function Summary() {
    return (
        <section id="sumary" className="container flex flex-col-reverse md:flex-row items-start md:items-center text-white py-20 lg:py-52">
            <div className=" w-full md:w-3/5 mt-12">
                <h1 className="font-extrabold w-full text-4xl lg:text-8xl">Ícaro Teodoro</h1>
                <h2 className="font-extrabold text-2xl lg:text-5xl mt-2">Desenvolvedor Fullstack</h2>
                <div className="flex space-x-5 mt-8">
                    <a target="_blank" href="https://www.linkedin.com/in/%C3%ADcaro-teodoro-520259169/" className="flex gap-2 rounded-md px-3 py-3 font-bold bg-stone-700 hover:bg-stone-800 transition-all">
                        <Linkedin className="border-2 rounded-sm"/>
                        LINKEDIN
                    </a>
                    <a target="_blank" href="https://github.com/icaroteodoro" className="flex gap-2 rounded-md px-3 py-3 font-bold bg-stone-700 hover:bg-stone-800 transition-all">
                        <Github className="border-2 rounded-sm"/>
                        GITHUB
                    </a>
                </div>
            </div>
            <div className="w-full md:w-2/5 flex justify-center lg:justify-end lg:items-center">
                <div className="size-72 md:size-72 lg:w-96  lg:h-96 bg-stone-800 rounded-full shadow-2xl overflow-hidden">
                    <img className="h-full w-full" src="../icaro.png" alt="" />
                </div>
            </div>
        </section>
    );
}