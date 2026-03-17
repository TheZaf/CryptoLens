import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authstore";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuthStore()

  return (
    <nav className="bg-zinc-900/50 w-full z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://cdn-icons-png.flaticon.com/128/15301/15301760.png"
            className="h-7"
            alt="CryptoLens Logo"
          />
          <span className="text-white self-center text-xl font-semibold whitespace-nowrap">
            CryptoLens
          </span>
        </a>

        {/* Right Section */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
          {/* ← swap button based on auth */}
          {user ? (
            <button
              onClick={logOut}
              type="button"
              className="text-white bg-gray-800 hover:bg-red-800 border border-transparent font-medium rounded-lg text-sm px-3 py-2 focus:outline-none transition-colors"
            >
              Logout
            </button>
          ) : (
            <Link to="/signup">
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-700 border border-transparent font-medium rounded-lg text-sm px-3 py-2 focus:outline-none"
              >
                Signup
              </button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-zinc-800 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}>
          <ul className="text-white flex flex-col p-4 md:p-0 mt-4 font-medium border border-zinc-800 rounded-lg bg-zinc-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li><a href="/" className="block py-2 px-3 md:p-0 hover:text-zinc-400 transition-colors">Home</a></li>
            <li><a href="/about" className="block py-2 px-3 md:p-0 hover:text-zinc-400 transition-colors">About</a></li>
            <li><a href="/services" className="block py-2 px-3 md:p-0 hover:text-zinc-400 transition-colors">Services</a></li>
            <li><a href="https://mail.google.com/mail/?view=cm&to=manojzaf.me@gmail.com" target="_blank" className="block py-2 px-3 md:p-0 hover:text-zinc-400 transition-colors">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};