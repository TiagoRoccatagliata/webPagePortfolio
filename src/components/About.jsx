import PropTypes from 'prop-types';

const About = () => {
    const aboutItems  = [
        {
            label: 'Proyectos',
            number: 10
        },
        {
            label: 'Años de Experiencia',
            number: 1
        }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        ¡Bienvenido! Mi nombre es Tiago, soy un desarrollador web profesional con una gran pasión por crear sitios web visualmente impactantes y altamente funcionales. Combinando creatividad y experiencia técnica, transformo tus ideas en auténticas obras maestras digitales que destacan tanto en apariencia como en rendimiento.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;