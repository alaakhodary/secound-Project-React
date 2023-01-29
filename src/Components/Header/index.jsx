import React from "react";

import Logo from "../../Components/Logo";
import Search from "../../Components/Search";

import logoImage from "../../asset/Logo.png";
import MenuPage from "../MenuPage";
import { DivHeader } from "./style";

const Header = () => {
  return (
    <DivHeader>
      <Logo logo={logoImage} />
      <Search />
      <MenuPage />
    </DivHeader>
  );
};

export default Header;
