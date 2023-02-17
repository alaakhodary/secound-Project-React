import React from "react";

import verticals from "../../asset/vertical.png";
import horizantals from "../../asset/horizantal.png";

import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Path from "../../Components/Path";
import { Container } from "../../global/Container";
import {
  DivFlex,
  DivFlexIcon,
  DivForm,
  DivImgIcon,
  DivImgIcons,
  DivRightSide,
  DivSittings,
  DivSubscribs,
  InputCheck,
  Label,
  PNum,
  Select,
  Span,
} from "./style";

import Productitem from "../../asset/jwall2.png";

import ItemProduct from "../../Components/ItemProduct";
import Subscribe from "../../Components/Subscribe";
import LastFooter from "../../Components/LastFooter";

import emilimgs from "../../asset/message.png";
import fillStar from "../../asset/fillStar.png";
import star from "../../asset/start.png";
import dot from "../../asset/Dot.png";
import love from "../../asset/loves.png";
import NumberBar from "../../Components/NumberBar";
import Accordion from "../../Components/Accordion";

const ListProduct = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Container>
        <Path />
        <DivFlex>
          <DivRightSide>
            <Accordion />
          </DivRightSide>
          <div>
            <DivSittings>
              <PNum>
                12,911 items in <Span>Mobile accessory</Span>
              </PNum>
              <DivForm>
                <form>
                  <InputCheck type="checkbox" id="" checked />
                  <Label htmlFor="">Verified only</Label>
                  <Select id="">
                    <option value="">Featured</option>
                  </Select>
                </form>
              </DivForm>
              <DivFlexIcon>
                <DivImgIcon>
                  <img src={verticals} alt="verticals" />
                </DivImgIcon>
                <DivImgIcons>
                  <img src={horizantals} alt="horizantals" />
                </DivImgIcons>
              </DivFlexIcon>
            </DivSittings>
            <div>
              <ItemProduct
                productImg={Productitem}
                name="Canon Cmera EOS 2000, Black 10x zoom"
                price="$998.00"
                prevPrice="$1128.00"
                Fstar={fillStar}
                rate="7.5"
                star={star}
                dot={dot}
                orders="154 orders"
                free="Free Shipping"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua"
                love={love}
              />
              <ItemProduct
                productImg={Productitem}
                name="Canon Cmera EOS 2000, Black 10x zoom"
                price="$998.00"
                prevPrice="$1128.00"
                Fstar={fillStar}
                rate="7.5"
                star={star}
                dot={dot}
                orders="154 orders"
                free="Free Shipping"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua"
                love={love}
              />
              <ItemProduct
                productImg={Productitem}
                name="Canon Cmera EOS 2000, Black 10x zoom"
                price="$998.00"
                prevPrice="$1128.00"
                Fstar={fillStar}
                rate="7.5"
                star={star}
                dot={dot}
                orders="154 orders"
                free="Free Shipping"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua"
                love={love}
              />
              <ItemProduct
                productImg={Productitem}
                name="Canon Cmera EOS 2000, Black 10x zoom"
                price="$998.00"
                prevPrice="$1128.00"
                Fstar={fillStar}
                rate="7.5"
                star={star}
                dot={dot}
                orders="154 orders"
                free="Free Shipping"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua"
                love={love}
              />
              <ItemProduct
                productImg={Productitem}
                name="Canon Cmera EOS 2000, Black 10x zoom"
                price="$998.00"
                prevPrice="$1128.00"
                Fstar={fillStar}
                rate="7.5"
                star={star}
                dot={dot}
                orders="154 orders"
                free="Free Shipping"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua"
                love={love}
              />
              <ItemProduct
                productImg={Productitem}
                name="Canon Cmera EOS 2000, Black 10x zoom"
                price="$998.00"
                prevPrice="$1128.00"
                Fstar={fillStar}
                rate="7.5"
                star={star}
                dot={dot}
                orders="154 orders"
                free="Free Shipping"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua"
                love={love}
              />
            </div>
          </div>
        </DivFlex>
        <NumberBar />
      </Container>
      <DivSubscribs>
        <Subscribe
          title="Subscribe on our newsletter"
          subTitle="Get daily news on upcoming
        offers from many suppliers all over the world"
          emailImg={emilimgs}
        />
      </DivSubscribs>

      <LastFooter />
    </div>
  );
};

export default ListProduct;
