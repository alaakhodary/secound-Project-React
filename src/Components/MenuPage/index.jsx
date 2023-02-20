import React from "react";

import persons from "../../asset/person.png";
import chats from "../../asset/chat.png";
import orders from "../../asset/love.png";
import carts from "../../asset/cart.png";
import { DivAllMenu, DivCarts, DivChat, DivOrder, DivPerson } from "./style";
import ToggleButton from "../ToggleButton";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthorizationContext";

const MenuPage = () => {
  const { logout } = useAuthContext();
  return (
    <DivAllMenu>
      <DivPerson>
        <NavLink to="/mainPage">
          <img src={persons} alt="persons" />
        </NavLink>
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
        <NavLink to="/carts">
          <img src={carts} alt="carts" />
        </NavLink>
        <p>My cart</p>
      </DivCarts>
      <ToggleButton />
      <button
        onClick={logout}
        style={{ padding: 15, borderRadius: "10px", border: "none" }}
      >
        log out
      </button>
    </DivAllMenu>
  );
};

export default MenuPage;
