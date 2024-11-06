import SkillCard from "./SkillCard.jsx";

const skillItem = [
    {
        imgSrc: '/assets/java.png',
        label: 'Java',
        desc: 'Lenguaje de programación para backend'
    },
    {
        imgSrc: '/assets/spring.png',
        label: 'Spring Boot',
        desc: 'Framework de Java para aplicaciones web'
    },
    {
        imgSrc: '/assets/python.png',
        label: 'Python',
        desc: 'Lenguaje de Programacion Multiuso.'
    },
    {
        imgSrc: '/assets/django.png',
        label: 'Django',
        desc: 'Framework de Python para aplicaciones web'
    },
    {
        imgSrc: '/assets/sql.png',
        label: 'SQL',
        desc: 'Lenguaje para gestión de bases de datos'
    },
    {
        imgSrc: '/assets/javascript.svg',
        label: 'JavaScript',
        desc: 'Lenguaje de programación frontend para desarrollo web'
    },
    {
        imgSrc: '/assets/react.svg',
        label: 'React',
        desc: 'Librería de JavaScript para construir interfaces de usuario'
    },
    {
        imgSrc: '/assets/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'Framework CSS de utilidad para estilos'
    },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Alguna de mis Herramientas!
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Descubre las potentes herramientas y tecnologías que utilizo para crear sitios web y aplicaciones excepcionales, de alto rendimiento.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Skill;