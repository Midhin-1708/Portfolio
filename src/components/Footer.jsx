import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#020617] border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              Midhin M
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Full Stack Developer passionate about building
              scalable, responsive, and user-friendly web applications.
            </p>
          </div>

  
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

    
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Midhin-1708"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/midhin-dev/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="midhin.mugundan@gmail.com"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaEnvelope size={20} />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center md:text-left">
            © {currentYear} Midhin M. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-5 md:mt-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;