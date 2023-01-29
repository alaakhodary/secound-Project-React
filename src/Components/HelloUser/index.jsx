import React from "react";
import {
  Button,
  ButtonLogin,
  DivBoxUser,
  DivFlex,
  DivImgUser,
  ImgUser,
  PUser,
} from "./style";

const HelloUser = ({ imgUser, title }) => {
  return (
    <DivBoxUser>
      <DivFlex>
        <DivImgUser>
          <ImgUser src={imgUser} alt="imageUser" />
        </DivImgUser>
        <div>
          <PUser>{title}</PUser>
        </div>
      </DivFlex>
      <div>
        <Button>Join now</Button>
      </div>
      <div>
        <ButtonLogin>Log in</ButtonLogin>
      </div>
    </DivBoxUser>
  );
};

export default HelloUser;
