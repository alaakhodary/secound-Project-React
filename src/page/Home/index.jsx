import React, { useState } from "react";
import { useRoutes } from "react-router-dom";

import { GlobalStyle } from "../../global/style";

import { router as routes } from "../../router";

import { themeContext } from "../../context/themeContext";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../global/theme.js";

const Home = () => {
  const [theme, setTheme] = useState(lightTheme);
  const router = useRoutes(routes);

  const ToggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider
        value={[theme, setTheme]}
        ToggleTheme={ToggleTheme}
      >
        <div>
          <GlobalStyle />
          {router}
        </div>
      </themeContext.Provider>
    </ThemeProvider>
  );
};

export default Home;
