import TitleBody from "@/components/TitleBody";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

import { api } from "@/lib/axios";
import { toast } from "sonner";
import { CheckCircle2, XCircle } from "lucide-react";

interface MailProps {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mail: MailProps = {
    name,
    email,
    message,
  };
  const sendMail = async (evt: FormEvent) => {
    evt.preventDefault();

    await api.post("/send", { mail }).then((res) => {
      if(res.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        toast(
          "E-mail enviado com sucesso!",
          {
            icon: <CheckCircle2 className="text-lime-500" />,
            className: "space-x-3",
          }
        );
      }else{
        toast(
          "O e-mail não pode ser enviado. Por favor, tente novamente mais tarde!",
          {
            icon:  <XCircle className="text-red-600" />,
            className: "space-x-3",
          }
        );
      }
    });
  };

  return (
    <section id="contact" className="container py-20 lg:py-36">
      <TitleBody>CONTATO</TitleBody>
      <form
        onSubmit={sendMail}
        method="post"
        className="text-white font-poppins mt-5"
      >
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 ">
          <div className="w-full lg:w-1/2">
            <Label htmlFor="name" className="text-lg">
              Seu nome:
            </Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              autoComplete="given-name"
              value={name}
              required
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome..."
              className=" border-gray focus:border-stone-300"
            ></Input>
          </div>
          <div className="w-full lg:w-1/2">
            <Label htmlFor="email" className="text-lg">
              Seu e-mail:
            </Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="email"
              required
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail..."
              className=" border-gray focus:border-stone-300"
            ></Input>
          </div>
        </div>
        <div className="w-full mt-3">
          <Label htmlFor="message" className="text-lg">
            Sua mensagem:
          </Label>
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="message"
            value={message}
            required
            id="message"
            name="message"
            placeholder="Digite aqui sua mensagem..."
            rows={10}
            className=" border-gray focus:border-stone-300"
          ></Textarea>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Button
            type="submit"
            className="px-16 py-7 border border-gray hover:bg-stone-800"
          >
            ENVIAR
          </Button>
        </div>
      </form>
    </section>
  );
}
