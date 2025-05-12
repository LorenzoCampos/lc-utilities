const Home = () => {
  return (
    <>
      <section className="page-container h-min-screen pt-32 pb-20 bg-gradient-to-r from-sky-600 to-sky-900 rounded-lg">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center gap-15">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold md:text-6xl mb-6">
              LC Utilities
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Esta es una pagina dedicada al facil acceso a recursos del
              desarrollo backend como configuracion de apache, .env,
              configuracion y comandos de laravel, etc.
              <br />
              Solo en LC(Lorenzo Campos) Utilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/comandos">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl text-black font-bold mb-2">
                  Configuracion de Apache
                </h2>
                <p className="text-gray-700">
                  Aprende a configurar Apache para tu entorno de desarrollo.
                </p>
              </div>
            </a>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl text-black font-bold mb-2">
                Configuracion de .env
              </h2>
              <p className="text-gray-700">
                Descubre cómo gestionar tus variables de entorno en Laravel.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl text-black font-bold mb-2">
                Comandos de Laravel
              </h2>
              <p className="text-gray-700">
                Encuentra una lista de comandos útiles para Laravel.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl text-black font-bold mb-2">
                Configuracion de Nginx
              </h2>
              <p className="text-gray-700">
                Aprende a configurar Nginx para tu entorno de desarrollo.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl text-black font-bold mb-2">
                Configuracion de Nginx
              </h2>
              <p className="text-gray-700">
                Aprende a configurar Nginx para tu entorno de desarrollo.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              {/* Aqui esta la redireccion de la card hacie el apartado completo */}

              <h2 className="text-xl text-black font-bold mb-2">
                Configuracion de Nginx
              </h2>
              <p className="text-gray-700">
                Aprende a configurar Nginx para tu entorno de desarrollo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
