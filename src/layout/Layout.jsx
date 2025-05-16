
import { Outlet} from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";

const Layout = () => {
  const logo = (
    <div className="flex items-center gap-2">
      <img
        src="/assets/img/rub-soft-icon.png"
        alt="lc utilities"
        className="h-8"
      />
      <span className="text-lg font-semibold">LC Utilities</span>
    </div>
  );

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Comandos", href: "/comandos" },
  ];

  return (
    <div>
      {/* Navbar reutilizable */}
      <Navbar logo={logo} links={links} />

      {/* Contenido de la página */}
        <Outlet />
    </div>
  );
};

export default Layout;
