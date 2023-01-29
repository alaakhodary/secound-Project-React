import React from "react";
import { useRoutes } from "react-router-dom";

import { GlobalStyle } from "../../global/style";

import { router as routes } from "../../router";

const Home = () => {
  const router = useRoutes(routes);
  return (
    <div>
      <GlobalStyle />
      {router}
    </div>
  );
};

export default Home;
