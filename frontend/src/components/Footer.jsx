import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {

  return (

    <footer className="bg-[#101014] border-t border-gray-800 text-white px-6 py-16">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo + About */}
        <div>

          <h1 className="text-4xl font-bold text-[#FFC919]">
            Quorbit
          </h1>

          <p className="mt-5 text-gray-400 leading-relaxed">

            A futuristic digital marketing agency blending
            creativity, automation, AI and growth strategy.

          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Quick Links
          </h2>

          <ul className="space-y-4 text-gray-400">

            <li>
              <Link to="/" className="hover:text-[#FFC919] transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-[#FFC919] transition">
                About
              </Link>
            </li>

            <li>
              <Link
                to="/performance-marketing"
                className="hover:text-[#FFC919] transition"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-[#FFC919] transition"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* Social */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Follow Us
          </h2>

          <div className="flex gap-6 text-3xl">

            <a
              href="#"
              className="hover:text-[#FFC919] transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-[#FFC919] transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-[#FFC919] transition duration-300"
            >
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-14 pt-8 text-center text-gray-500">

        © 2026 Quorbit. All rights reserved.

      </div>

    </footer>

  );
}

export default Footer;