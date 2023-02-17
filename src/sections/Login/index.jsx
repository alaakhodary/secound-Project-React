import React, { useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Footer";
import ToggleButton from "../../Components/ToggleButton";

import google from "../../asset/google.png";
import face from "../../asset/facebook.png";
import eye from "../../asset/eye.png";

import {
  DivBox,
  DivCheckbox,
  DivPassword,
  DivUserName,
  Heading,
  Input,
  InputCheck,
  Label,
  LabelPass,
  Remember,
  LogIn,
  DivOr,
  Or,
  DivGoogle,
  Buttongoogle,
  Imagegoogle,
  DivFacebook,
  Buttonface,
  Imageface,
  RigesterAccount,
  RigesterNow,
} from "./style";

const Login = () => {
  const navigate = useNavigate();
  const goToRigester = () => {
    navigate("/signup");
  };

  return (
    <>
      <div style={{ margin: "2rem" }}>
        <ToggleButton />
      </div>
      <DivBox>
        <Heading>Sign in</Heading>
        <form>
          <DivUserName>
            <Label htmlFor="email">Username</Label>
            <Input type="email" id="email" placeholder="Email or phone" />
          </DivUserName>
          <DivPassword>
            <Label htmlFor="Password">Password</Label>
            <LabelPass>Forgot Password</LabelPass>
          </DivPassword>
          <img
            src={eye}
            alt="eye"
            style={{
              position: "absolute",
              top: "13rem",
              right: "2.5rem",
              cursor: "pointer",
            }}
          />
          <Input type="password" id="Password" placeholder="Type here" />
          <DivCheckbox>
            <InputCheck type="checkbox" id="checkbox" />
            <Remember>Remember me</Remember>
          </DivCheckbox>
          <LogIn type="submit" value="Log In" IsSubmit={true} />
        </form>
        <DivOr>
          <hr />
          <Or>OR</Or>
        </DivOr>
        <DivGoogle>
          <Imagegoogle src={google} alt="googleImage" />
          <Buttongoogle>Continue with Google</Buttongoogle>
        </DivGoogle>
        <DivFacebook>
          <Imageface src={face} alt="FaceImage" />
          <Buttonface>Continue with Facebook</Buttonface>
        </DivFacebook>
        <RigesterAccount>
          <p>Don’t have an account?</p>
          <RigesterNow onClick={() => goToRigester()}>Register now</RigesterNow>
        </RigesterAccount>
      </DivBox>
      <Footer />
    </>
  );
};

export default Login;
