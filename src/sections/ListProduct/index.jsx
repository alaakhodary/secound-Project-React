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
  InputCheck,
  Label,
  PNum,
  Select,
  Span,
} from "./style";

const ListProduct = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Container>
        <Path />
        <DivFlex>
          <DivRightSide>Alaa</DivRightSide>
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
          </div>
        </DivFlex>
      </Container>
    </div>
  );
};

export default ListProduct;
