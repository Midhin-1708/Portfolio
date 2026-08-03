import {
  SiTailwindcss,
  SiMysql,
  SiLaravel,
  SiCodeigniter,
} from "react-icons/si";

import {
  FaReact,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaLinux,
  FaAws,
  FaCode,
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
        { name: "CodeIgniter", icon: <SiCodeigniter className="text-orange-500" /> },
      ],
    },

    {
      title: "Database & API Development",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "REST APIs", icon: <FaDatabase className="text-green-400" /> },
      ],
    },

    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Linux", icon: <FaLinux className="text-yellow-400" /> },
        { name: "AWS EC2", icon: <FaAws className="text-orange-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technologies & Tools
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            My technical expertise spans frontend development, backend
            technologies, databases, cloud fundamentals, and modern development
            tools that help me build responsive, scalable, and efficient web
            applications.
          </p>
        </div>

       
        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-slate-800 rounded-xl p-5 hover:bg-slate-700 hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="text-5xl mb-4">
                      {skill.icon}
                    </div>

                    <p className="text-gray-300 text-center font-medium">
                      {skill.name}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;