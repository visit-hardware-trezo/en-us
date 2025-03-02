import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="https://i.ibb.co/fzY2Lh4J/t-logo.png" alt="Trezor Logo" className="h-10 w-auto" />
            <span className="ml-2 text-2xl font-bold text-green-800">Trezor</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Features</a>
          <a href="#security" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Security</a>
          <a href="#models" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Models</a>
          <a href="#testimonials" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Testimonials</a>
        </nav>

        <div className="hidden md:block">
          <a href="#cta" className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
            Shop Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#security" 
              className="text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Security
            </a>
            <a 
              href="#models" 
              className="text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Models
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-green-800 font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#cta" 
              className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;