
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <nav className="w-full fixed top-0 left-0 z-50 bg-[#14141A]/90 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div>

          <Link to="/">

            <h1 className="text-3xl font-bold text-[#FFC919] cursor-pointer">
              Quorbit
            </h1>

          </Link>

        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">

          <Link to="/">
            <li className="hover:text-[#FFC919] transition duration-300 cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="/performance-marketing">
            <li className="hover:text-[#FFC919] transition duration-300 cursor-pointer">
              Services
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-[#FFC919] transition duration-300 cursor-pointer">
              Contact
            </li>
          </Link>
          <Link to="/about">
  <li className="hover:text-[#FFC919] transition duration-300 cursor-pointer">
    About
  </li>
</Link>

        </ul>






        {/* CTA Button */}
        <button
  onClick={() => navigate("/contact")}
  className="bg-[#FFC919] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
>

  Strategy Call

</button>

{/* Mobile Menu Icon */}

<div
  className="md:hidden text-white text-2xl cursor-pointer"
  onClick={() => setMenuOpen(!menuOpen)}
>

  {menuOpen ? <FaTimes /> : <FaBars />}

</div>

      </div>

{/* Mobile Menu */}

{
  menuOpen && (

    <div className="md:hidden bg-[#1B1B24] px-8 py-6 space-y-6 text-white font-medium">

      <Link to="/">
        <div onClick={() => setMenuOpen(false)}>
          Home
        </div>
      </Link>

      <Link to="/performance-marketing">
        <div onClick={() => setMenuOpen(false)}>
          Services
        </div>
      </Link>

      <Link to="/about">
        <div onClick={() => setMenuOpen(false)}>
          About
        </div>
      </Link>

      <Link to="/contact">
        <div onClick={() => setMenuOpen(false)}>
          Contact
        </div>
      </Link>

    </div>

  )
}
    </nav>


  );
}

export default Navbar;