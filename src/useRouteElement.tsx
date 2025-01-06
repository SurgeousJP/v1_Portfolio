import { useRoutes } from "react-router-dom";
import { path } from "./constants/path";
import Home from "./pages/Home";

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      element: <Home />,
      path: path.home,
    },
  ]);
  return routeElement;
}
