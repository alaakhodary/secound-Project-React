import React from "react";
import Logo from "../../Components/Logo";

import logoImages from "../../asset/Logo.png";
import faceImg from "../../asset/facebooks.png";
import twitterImg from "../../asset/twitter.png";
import linkedIn from "../../asset/linkedIn.png";
import instegramImg from "../../asset/Instegram.png";
import YoutubeImg from "../../asset/Youtube.png";
import appStore from "../../asset/appStore.png";
import googleStore from "../../asset/googleApp.png";

import {
  DivAllFooter,
  DivFinalFooter,
  Divlogo,
  DivlogoFlex,
  DivlogoGrid,
  DivlogoSoial,
  PItem,
  PLogo,
  SelectLang,
} from "./style";

const LastFooter = () => {
  return (
    <DivAllFooter>
      <DivlogoFlex>
        <Divlogo>
          <Logo logo={logoImages} />
          <PLogo>
            Best information about the company gies here but now lorem ipsum is
          </PLogo>
          <DivlogoSoial>
            <img src={faceImg} alt="faseImg" />
            <img src={twitterImg} alt="twitterImg" />
            <img src={linkedIn} alt="linkedIn" />
            <img src={instegramImg} alt="instegramImg" />
            <img src={YoutubeImg} alt="YoutubeImg" />
          </DivlogoSoial>
        </Divlogo>

        <DivlogoGrid>
          <h3>About</h3>
          <PItem>About Us</PItem>
          <PItem>About Us</PItem>
          <PItem>About Us</PItem>
          <PItem>About Us</PItem>
        </DivlogoGrid>

        <DivlogoGrid>
          <h3>Partnership</h3>
          <PItem>About Us</PItem>
          <PItem>Register</PItem>
          <PItem>About Us</PItem>
          <PItem>Register</PItem>
        </DivlogoGrid>

        <DivlogoGrid>
          <h3>Information</h3>
          <PItem>Find store</PItem>
          <PItem>About Us</PItem>
          <PItem>About Us</PItem>
          <PItem>Find store</PItem>
        </DivlogoGrid>

        <DivlogoGrid>
          <h3>For users</h3>
          <PItem>About Us</PItem>
          <PItem>Find store</PItem>
          <PItem>Find store</PItem>
          <PItem>About Us</PItem>
        </DivlogoGrid>

        <DivlogoGrid>
          <h3>Get app</h3>
          <img src={appStore} alt="appStore" />
          <img src={googleStore} alt="googleStore" />
        </DivlogoGrid>
      </DivlogoFlex>
      <DivFinalFooter>
        <p>© 2023 Ecommerce. </p>
        <SelectLang id="Lang">
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </SelectLang>
      </DivFinalFooter>
    </DivAllFooter>
  );
};

export default LastFooter;
