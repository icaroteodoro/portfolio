import CardProject from "@/components/CardProject";
import TitleBody from "@/components/TitleBody";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 container">
      <TitleBody>PROJETOS</TitleBody>
      <CardProject
        title="API ENTREGÔ"
        description="Essa é uma API que estou desenvolvendo para um aplicativo de delivery."
        skills={["JAVA", "SPRING FRAMEWORK", "MYSQL"]}
        urlCode="https://github.com/icaroteodoro/EntregoAPI"
        urlSite=""
        urlImage=""
      />
      <CardProject
        title="API TODOLIST"
        description="Fiz essa API, para um app de todolist que ainda estou desenvolvendo."
        skills={["JAVA", "SPRING FRAMEWORK"]}
        urlCode="https://github.com/icaroteodoro/todolist-java"
        urlSite=""
        urlImage=""
      />
      <CardProject
        title="INSTITUTO BIOTA DE CONSERVAÇÃO"
        description="Desenvolvi o frontend dessa página web, pela empresa em que eu trabalho atualmente."
        skills={["HTML", "CSS", "JS", "BOOTSTRAP", "JQUERY"]}
        urlCode=""
        urlSite="https://institutobiota.org.br"
        urlImage="../biota.png"
      />

      <div className="flex py-5 items-center justify-center">
        <a
          href="https://github.com/icaroteodoro?tab=repositories"
          target="_blank"
          className="text-white border border-gray px-20 py-6 rounded-2xl hover:bg-stone-800 transition-all font-poppins font-bold"
        >
          MEU REPOSITÓRIO
        </a>
      </div>
    </section>
  );
}
