import React from "react";

import Amirican from "../../asset/Amerecan.png";
import expres from "../../asset/expres.png";
import payPal from "../../asset/payment.png";
import visa from "../../asset/visa.png";

import {
  DivallFooter,
  DivDitails,
  DivImage,
  DivParagraph,
  DivPayment,
  ImageBorder1,
  ImageBorder2,
  ImageBorder3,
  ImageBorder4,
} from "./style";

const Footer = () => {
  return (
    <DivallFooter>
      <DivPayment>
        <DivImage>
          <ImageBorder1 src={Amirican} alt="Amirican" />
        </DivImage>
        <DivImage>
          <ImageBorder2 src={expres} alt="expres" />
        </DivImage>
        <DivImage>
          <ImageBorder3 src={payPal} alt="payPal" />
        </DivImage>
        <DivImage>
          <ImageBorder4 src={visa} alt="visa" />
        </DivImage>
      </DivPayment>
      <DivDitails>
        <DivParagraph>Support</DivParagraph>
        <DivParagraph>Privacy & Cookies</DivParagraph>
        <DivParagraph>Accessibility</DivParagraph>
      </DivDitails>
    </DivallFooter>
  );
};

export default Footer;
