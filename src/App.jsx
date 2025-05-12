import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Principal
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import Comandos from "@/pages/Comandos";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/comandos", element: <Comandos /> },
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
