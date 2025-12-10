import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuickExit = () => {
    alert("Redirecting to safety...");
    // Simulate screen clearing immediately
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "white";
    // Redirect
    window.location.replace("https://google.com");
  };

  const navLinks = [
    { name: 'About', href: '#mission' },
    { name: 'The Vault', href: '#services' },
    { name: 'Healing', href: '#healing' },
    { name: 'Partners', href: '#impact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
               {/* <span className="text-2xl font-bold text-secondary">Medexer</span> */}
               <span className="text-2xl font-bold text-primary">HerShield</span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary-light hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="px-5 py-2 border border-secondary text-secondary font-medium rounded hover:bg-gray-50 transition-colors">
              Donate/Support
            </button>
            <button
              onClick={handleQuickExit}
              className="px-5 py-2 bg-primary text-white font-bold uppercase rounded hover:bg-primary-hover transition-colors flex items-center gap-2"
            >
              <LogOut size={18} />
              Quick Exit
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             {/* Mobile Quick Exit (Always Visible) */}
             {/* <button
              onClick={handleQuickExit}
              className="mr-4 px-3 py-1.5 bg-primary text-white rounded-full shadow-md hover:bg-primary-hover transition-colors flex items-center gap-1.5"
              aria-label="Quick Exit"
            >
              <LogOut size={16} />
              <span className="text-xs font-bold uppercase">Exit</span>
            </button> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-secondary hover:text-primary hover:bg-gray-50 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                 <button className="w-full text-center px-5 py-3 border border-secondary text-secondary font-medium rounded hover:bg-gray-50 transition-colors">
                  Donate/Support
                </button>
                {/* Visual redundancy for mobile menu, though icon is on top bar too */}
                 <button
                  onClick={handleQuickExit}
                  className="w-full text-center px-5 py-3 bg-primary text-white font-bold uppercase rounded hover:bg-primary-hover transition-colors"
                >
                  Quick Exit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
