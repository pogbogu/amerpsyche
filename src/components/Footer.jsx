import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-berry bg-linear-br text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              AmerPSyche<span className="text-primary">.</span>
            </div>
            <p className="text-light mb-6 max-w-md">
              Providing compassionate mental health care with professionalism
              and empathy. Your journey to wellness starts here.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Services",
                "About",
                "Jobs",
                "Resources",
                "FAQs",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-light hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-light">
              <p>123 Wellness Street</p>
              <p>New York, NY 10001</p>
              <p>hello@mindcare.com</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-custom mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light text-sm mb-4 md:mb-0">
            © 2024 MindCare Clinic. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-light text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-primary" /> for
              better mental health
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
