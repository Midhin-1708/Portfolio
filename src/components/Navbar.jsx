import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-600">
          Midhin
        </h1>
 <ul className="hidden md:flex gap-8 font-medium text-gray-700">

  {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-600 transition duration-300"
            >
              {link}
            </a>
          </li>
        ))}

 </ul>
 <button
  className="md:hidden text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>
      </div>
      {menuOpen && (
  <div className="md:hidden bg-white shadow-md">
    <ul className="flex flex-col items-center py-4 gap-4">
      {navLinks.map((link) => (
        <li key={link}>
          <a
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}
    </nav>
  );
}

export default Navbar;