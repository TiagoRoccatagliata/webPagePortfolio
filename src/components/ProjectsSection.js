import React from 'react';
import '../styles/styles.css';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';

const projects = [
  {
    title: "Solar MDQ",
    description: "A website for a solar energy company in Mar del Plata, my city.",
    imageUrl: img1,
    githubUrl: "https://github.com/TiagoRoccatagliata/SolarMDP",
    liveDemoUrl: "" // Agrega la URL si tienes una demo en vivo
  },
  {
    title: "Web Design",
    description: "Some of my proyects for the Responsive Web Design on freeCodeCamp.",
    imageUrl: img2,
    githubUrl: "https://github.com/TiagoRoccatagliata/WebDesign",
    liveDemoUrl: ""
  },
  {
    title: "JavaScript",
    description: "My JavaScript proyects for my freeCodeCamp curriculum.",
    imageUrl: img3,
    githubUrl: "https://github.com/TiagoRoccatagliata/JavaScript-Proyecto/tree/tiagobranch",
    liveDemoUrl: ""
  },
  {
    title: "Graduate Administration App",
    description: "Application Made for a subject of my college in PHP.",
    imageUrl: img5,
    githubUrl: "https://github.com/TiagoRoccatagliata/Aplicaci-n-Administraci-n-de-Egresados",
    liveDemoUrl: ""
  },
  {
    title: "PHP Practice",
    description: "My Practice on the PHP language.",
    imageUrl: img4,
    githubUrl: "https://github.com/TiagoRoccatagliata/practicaPHP",
    liveDemoUrl: ""
  },
  
  // Agrega más proyectos aquí
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-header">These are some of my projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project project-tile" key={index}>
            <img className="project-image" src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <p className="project-title"><span className="code">&lt;</span> {project.title} <span className="code">&#47;&gt;</span></p>
              <p className="project-description">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      <a href="https://github.com/TiagoRoccatagliata" className="btn btn-show-all" target="_blank" rel="noopener noreferrer">Show all<i className="fas fa-chevron-right"></i></a>
    </section>
  );
};

export default ProjectsSection;