import React from "react";

import persons from "../../asset/person.png";
import chats from "../../asset/chat.png";
import orders from "../../asset/love.png";
import carts from "../../asset/cart.png";
import { DivAllMenu, DivCarts, DivChat, DivOrder, DivPerson } from "./style";

// import ToggleButton from "../../Components/ToggleButton";

const MenuPage = () => {
  return (
    <DivAllMenu>
      <DivPerson>
        <img src={persons} alt="persons" />
        <p>Profile</p>
      </DivPerson>
      <DivChat>
        <img src={chats} alt="chats" />
        <p>Message</p>
      </DivChat>
      <DivOrder>
        <img src={orders} alt="orders" />
        <p>Orders</p>
      </DivOrder>
      <DivCarts>
        <img src={carts} alt="carts" />
        <p>My cart</p>
      </DivCarts>
      {/* <ToggleButton /> */}
    </DivAllMenu>
  );
};

export default MenuPage;
