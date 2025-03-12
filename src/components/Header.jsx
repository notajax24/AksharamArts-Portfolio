import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="z-50 bg-gradient-to-b to-[#0f2027] to-black relative">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center mx-auto md:mx-0 cursor-pointer "
            >
              <img src={logo} alt="Company Logo" className="h-20 w-25 p-1 " />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8 ">
            <div className="flex space-x-6 ">
              <button
                onClick={() => scrollToSection("home")}
                className="nav-link  hover:cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link  hover:cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="nav-link  hover:cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="nav-link  hover:cursor-pointer"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link  hover:cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden text-white bg-gray-500 shadow-lg">
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => scrollToSection("home")}
                    className="nav-link-mobile"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="nav-link-mobile"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="nav-link-mobile"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="nav-link-mobile"
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="nav-link-mobile"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

// Add these to your CSS or Tailwind components
const customStyles = `
  .nav-link {
    @apply px-3 py-2 text-primary hover:text-secondary transition-colors font-medium;
  }
  .nav-link-mobile {
    @apply block px-4 py-2 text-primary hover:bg-primary/10 rounded-lg;
  }
`;
