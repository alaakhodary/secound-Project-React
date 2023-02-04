import React from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Path from "../../Components/Path";
import { Container } from "../../global/Container";
import {
  ButtonInquiry,
  ButtonSellers,
  DivAllImg,
  DivAllLang,
  DivBorderL,
  Divboxgrid,
  DivCFlex,
  DivClothes,
  DivContent,
  DivFlex,
  DivFlexContent,
  DivFlexDetails,
  DivFlexProduct,
  DivFterms,
  DivImgClothes,
  DivImgR,
  DivImgTrue,
  DivInfo,
  DivInfoP,
  DivInformation,
  DivLang,
  DivLastFlex,
  DivLastFlexP,
  DivLoveFlex,
  DivLoveP,
  DivMayFlexLike,
  DivMayLike,
  DivMT,
  Divon,
  DivPprice,
  DivPpriceSecound,
  DivPpricethird,
  DivRelatedProducts,
  DivRFlex,
  DivSales,
  DivSecFlexContent,
  DivThree,
  DivTow,
  HeadingLike,
  HeadingName,
  HeadingRProducts,
  Img,
  ImgTrue,
  InfoPsec,
  P,
  PContent,
  PContentSide,
  Pdetails,
} from "./style";

import TShirt from "../../asset/TShirt.png";
import TSHIMG1 from "../../asset/T1.png";
import TSHIMG2 from "../../asset/T2.png";
import TSHIMG3 from "../../asset/T3.png";
import TSHIMG4 from "../../asset/T4.png";
import TSHIMG5 from "../../asset/T5.png";
import TSHIMG6 from "../../asset/T6.png";
import True from "../../asset/true.png";
import fillstars from "../../asset/fillStar.png";
import star from "../../asset/start.png";
import dot from "../../asset/Dot.png";
import chat from "../../asset/chat1.png";
import carts from "../../asset/carts.png";
import RImg from "../../asset/R.png";
import german from "../../asset/germany.png";
import securites from "../../asset/security.png";
import globals from "../../asset/global.png";
import love from "../../asset/loves.png";
import grayTrue from "../../asset/trueGray.png";
import jakets from "../../asset/Jaket1.png";
import JwallImg from "../../asset/jwall.png";

import MayLike from "../../Components/MayLike";
import RelatedProducts from "../../Components/RelatedProducts";
import BoxDiscount from "../../Components/BoxDiscount";

import LastFooter from "../../Components/LastFooter";

const ProductPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Container>
        <Path />
        <DivClothes>
          <Divon>
            <DivImgClothes>
              <img src={TShirt} alt="TShirt" />
            </DivImgClothes>
            <DivAllImg>
              <Img src={TSHIMG1} alt="img" />
              <Img src={TSHIMG2} alt="img" />
              <Img src={TSHIMG3} alt="img" />
              <Img src={TSHIMG4} alt="img" />
              <Img src={TSHIMG5} alt="img" />
              <Img src={TSHIMG6} alt="img" />
            </DivAllImg>
          </Divon>
          <DivTow>
            <DivFlex>
              <DivImgTrue src={True} alt="true" />
              <P>In stock</P>
            </DivFlex>
            <HeadingName>
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </HeadingName>
            <DivFlexDetails>
              <div>
                <img src={fillstars} alt="fillstars" />
                <img src={fillstars} alt="fillstars" />
                <img src={fillstars} alt="fillstars" />
                <img src={fillstars} alt="fillstars" />
                <img src={star} alt="star" />
              </div>
              <p style={{ color: "#FF9017" }}>9.3</p>
              <img src={dot} alt="dot" />
              <img src={chat} alt="chat" />
              <p style={{ color: "#787A80" }}>32 reviews</p>
              <img src={dot} alt="dot" />
              <img src={carts} alt="carts" />
              <p style={{ color: "#787A80" }}>154 sold</p>
            </DivFlexDetails>
            <DivSales>
              <div>
                <DivPprice>$98.00</DivPprice>
                <DivPpricethird>50-100 pcs</DivPpricethird>
              </div>
              <DivBorderL>
                <DivPpriceSecound>$90.00</DivPpriceSecound>
                <DivPpricethird>100-700 pcs</DivPpricethird>
              </DivBorderL>
              <DivBorderL>
                <DivPpriceSecound>$78.00</DivPpriceSecound>
                <DivPpricethird>700+ pcs</DivPpricethird>
              </DivBorderL>
            </DivSales>
            <DivFlexContent>
              <PContent>Price: </PContent>
              <PContentSide>Negotiable</PContentSide>
            </DivFlexContent>
            <hr style={{ color: "#E0E0E0", marginTop: "1rem" }} />
            <DivMT>
              <DivSecFlexContent>
                <PContent>Price: </PContent>
                <PContentSide>Negotiable</PContentSide>
              </DivSecFlexContent>
              <DivSecFlexContent>
                <PContent>Price: </PContent>
                <PContentSide>Negotiable</PContentSide>
              </DivSecFlexContent>
              <DivSecFlexContent>
                <PContent>Price: </PContent>
                <PContentSide>Negotiable</PContentSide>
              </DivSecFlexContent>
            </DivMT>
            <hr style={{ color: "#E0E0E0", marginTop: "1rem" }} />
            <DivMT>
              <DivSecFlexContent>
                <PContent>Customization: </PContent>
                <PContentSide>Customized logo</PContentSide>
              </DivSecFlexContent>
              <DivSecFlexContent>
                <PContent>Warranty: </PContent>
                <PContentSide>2 years full warranty </PContentSide>
              </DivSecFlexContent>
              <DivSecFlexContent>
                <PContent>Protection: </PContent>
                <PContentSide>Refund Policy</PContentSide>
              </DivSecFlexContent>
            </DivMT>
            <hr style={{ color: "#E0E0E0", marginTop: "1rem" }} />
          </DivTow>
          <div>
            <DivThree>
              <DivRFlex>
                <DivImgR>
                  <img src={RImg} alt="R" />
                </DivImgR>
                <div>
                  <p>Supplier</p>
                  <p>Guanjoi Trading LLC</p>
                </div>
              </DivRFlex>
              <hr style={{ color: "#E0E0E0", marginTop: "1rem" }} />
              <DivAllLang>
                <DivLang>
                  <img src={german} alt="german" />
                  <p>Germany, Berlin</p>
                </DivLang>
                <DivLang>
                  <img src={securites} alt="securites" />
                  <p>Verified Seller</p>
                </DivLang>
                <DivLang>
                  <img src={globals} alt="global" />
                  <p>Worldwide shipping</p>
                </DivLang>
              </DivAllLang>
              <ButtonInquiry>Send inquiry</ButtonInquiry>
              <ButtonSellers>Seller’s profile</ButtonSellers>
            </DivThree>
            <DivLoveFlex>
              <img src={love} alt="love" />
              <DivLoveP>Save for later</DivLoveP>
            </DivLoveFlex>
          </div>
        </DivClothes>
        <DivMayFlexLike>
          <DivContent>
            <DivFterms>
              <p>Description</p>
              <p>Reviews</p>
              <p>Shipping</p>
              <p>About company</p>
            </DivFterms>
            <Pdetails>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </Pdetails>
            <DivInfo>
              <DivInformation>
                <DivInfoP>Model</DivInfoP>
                <InfoPsec>#8786867</InfoPsec>
              </DivInformation>
              <DivInformation>
                <DivInfoP>Style</DivInfoP>
                <InfoPsec>Classic style</InfoPsec>
              </DivInformation>
              <DivInformation>
                <DivInfoP>Certificate</DivInfoP>
                <InfoPsec>ISO-898921212</InfoPsec>
              </DivInformation>
              <DivInformation>
                <DivInfoP>Size</DivInfoP>
                <InfoPsec>34mm x 450mm x 19mm</InfoPsec>
              </DivInformation>
              <DivInformation>
                <DivInfoP>Memory</DivInfoP>
                <InfoPsec>36GB RAM</InfoPsec>
              </DivInformation>
            </DivInfo>
            <DivCFlex>
              <DivLastFlex>
                <ImgTrue src={grayTrue} alt="grayTrue" />
                <DivLastFlexP>Some great feature name here</DivLastFlexP>
              </DivLastFlex>
              <DivLastFlex>
                <ImgTrue src={grayTrue} alt="grayTrue" />
                <DivLastFlexP>Some great feature name here</DivLastFlexP>
              </DivLastFlex>
              <DivLastFlex>
                <ImgTrue src={grayTrue} alt="grayTrue" />
                <DivLastFlexP>Some great feature name here</DivLastFlexP>
              </DivLastFlex>
              <DivLastFlex>
                <ImgTrue src={grayTrue} alt="grayTrue" />
                <DivLastFlexP>Some great feature name here</DivLastFlexP>
              </DivLastFlex>
            </DivCFlex>
          </DivContent>
          <DivMayLike>
            <HeadingLike>You may like</HeadingLike>
            <Divboxgrid>
              <MayLike
                ImgMyLike={jakets}
                name="Apple Watch Series Space Gray"
                price="$7.00 - $99.50"
              />
              <MayLike
                ImgMyLike={jakets}
                name="Apple Watch Series Space Gray"
                price="$7.00 - $99.50"
              />
              <MayLike
                ImgMyLike={jakets}
                name="Apple Watch Series Space Gray"
                price="$7.00 - $99.50"
              />
              <MayLike
                ImgMyLike={jakets}
                name="Apple Watch Series Space Gray"
                price="$7.00 - $99.50"
              />
              <MayLike
                ImgMyLike={jakets}
                name="Apple Watch Series Space Gray"
                price="$7.00 - $99.50"
              />
            </Divboxgrid>
          </DivMayLike>
        </DivMayFlexLike>
        <DivRelatedProducts>
          <HeadingRProducts>Related products</HeadingRProducts>
          <DivFlexProduct>
            <RelatedProducts
              ImgProduct={JwallImg}
              name="Xiaomi Redmi 8 Original "
              price="$32.00-$40.00"
            />
            <RelatedProducts
              ImgProduct={JwallImg}
              name="Xiaomi Redmi 8 Original "
              price="$32.00-$40.00"
            />
            <RelatedProducts
              ImgProduct={JwallImg}
              name="Xiaomi Redmi 8 Original "
              price="$32.00-$40.00"
            />
            <RelatedProducts
              ImgProduct={JwallImg}
              name="Xiaomi Redmi 8 Original "
              price="$32.00-$40.00"
            />
            <RelatedProducts
              ImgProduct={JwallImg}
              name="Xiaomi Redmi 8 Original "
              price="$32.00-$40.00"
            />
            <RelatedProducts
              ImgProduct={JwallImg}
              name="Xiaomi Redmi 8 Original "
              price="$32.00-$40.00"
            />
            <RelatedProducts
              ImgProduct={JwallImg}
              name="Xiaomi Redmi 8 Original "
              price="$32.00-$40.00"
            />
          </DivFlexProduct>
        </DivRelatedProducts>
        <BoxDiscount
          name="Super discount on more than 100 USD"
          description="Have you ever finally just write dummy info"
        />
      </Container>
      <LastFooter />
    </div>
  );
};

export default ProductPage;
