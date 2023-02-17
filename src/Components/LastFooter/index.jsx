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
  HeadingMainTitle,
  Pecommerce,
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
          <HeadingMainTitle>About</HeadingMainTitle>
          <PItem>About Us</PItem>
          <PItem>About Us</PItem>
          <PItem>About Us</PItem>
          <PItem>About Us</PItem>
        </DivlogoGrid>

        <DivlogoGrid>
          <HeadingMainTitle>Partnership</HeadingMainTitle>
          <PItem>About Us</PItem>
          <PItem>Register</PItem>
          <PItem>About Us</PItem>
          <PItem>Register</PItem>
        </DivlogoGrid>

        <DivlogoGrid>
          <HeadingMainTitle>Information</HeadingMainTitle>
          <PItem>Find store</PItem>
          <PItem>About Us</PItem>
          <PItem>About Us</PItem>
          <PItem>Find store</PItem>
        </DivlogoGrid>

        <DivlogoGrid>
          <HeadingMainTitle>For users</HeadingMainTitle>
          <PItem>About Us</PItem>
          <PItem>Find store</PItem>
          <PItem>Find store</PItem>
          <PItem>About Us</PItem>
        </DivlogoGrid>

        <DivlogoGrid>
          <HeadingMainTitle>Get app</HeadingMainTitle>
          <img src={appStore} alt="appStore" />
          <img src={googleStore} alt="googleStore" />
        </DivlogoGrid>
      </DivlogoFlex>
      <DivFinalFooter>
        <Pecommerce>© 2023 Ecommerce. </Pecommerce>
        <SelectLang id="Lang">
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </SelectLang>
      </DivFinalFooter>
    </DivAllFooter>
  );
};

export default LastFooter;
