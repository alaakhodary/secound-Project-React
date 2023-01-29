import Home from "../sections/Home";
import LogIn from "../sections/Login";
import Signup from "../sections/Signup";

export const router = [
  { index: true, element: <LogIn /> },
  { path: "signup", element: <Signup /> },
  { path: "home", element: <Home /> },
  { path: "*", element: <h1>page not found 404</h1> },
];
