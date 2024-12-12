import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Scale } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-law-primary text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-law-secondary" />
            <span className="text-2xl font-bold">مكتب المحامي عبدالعزيز بن إبراهيم الدريبي</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            <Link to="/" className="hover:text-law-secondary transition-colors">
              الرئيسية
            </Link>
            <Link to="/services" className="hover:text-law-secondary transition-colors">
              خدماتنا
            </Link>
            <Link to="/contact" className="hover:text-law-secondary transition-colors">
              اتصل بنا
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block hover:text-law-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              to="/services"
              className="block hover:text-law-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              خدماتنا
            </Link>
            <Link
              to="/contact"
              className="block hover:text-law-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              اتصل بنا
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;