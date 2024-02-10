import { Menu } from "lucide-react";
import { Link } from "react-scroll";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

export default function Header() {
  return (
    <div className="w-full flex fixed top-0 justify-center bg-stone-900 h-14 md:h-16 lg:h-20">
      <nav className="flex container  text-stone-300 ">
        <div className="w-2/3 lg:w-1/2 flex items-center">
          <a href="/" className="font-poppins font-bold text-lg md:text-2xl 2xl:text-4xl hover:text-stone-100 transition-all" >{"<Ícaro Teodoro/>"}</a>
        </div>
        <div className="w-1/3 lg:w-1/2 hidden lg:flex items-center justify-end">
          <div className="w-3/4 flex items-center justify-between ">
          <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" activeClass="text-stone-50" to="sumary" spy={true} smooth={true} offset={-70} duration={500}>HOME</Link>
          <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" activeClass="text-stone-50" to="about" spy={true} smooth={true} offset={20} duration={500}>SOBRE</Link>
          <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" activeClass="text-stone-50" to="projects" spy={true} smooth={true} offset={20} duration={500}>PROJETOS</Link>
          <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" activeClass="text-stone-50" to="contact" spy={true} smooth={true} offset={20} duration={500}>CONTATO</Link>
          </div>
        </div>
        <div className="w-1/2 flex lg:hidden items-center justify-end">
          <Sheet>
            <SheetTrigger>
              <Menu className="size-8 md:size-12"/>
            </SheetTrigger>
            <SheetContent className="bg-stone-900 text-stone-300 border-none">
              <SheetDescription className="flex flex-col items-start space-y-5 pt-10">
                <SheetTrigger asChild>
                  <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" activeClass="text-stone-50" to="sumary" spy={true} smooth={true} offset={-70} duration={500}>HOME</Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" activeClass="text-stone-50" to="about" spy={true} smooth={true} offset={-70} duration={500}>SOBRE</Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" activeClass="text-stone-50" to="projects" spy={true} smooth={true} offset={-70} duration={500}>PROJETOS</Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link className="font-poppins font-bold text-sm md:text-xl 2xl:text-2xl hover:text-stone-100 transition-all hover:cursor-pointer" activeClass="text-stone-50" to="contact" spy={true} smooth={true} offset={-70} duration={500}>CONTATO</Link>
                </SheetTrigger>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
    
  );
}
