import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";

import { InputCheck, Label } from "../Login/style";
import {
  Agree,
  Divall,
  DivEmail,
  Divfhone,
  Divfhoneflex,
  DivName,
  DivPass,
  DivRePass,
  HaveAnAccount,
  Headings,
  InputEmail,
  InputName,
  InputPass,
  InputRePass,
  InputRigerster,
  InputSurName,
  PAgree,
  PHaveAnAccount,
  Rigester,
  Selectfhone,
  SelectInputfhone,
  SpanAgree,
  SpanLogin,
  DivBoxs,
} from "./style";

const Signup = () => {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/");
  };
  return (
    <>
      <DivBoxs>
        <Headings>Register</Headings>
        <form>
          <Divall>
            <DivName>
              <Label htmlFor="name">Name</Label>
              <InputName type="text" id="name" placeholder="Type here" />
            </DivName>
            <DivName>
              <Label htmlFor="surname">Surname</Label>
              <InputSurName type="text" id="surname" placeholder="Type here" />
            </DivName>
          </Divall>
          <DivEmail>
            <Label htmlFor="email">Your e-mail </Label>
            <InputEmail
              type="email"
              id="email"
              placeholder="example@mail.com"
            />
          </DivEmail>
          <Divfhone>
            <Label htmlFor="code">Phone</Label>
            <Divfhoneflex>
              <Selectfhone name="code" id="code">
                <option value="970">PS +970</option>
                <option value="972">IS +972</option>
                <option value="962">JD +962</option>
              </Selectfhone>
              <SelectInputfhone
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                placeholder="00-000-00-00"
              />
            </Divfhoneflex>
          </Divfhone>
          <DivPass>
            <Label htmlFor="Password">Password</Label>
            <InputPass
              type="password"
              id="password"
              placeholder="At least 6 characters."
            />
          </DivPass>
          <DivRePass>
            <Label htmlFor="RepeatPassword">Repeat password</Label>
            <InputRePass
              type="password"
              id="RepeatPassword"
              placeholder="Type here"
            />
          </DivRePass>
          <Rigester>
            <InputRigerster type="submit" value="Register now" />
          </Rigester>
          <Agree>
            <InputCheck type="checkbox" id="checkbox" />
            <PAgree>
              I agree with <SpanAgree>Terms and Conditions</SpanAgree>
            </PAgree>
          </Agree>
        </form>
        <hr />
        <HaveAnAccount>
          <PHaveAnAccount>Already have an accaunt?</PHaveAnAccount>
          <SpanLogin onClick={() => goToLoginPage()}>Logn in</SpanLogin>
        </HaveAnAccount>
      </DivBoxs>
      <Footer />
    </>
  );
};

export default Signup;
