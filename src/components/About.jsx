function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#020617] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Building Solutions Through Code
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            A passionate Full Stack Developer dedicated to creating modern,
            scalable, and user-focused web applications while continuously
            learning and embracing new technologies.
          </p>
        </div>

       
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:-translate-y-2 hover:border-blue-500 transition duration-300">
            <h3 className="text-4xl font-bold text-blue-400">4+</h3>
            <p className="text-gray-400 mt-2">
              Years of Professional Experience
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:-translate-y-2 hover:border-blue-500 transition duration-300">
            <h3 className="text-4xl font-bold text-blue-400">10+</h3>
            <p className="text-gray-400 mt-2">
              Web Applications & Projects Delivered
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:-translate-y-2 hover:border-blue-500 transition duration-300">
            <h3 className="text-4xl font-bold text-blue-400">8+</h3>
            <p className="text-gray-400 mt-2">
              Technologies & Development Tools
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:-translate-y-2 hover:border-blue-500 transition duration-300">
            <h3 className="text-4xl font-bold text-blue-400">100%</h3>
            <p className="text-gray-400 mt-2">
              Commitment to Quality & Continuous Learning
            </p>
          </div>

        </div>

       
        <div className="grid lg:grid-cols-2 gap-12 items-start">

        
          <div>
            <h3 className="text-3xl font-bold mb-6">
              My Development Journey
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
    My career began at Tata Consultancy Services (TCS), where I gained valuable
    experience working in a professional corporate environment. During this
    period, I developed strong problem-solving abilities, learned industry best
    practices, collaborated with cross-functional teams, and built a solid
    foundation in software development and project delivery.
  </p>

  <p className="text-gray-400 leading-8 mb-6">
    Building on that foundation, I transitioned into Full Stack Development,
    where I have been designing and developing responsive, scalable, and
    user-centric web applications using React.js, PHP, Laravel,
    CodeIgniter, JavaScript, and MySQL. I enjoy creating clean, reusable
    components, integrating RESTful APIs, and delivering applications that
    provide seamless user experiences.
  </p>

  <p className="text-gray-400 leading-8">
    I believe in continuous learning, adapting to modern technologies, and
    writing maintainable code that delivers long-term value. Every project is
    an opportunity to enhance my technical expertise while contributing to
    innovative and impactful software solutions.
  </p>
          </div>

         
          <div className="space-y-6">

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition duration-300">
              <h4 className="text-xl font-semibold text-blue-400 mb-3">
                Professional Experience
              </h4>

              <p className="text-gray-400 leading-7">
                Experienced in building enterprise-level web applications using
                React.js, PHP, Laravel, CodeIgniter, Redux, Material UI,
                JavaScript, MySQL, and RESTful APIs while collaborating within
                Agile development teams.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition duration-300">
              <h4 className="text-xl font-semibold text-blue-400 mb-3">
                Education
              </h4>

              <p className="text-gray-400 leading-7">
                Bachelor of Science in Computer Science from
                Sri Krishna Arts & Science College, Coimbatore, providing a
                strong academic foundation in software development, programming,
                and computer science fundamentals.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition duration-300">
              <h4 className="text-xl font-semibold text-blue-400 mb-3">
                Core Expertise
              </h4>

              <ul className="space-y-3 text-gray-400">
                <li>✔ Responsive Frontend Development with React.js</li>
                <li>✔ Backend Development using PHP, Laravel & CodeIgniter</li>
                <li>✔ RESTful API Development & Integration</li>
                <li>✔ Database Design & Performance Optimization (MySQL)</li>
                <li>✔ Git Version Control & Agile Development</li>
                <li>✔ Clean Code & Reusable Component Architecture</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;