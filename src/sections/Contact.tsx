import TitleBody from "@/components/TitleBody";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="container py-20 lg:py-36">
      <TitleBody>CONTATO</TitleBody>
        <form action="" className="text-white font-poppins mt-5">
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 ">
                <div className="w-full lg:w-1/2">
                    <Label htmlFor="name" className="text-lg">Seu nome:</Label>
                    <Input autoComplete="given-name" required id="name" name="name" type="text" placeholder="Digite seu nome..." className=" border-gray focus:border-stone-300"></Input>
                </div>
                <div className="w-full lg:w-1/2">
                    <Label htmlFor="email" className="text-lg">Seu e-mail:</Label>
                    <Input autoComplete="email" required id="email" name="email" type="email" placeholder="Digite seu e-mail..." className=" border-gray focus:border-stone-300"></Input>
                </div>
            </div>
            <div className="w-full mt-3">
                <Label htmlFor="message" className="text-lg">Sua mensagem:</Label>
                <Textarea autoComplete="message" required id="message" name="message" placeholder="Digite aqui sua mensagem..." rows={10} className=" border-gray focus:border-stone-300"></Textarea>
            </div>
            <div className="flex justify-center items-center mt-5">
                <Button className="px-16 py-7 border border-gray hover:bg-stone-800" onClick={() => console.log("send mail...")}>
                    ENVIAR
                </Button>
            </div>
        </form>
    </section>
  );
}
