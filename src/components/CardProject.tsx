import Skils from "./Skills";


interface CardProjectsProps {
    title: string,
    description:string,
    urlCode: string,
    urlSite:string
    skills:string[],
    urlImage:string,
}

export default function CardProject(props: CardProjectsProps) {
    return (
        <div className="flex flex-col lg:flex-row p-6 border border-gray rounded-3xl mt-10">
            <div className="w-full lg:w-2/6">
                <div className="rounded-2xl bg-gray w-full h-40 md:h-96 lg:h-60 flex items-center justify-center text-white font-extrabold font-poppins overflow-hidden">
                    {props.urlImage === '' ? 'SEM IMAGEM' : <img className="w-full h-full" src={props.urlImage}/>}
                </div>
            </div>
            <div className="w-full lg:w-4/6 mt-7 lg:mt-0 mx-0 lg:mx-5 text-stone-300 flex flex-col justify-center">
                <h2 className="text-2xl font-extrabold font-poppins">{props.title}</h2>
                <p className="text-base font-poppins font-medium mt-3">{props.description}</p>
                <div className="flex flex-wrap gap-3 mt-3">
                    {
                        props.skills.map(skill => (<Skils key={skill}>{skill}</Skils>))
                    }
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                    {props.urlCode === '' ? <></> : <a target="_blank" href={props.urlCode} className="text-white font-poppins font-extrabold py-4 px-8 bg-slate-800 hover:bg-slate-700 transition-all rounded-xl">VER CÓDIGO</a>  }
                    {props.urlSite === '' ? <></> : <a target="_blank" href={props.urlSite} className="text-white font-poppins font-extrabold py-4 px-8 bg-lime-800 hover:bg-lime-700 transition-all rounded-xl">VER WEBSITE</a>  }
                </div>
            </div>
        </div>
    );
}