import Carts from "../sections/Carts";
import Home from "../sections/Home";
import ListProduct from "../sections/ListProduct";
import LogIn from "../sections/Login";
import ProductPage from "../sections/ProductPage";
import Signup from "../sections/Signup";

export const router = [
  { index: true, element: <LogIn /> },
  { path: "signup", element: <Signup /> },
  { path: "home", element: <Home /> },
  { path: "products", element: <ProductPage /> },
  { path: "carts", element: <Carts /> },
  { path: "listProduct", element: <ListProduct /> },
  { path: "*", element: <h1>page not found 404</h1> },
];
