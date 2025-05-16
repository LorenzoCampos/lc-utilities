import { useState } from "react";
import PropTypes from "prop-types";
import { Menu, X } from "lucide-react";

const Navbar = ({ logo, links, actions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-sky-950 text-white shadow h-[6vh]">
      <div className="w-full mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Links */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="text-lg font-semibold">
            {typeof logo === "string" ? <span>{logo}</span> : logo}
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex gap-4">
            {links.map(({ label, href }, idx) => (
              <a key={idx} href={href} className="hover:underline">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Acciones */}
        <div className="hidden sm:flex gap-2">{actions}</div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`sm:hidden px-4 pb-4 space-y-2 ${
            isOpen ? "animate-slide-down" : "animate-slide-up"
          }`}
        >
          {links.map(({ label, href }, idx) => (
            <a
              key={idx}
              href={href}
              className="mt-2 block hover:underline"
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en un enlace
            >
              {label}
            </a>
          ))}
          {actions && (
            <div
              className="mt-2 flex flex-col gap-2"
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en las acciones
            >
              {actions}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  actions: PropTypes.node,
};

export default Navbar;
