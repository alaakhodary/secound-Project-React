import React from "react";
import Logo from "../../Components/Logo";

import imgLogo from "../../asset/Logo.png";
import imgCarts from "../../asset/jwall.png";
import MenuPage from "../../Components/MenuPage";
import {
  ButtonBack,
  ButtonCheck,
  ButtonRAll,
  DetailsCart,
  DivButtonChec,
  DivCart,
  DivCoupon,
  DivFlexSaved,
  DivHeader,
  DivInputCopon,
  DivpaymentMethods,
  DivPayMethodImg,
  DivSaveFLater,
  DivSecoundCart,
  FlexDetailsCart,
  FlexDivCart,
  Flextotal,
  GridDetailsCart,
  HeadingCart,
  HeadingFeature,
  HrCopon,
  ImgButton,
  ImgPayment,
  InputCopon,
  InputSubmit,
  PaymentMethodsFeatures,
  PCoupon,
  Pprice,
  PpriceDis,
  PpriceTotal,
  PTax,
  Ptotal,
} from "./style";
import { Container } from "../../global/Container";
import Cart from "../../Components/Cart";
import arrow from "../../asset/arrows.png";
import AExpress from "../../asset/Amerecan.png";
import express from "../../asset/expres.png";
import payPal from "../../asset/payment.png";
import Visa from "../../asset/visa.png";
import Pay from "../../asset/pay.png";
import PaymentMFeatures from "../../Components/PaymentMFeatures";
import imglock from "../../asset/lock.png";
import carts from "../../asset/jwall.png";
import cart from "../../asset/blueCart.png";
import SavedForLater from "../../Components/SavedForLater";
import BoxDiscount from "../../Components/BoxDiscount";
import LastFooter from "../../Components/LastFooter";
const Carts = () => {
  return (
    <div>
      <DivHeader>
        <Logo logo={imgLogo} />
        <MenuPage />
      </DivHeader>
      <Container>
        <HeadingCart>My cart (3)</HeadingCart>
        <FlexDivCart>
          <DivCart>
            <Cart
              CartImg={imgCarts}
              name="T-shirts with multiple colors, for men and lady"
              details="Size: medium, Color: blue,  Material: Plastic
            Seller: Artel Market"
              price="$78.99"
            />
            <Cart
              CartImg={imgCarts}
              name="T-shirts with multiple colors, for men and lady"
              details="Size: medium, Color: blue,  Material: Plastic
            Seller: Artel Market"
              price="$78.99"
            />
            <Cart
              CartImg={imgCarts}
              name="T-shirts with multiple colors, for men and lady"
              details="Size: medium, Color: blue,  Material: Plastic
            Seller: Artel Market"
              price="$78.99"
            />
            <DivSecoundCart>
              <div>
                <ImgButton src={arrow} alt="arrow" />
                <ButtonBack>Back to shop</ButtonBack>
              </div>
              <div>
                <ButtonRAll>Remove all</ButtonRAll>
              </div>
            </DivSecoundCart>
          </DivCart>
          <div>
            <DivCoupon>
              <PCoupon>Have a coupon?</PCoupon>
              <DivInputCopon>
                <InputCopon type="text" id="" placeholder="Add coupon" />
                <InputSubmit type="submit" value="Apply" />
              </DivInputCopon>
            </DivCoupon>
            <DetailsCart>
              <GridDetailsCart>
                <FlexDetailsCart>
                  <Pprice>Subtotal:</Pprice>
                  <Pprice>$1403.97</Pprice>
                </FlexDetailsCart>
                <FlexDetailsCart>
                  <Pprice>Discount:</Pprice>
                  <PpriceDis>- $60.00</PpriceDis>
                </FlexDetailsCart>
                <FlexDetailsCart>
                  <Pprice>Tax:</Pprice>
                  <PTax>+ $14.00</PTax>
                </FlexDetailsCart>
              </GridDetailsCart>
              <HrCopon />
              <Flextotal>
                <Ptotal>Total:</Ptotal>
                <PpriceTotal>$1357.97</PpriceTotal>
              </Flextotal>
              <DivButtonChec>
                <ButtonCheck>Checkout</ButtonCheck>
              </DivButtonChec>
              <DivpaymentMethods>
                <DivPayMethodImg>
                  <ImgPayment src={AExpress} alt="AExpress" />
                </DivPayMethodImg>
                <DivPayMethodImg>
                  <ImgPayment src={express} alt="express" />
                </DivPayMethodImg>
                <DivPayMethodImg>
                  <ImgPayment src={payPal} alt="payPal" />
                </DivPayMethodImg>
                <DivPayMethodImg>
                  <ImgPayment src={Visa} alt="Visa" />
                </DivPayMethodImg>
                <DivPayMethodImg>
                  <ImgPayment src={Pay} alt="Pay" />
                </DivPayMethodImg>
              </DivpaymentMethods>
            </DetailsCart>
          </div>
        </FlexDivCart>
        <PaymentMethodsFeatures>
          <PaymentMFeatures
            FeaturesImg={imglock}
            name="Secure payment"
            disc="Have you ever finally just "
          />
          <PaymentMFeatures
            FeaturesImg={imglock}
            name="Secure payment"
            disc="Have you ever finally just "
          />
          <PaymentMFeatures
            FeaturesImg={imglock}
            name="Secure payment"
            disc="Have you ever finally just "
          />
        </PaymentMethodsFeatures>
        <DivSaveFLater>
          <HeadingFeature>Saved for later</HeadingFeature>
          <DivFlexSaved>
            <SavedForLater
              img={carts}
              price="$99.50"
              details="GoPro HERO6 4K Action Camera - Black"
              ImgCart={cart}
            />
            <SavedForLater
              img={carts}
              price="$99.50"
              details="GoPro HERO6 4K Action Camera - Black"
              ImgCart={cart}
            />
            <SavedForLater
              img={carts}
              price="$99.50"
              details="GoPro HERO6 4K Action Camera - Black"
              ImgCart={cart}
            />
            <SavedForLater
              img={carts}
              price="$99.50"
              details="GoPro HERO6 4K Action Camera - Black"
              ImgCart={cart}
            />
            <SavedForLater
              img={carts}
              price="$99.50"
              details="GoPro HERO6 4K Action Camera - Black"
              ImgCart={cart}
            />
          </DivFlexSaved>
        </DivSaveFLater>
        <BoxDiscount
          name="Super discount on more than 100 USD"
          description="Have you ever finally just write dummy info"
        />
      </Container>
      <LastFooter />
    </div>
  );
};

export default Carts;
