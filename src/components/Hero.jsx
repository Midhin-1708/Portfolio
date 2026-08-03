import resume from "../assets/resume/Midhin_Resume.pdf";
import profile from "../assets/images/Profile_Image.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="text-blue-400 font-semibold tracking-widest uppercase">
              Welcome to My Portfolio
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Hi, I'm <span className="text-blue-500">Midhin</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4">
              React & PHP Full Stack Developer
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-8 max-w-xl">
              I'm a Full Stack Developer with 4 years of professional
              experience, including 2 years specializing in React.js and PHP.
              I build responsive, scalable, and user-friendly web applications
              with a strong focus on performance, clean code, and intuitive user
              experiences.
            </p>

            <p className="mt-4 text-lg text-gray-400 leading-8 max-w-xl">
              Passionate about creating modern web applications using React,
              JavaScript, Tailwind CSS, PHP, and MySQL while continuously
              learning new technologies and best practices.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={resume}
                download="Midhin_Resume.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

         
          {/* <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-2 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-gray-400 text-xl">
                 <div className="flex justify-center">
     <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 p-2 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
        <div className="w-full h-full rounded-full overflow-hidden">
      <img
        src={profile}
        alt="Midhin"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
                </span>
              </div>
            </div>
          </div> */}

<div className="flex justify-center">
  <div className="relative">

  
    <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>

  
    <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-700 p-1 shadow-2xl">

      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border border-slate-700">

        <h1 className="text-9xl md:text-[9rem] font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent select-none">
          M
        </h1>

      </div>

    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Hero;