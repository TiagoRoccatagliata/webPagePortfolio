import ProjectCard from "./ProjectCard.jsx";

const works = [
    {
        imgSrc: '/assets/project-1.png', // Ruta correcta sin "public/"
        title: 'Página Web de Gestión de Torneos Deportivos',
        tags: ['Laravel', 'PHP', 'React'],
        projectLink: 'https://github.com/TiagoRoccatagliata/mgptorneos/'
    },
    {
        imgSrc: '/assets/project-2.png',
        title: 'Página Web de Energías Renovables',
        tags: ['React', 'SQLite'],
        projectLink: 'https://github.com/TiagoRoccatagliata/SolarMDP'
    },
    {
        imgSrc: '/assets/project-4.png',
        title: 'Pagina de Ventas de Autos Usados.',
        tags: ['PHP', 'Laravel', 'Blade', 'MySql'],
        projectLink: 'https://srv700755.hstgr.cloud/'
    },
    {
        imgSrc: '/assets/project3.png',
        title: 'Proxima Pelicula de Marvel',
        tags: ['PHP', 'API'],
        projectLink: 'https://github.com/TiagoRoccatagliata/marvel-movie'
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