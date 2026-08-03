import landingPage from "../assets/projects/landing-page.png";
import authSystem from "../assets/projects/auth-system.png";
import portfolio from "../assets/projects/portfolio.png";

const projects = [
  {
    title: "Responsive Landing Page",
    image: landingPage,
    description:
      "A modern and fully responsive landing page developed using React, Vite, and Tailwind CSS with reusable components and mobile-first design.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Midhin-1708/landing-page.git",
    demo: "https://devsphere-landing.netlify.app/",
  },
  {
    title: "Authentication System",
    image: authSystem,
    description:
      "Responsive Sign In and Sign Up application with form validation, reusable components, and a clean user interface.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Midhin-1708/landing-page.git",
    demo: "https://access-portel.netlify.app/",
  },
  {
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A professional portfolio website showcasing my experience, technical skills, and projects with a responsive modern UI.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/Midhin-1708/Portfolio.git",
    demo: "https://stackportfolio.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">

      
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            Here are some of the projects I've built, demonstrating my
            experience in developing responsive, user-friendly, and scalable web
            applications.
          </p>
        </div>

       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

             
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-slate-800 hover:bg-blue-600 py-3 rounded-lg transition duration-300"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-blue-500 hover:bg-blue-600 py-3 rounded-lg transition duration-300"
                  >
                    Live Demo
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;