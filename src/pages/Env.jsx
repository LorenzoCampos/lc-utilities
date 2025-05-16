import { Link } from "react-router-dom";

const Env = () => {
  return (
    <>
      <div className="page-container bg-gradient-to-r from-sky-600 to-sky-900 grid grid-cols-10 grid-rows-1 gap-2 min-h-[94vh] p-4">
        <div className="flex flex-col gap-4 col-start-1 col-end-2">
            <h3>section</h3>
            <p>section</p>
            <p>section</p>
            <p>section</p>
            <p>section</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center col-start-3 col-end-10">
          <h1 className=" font-bold mb-3">Comandos Necesarios y comunes en un proyecto laravel 10</h1>
        </div>
        
      </div>
    </>
  );
};

export default Env;
