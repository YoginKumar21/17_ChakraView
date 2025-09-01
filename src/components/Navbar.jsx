import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            ⚡
          </div>
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AstraX Customs
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className={`${location.pathname === "/"
              ? "text-blue-400 font-semibold"
              : "hover:text-blue-400"
              }`}
          >
            Home
          </Link>
          <Link
            to="/models"
            className={`${location.pathname === "/models"
              ? "text-blue-400 font-semibold"
              : "hover:text-blue-400"
              }`}
          >
            Models
          </Link>
          <Link to="/team" className={`${location.pathname === "/team"
            ? "text-blue-400 font-semibold"
            : "hover:text-blue-400"
            }`}>
            Team
          </Link>

        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white flex flex-col space-y-4 p-4">
          <Link to="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/models" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
            Models
          </Link>
          <Link to="/team" className="hover:text-blue-400">
            Team
          </Link>
        </div>
      )}
    </header>
  );
}
