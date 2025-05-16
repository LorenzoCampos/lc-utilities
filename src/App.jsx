import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Principal
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import Comandos from "@/pages/Comandos";
import NotFound from "@/pages/NotFound";
import Apache from "@/pages/Apache";
import Env from "@/pages/Env";
import LaravelCommands from "@/pages/LaravelCommands";
import Git from "@/pages/Git";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/comandos", element: <Comandos /> },
      { path: "/apache", element: <Apache /> },
      { path: "/env", element: <Env /> },
      { path: "/laravel-commands", element: <LaravelCommands /> },
      { path: "/git", element: <Git /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
