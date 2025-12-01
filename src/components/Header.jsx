import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Jobs", href: "#jobs" },
    { name: "Resources", href: "#resources" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="h-12 w-12 bg-center">
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-custom hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-custom hover:text-primary transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button size="lg" className="bg-primary hover:bg-primary/90 mt-4">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
