import CardProject from "@/components/CardProject";
import TitleBody from "@/components/TitleBody";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 container">
      <TitleBody>PROJETOS</TitleBody>
      <CardProject
        title="ENTREGÔ - App de Delivery"
        description="Estou desenvolvendo este sistema completo com o objetivo de aprendizado, utilizando o YouTube como principal fonte de estudo, além de contar com o suporte do ChatGPT e do Stack Overflow."
        skills={["Java", "Spring", "MySQL", "Next.js", "React.js", "WebSocket"]}
        urlCode="https://github.com/icaroteodoro/EntregoAPI"
        urlSite="https://entrego-store.netlify.app/"
        urlImage="../entrego-dashboard.png"
      />
      <CardProject
        title="Team Rafa - Landing Page"
        description="Criei esta landing page para o treinador Rafael Vieira usando Next.js, já pensando na futura evolução para um sistema de acompanhamento dos alunos"
        skills={["React.js", "Next.js"]}
        urlCode=""
        urlSite="https://team-rafa.netlify.app/"
        urlImage="../team-rafa.png"
      />
      <CardProject
        title="DailyLog - Gerenciador de dailys"
        description="Estou criando este projeto para simplificar a criação e o acompanhamento de dailys da minha equipe."
        skills={["Java", "Spring", "Next.js", "React.js"]}
        urlCode="https://github.com/icaroteodoro/dailylog.api"
        urlSite=""
        urlImage="../dailylog.png"
      />
      <div className="flex py-5 items-center justify-center">
        <a
          href="https://github.com/icaroteodoro?tab=repositories"
          target="_blank"
          className="text-white border border-gray px-20 py-6 rounded-2xl hover:bg-stone-800 transition-all font-poppins font-bold"
        >
          MEUS REPOSITÓRIOS
        </a>
      </div>
    </section>
  );
}
