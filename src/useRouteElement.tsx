import { useRoutes } from "react-router-dom";
import AddProduct from "./components/Admin/AddProduct";
import ProductList from "./components/Admin/ProductList";
import { path } from "./constants/path";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/Home";

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      element: <Home />,
      path: path.home,
    },
    {
      element: <AdminLayout />,
      children: [
        {
          element: <ProductList />,
          path: path.product_list,
        },
        {
          element: <AddProduct />,
          path: path.add_product,
        },
      ],
    },
  ]);
  return routeElement;
}
