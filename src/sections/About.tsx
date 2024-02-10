import Skills from "@/components/Skills";
import TitleBodyDark from "../components/TitleBodyDark";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-stone-300 w-full">
      <div className="container">
        <TitleBodyDark>SOBRE MIM</TitleBodyDark>
        <p className="text-stone-900 font-medium text-base xl:text-lg 2xl:text-xl font-poppins mt-2">
          Meu nome Ícaro Teodoro, sou brasileiro, alagoano, nascido em 1998 e
          conheci a programação em 2013 quando ingressei no ensino médio técnico
          em informática no Intituto Federal de Alagoas onde me formei. Hoje sou
          graduando em Ciência da Computação pelo Centro Universitário União das
          Américas. Atualmente trabalho com HTML, CSS, JavaScript e PHP, mas em
          meus projetos pessoais, utilizo as bibliotecas React.js para o
          frontend, ReactNative para apps e Java com Spring para o backend.
        </p>
      </div>
      <div className="container mt-10">
        <TitleBodyDark>HABILIDADES</TitleBodyDark>
        <div className="flex flex-wrap gap-4 mt-5">
          <Skills>Java</Skills>
          <Skills>Spring Framework</Skills>
          <Skills>PHP</Skills>
          <Skills>Laravel</Skills>
          <Skills>HTML</Skills>
          <Skills>CSS</Skills>
          <Skills>Bootstrap</Skills>
          <Skills>Tailwind</Skills>
          <Skills>JavaScript</Skills>
          <Skills>React.js</Skills>
          <Skills>Next.js</Skills>
          <Skills>Vite</Skills>
          <Skills>React Native</Skills>
          <Skills>Expo Go</Skills>
          <Skills>Node.js</Skills>
          <Skills>Express.js</Skills>
          <Skills>MySQL</Skills>
          <Skills>Docker</Skills>
        </div>
      </div>
      <div className="container mt-10">
        <TitleBodyDark>EXPERIÊNCIAS</TitleBodyDark>
        <div className="flex flex-col pt-3">
          <div className="w-full">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold">
              Desenvolvedor Fullstack Junior
            </h3>
            <h4 className="text-lg lg:text-xl font-poppins font-bold">
              ClickEvolue -{" "}
              <span className="font-medium text-stone-700">
                08/2023 até o momento
              </span>
            </h4>
            <p className="text-base lg:text-lg mt-1 font-poppins font-normal">
              Atualmente sou Desenvolvedor Fullstack Júnior, atuando na
              manutenção de sites já criados pela empresa e na criação de novos
              projetos. Também atuo na criação de testes automatizados em algum
              dos projetos da empresa. Usamos HTML, CSS e JavaScript para o
              frontend, PHP para o backend e a ferramenta Cypress para os testes
              de frontend.
            </p>
          </div>
          <div className="w-full mt-6">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold">
              Estágio de Desenvolvimento Web Fullstack
            </h3>
            <h4 className="text-lg lg:text-xl font-poppins font-bold">
              ClickEvolue -{" "}
              <span className="font-medium text-stone-700">
                02/2023 até 08/2023
              </span>
            </h4>
            <p className="text-base lg:text-lg mt-1 font-poppins font-normal">
              Atuei como estagiário, na manutenção de sites já criados pela
              empresa e também participei na criação de novos projetos. Na
              maioria dos casos usando PHP para o backend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
