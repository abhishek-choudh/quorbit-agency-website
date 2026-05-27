"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="w-full fixed top-0 left-0 z-50 bg-[#14141A]/90 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link href="/">

          <h1 className="text-3xl font-bold text-[#FFC919] cursor-pointer">
            Quorbit
          </h1>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium">

          <li>
            <Link href="/" className="hover:text-[#FFC919] transition duration-300">
              Home
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-[#FFC919] transition duration-300">
              Services
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-[#FFC919] transition duration-300">
              About
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-[#FFC919] transition duration-300">
              Contact
            </Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Strategy Button */}
          <button
            onClick={() => window.location.href="/contact"}
            className="hidden md:block bg-[#FFC919] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
          >

            Strategy Call

          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-[#14141A] border-t border-gray-800 px-6 py-6">

          <ul className="flex flex-col gap-6 text-white font-medium">

            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/Services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

          </ul>

        </div>

      )}

    </nav>

  );
}

export default Navbar;