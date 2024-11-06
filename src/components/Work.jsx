import ProjectCard from "./ProjectCard.jsx";

const works = [
    {
        imgSrc: '/assets/project-1.png', // Ruta correcta sin "public/"
        title: 'Página Web de Gestión de Torneos Deportivos',
        tags: ['React', 'Django', 'API'],
        projectLink: 'https://github.com/TiagoRoccatagliata/mgptorneos/'
    },
    {
        imgSrc: '/assets/project-2.png',
        title: 'Página Web de Energías Renovables',
        tags: ['React', 'SQL'],
        projectLink: 'https://github.com/TiagoRoccatagliata/SolarMDP'
    },
    {
        imgSrc: '/assets/project-4.jpg',
        title: 'Gestión de Departamentos APP',
        tags: ['Java', 'JavaFX', 'OOP'],
        projectLink: 'https://github.com/TiagoRoccatagliata/RockPaperScissor'
    },
    {
        imgSrc: '/assets/project-3.png',
        title: 'Juego de Escritorio',
        tags: ['OOP', 'APP'],
        projectLink: 'https://github.com/TiagoRoccatagliata/RockPaperScissor'
    },
    {
        imgSrc: '/assets/project-5.jpg',
        title: 'Gestión de Películas',
        tags: ['Python', 'SQLite'],
        projectLink: 'https://github.com/TiagoRoccatagliata/gestionPeliculas'
    },
    {
        imgSrc: '/assets/project-6.jpg',
        title: 'Todos mis Repositorios',
        tags: ['Programación', 'Dev'],
        projectLink: 'https://github.com/TiagoRoccatagliata'
    },
];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Mis Proyectos!
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;