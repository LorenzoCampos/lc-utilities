import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="page-container bg-gradient-to-r from-sky-600 to-sky-900 not-last:gap-5 min-h-[94vh] p-6 flex flex-col items-center justify-center text-center ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold md:text-6xl mb-6">LC Utilities</h1>
          <p className="text-lg md:text-2xl mb-6">
            Esta es una pagina dedicada al facil acceso a recursos del
            desarrollo backend como configuracion de apache, .env, configuracion
            y comandos de laravel, etc.
            <br />
            Solo en LC(Lorenzo Campos) Utilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <Link to="/apache">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl text-black font-bold mb-2">
                Configuracion de Apache
              </h2>
              <p className="text-gray-700">
                Aprende a configurar Apache para tu entorno de desarrollo.
              </p>
            </div>
          </Link>
          <Link to="/env">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl text-black font-bold mb-2">
                Configuracion de .env
              </h2>
              <p className="text-gray-700">
                Descubre cómo gestionar tus variables de entorno en Laravel.
              </p>
            </div>
          </Link>
          <Link to="/laravel-commands">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl text-black font-bold mb-2">
                Comandos de Laravel
              </h2>
              <p className="text-gray-700">
                Encuentra una lista de comandos útiles para Laravel.
              </p>
            </div>
          </Link>
          <Link to="/nginx">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl text-black font-bold mb-2">
                Configuracion de Nginx
              </h2>
              <p className="text-gray-700">
                Aprende a configurar Nginx para tu entorno de desarrollo.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;