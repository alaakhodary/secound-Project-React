import React, { lazy, Suspense, useEffect, useState } from "react";

import { GlobalStyle } from "../../global/style";

import { themeContext } from "../../context/themeContext";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../global/theme.js";
import { useAuthContext } from "../../context/AuthorizationContext";
import { Navigate, Route, Routes } from "react-router-dom";

const LogIn = lazy(() => import("../../sections/Login"));
const Signup = lazy(() => import("../../sections/Signup"));
const MainPage = lazy(() => import("../../sections/MainPage"));
const ListProduct = lazy(() => import("../../sections/ListProduct/index"));
const ProductPage = lazy(() => import("../../sections/ProductPage"));
const Carts = lazy(() => import("../../sections/Carts"));

const Home = () => {
  const [theme, setTheme] = useState(lightTheme);
  const { isAuthorized, setToken, setisAuthorized } = useAuthContext();

  const ToggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  useEffect(() => {
    localStorage.getItem("Theme") === "dark"
      ? setTheme(darkTheme)
      : setTheme(lightTheme);

    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setisAuthorized(true);
    }
  }, [setToken, setisAuthorized]);

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider
        value={[theme, setTheme]}
        ToggleTheme={ToggleTheme}
      >
        <GlobalStyle />
        <Suspense
          fallback={
            <div
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "gray",
              }}
            >
              <h1>loading...</h1>
            </div>
          }
        >
          <Routes>
            <Route index element={<Navigate to="Login" />} />
            <Route
              path="/login"
              element={isAuthorized ? <Navigate to="/mainpage" /> : <LogIn />}
            />
            <Route
              path="/signup"
              element={isAuthorized ? <Navigate to="/mainpage" /> : <Signup />}
            />
            <Route
              path="/mainpage"
              element={isAuthorized ? <MainPage /> : <Navigate to="/Login" />}
            />
            <Route
              path="/listproduct"
              element={
                isAuthorized ? <ListProduct /> : <Navigate to="/Login" />
              }
            />
            <Route
              path="/productPage"
              element={
                isAuthorized ? <ProductPage /> : <Navigate to="/Login" />
              }
            />
            <Route
              path="/carts"
              element={isAuthorized ? <Carts /> : <Navigate to="/Login" />}
            />
          </Routes>
        </Suspense>
      </themeContext.Provider>
    </ThemeProvider>
  );
};

export default Home;
