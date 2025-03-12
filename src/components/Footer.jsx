import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b to-[#0f2027] to-black text-gray-100 ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Aksharam Art" className="h-12 w-12 mr-3" />
              <span className="text-2xl font-bold text-secondary">
                Aksharam Art
              </span>
            </div>
            <p className="text-sm">
              Crafting exceptional signage solutions with precision and
              creativity since 2015
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-secondary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary mb-4">Reach Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 mr-3 mt-1 text-secondary" />
                <span>
                  Shop no. 9, Pratik Arcade, <br /> Near bytco Point Nashik Road
                  , <br /> Nashik - 422101
                </span>
              </div>
              <div className="flex items-center">
                <FaPhone className="h-5 w-5 mr-3 text-secondary" />
                <a href="tel:+9881810589" className="hover:text-secondary">
                  +91 9881810589
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="h-5 w-5 mr-3 text-secondary" />
                <a
                  href="mailto:aksharamgraphics14@gmail.com"
                  className="hover:text-secondary"
                >
                  aksharamgraphics14@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors"
              >
                <FaFacebook className="h-6 w-6 text-secondary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors"
              >
                <FaInstagram className="h-6 w-6 text-secondary" />
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors"
              >
                <FaWhatsapp className="h-6 w-6 text-secondary" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-primary  mt-10">
          Developed by{" "}
          <a
            href="https://instagram.com/ajax.pvt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary/80 transition-colors"
          >
            Ajay Jachak
          </a>
        </div>
        {/* Copyright */}

        <div className="border-t border-secondary/20 mt-12 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Aksharam Art. All rights reserved.
            <br />
            <a href="#" className="hover:text-secondary">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-secondary">
              {" "}
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
