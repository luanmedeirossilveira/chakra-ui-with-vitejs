import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

export const App = () => (
  <RouterProvider router={router} />
  )
