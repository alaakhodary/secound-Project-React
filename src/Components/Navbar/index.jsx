import React from "react";

import navs from "../../asset/nav.png";
import { DivAll, DivNav, DivSelect, LItem, SecletItem } from "./style";

const Navbar = () => {
  return (
    <DivAll>
      <DivNav>
        <LItem>
          <img src={navs} alt="" style={{ marginRight: "0.5rem" }} />
          All category
        </LItem>
        <LItem>Hot offers</LItem>
        <LItem>Gift boxes</LItem>
        <LItem>Projects</LItem>
        <LItem>Menu item</LItem>
        <SecletItem id="">
          <option value="1">Help</option>
        </SecletItem>
      </DivNav>
      <DivSelect>
        <div>
          <SecletItem id="">
            <option value="1">English, USD</option>
          </SecletItem>
        </div>
        <div>
          <SecletItem id="">
            <option value="1">Ship to</option>
          </SecletItem>
        </div>
      </DivSelect>
    </DivAll>
  );
};

export default Navbar;
