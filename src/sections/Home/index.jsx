import React from "react";

import imgHeadPhone from "../../asset/banner.png";
import UserImg from "../../asset/User.png";
import watch from "../../asset/watches.png";
import labs from "../../asset/lab.png";
import camera from "../../asset/camera.png";
import headphons from "../../asset/headphone.png";
import phons from "../../asset/phone.png";
import img from "../../asset/home.png";
import ImgPro from "../../asset/chairs.png";
import mobile from "../../asset/mobils.png";
import build from "../../asset/building.png";
import TImage from "../../asset/Tchirt.png";
import headset from "../../asset/headpho.png";
import services from "../../asset/service.png";
import IconServices from "../../asset/serIcon.png";
import imgFlag from "../../asset/flag.png";
import emilimg from "../../asset/message.png";

import Header from "../../Components/Header";
import HelloUser from "../../Components/HelloUser";
import Navbar from "../../Components/Navbar";
import Offers from "../../Components/Offers";
import { Container } from "../../global/Container";
import {
  DivAllContent,
  DivContent,
  DivGrid,
  DivImg,
  DivList,
  DivSupplier,
  DivSupplierP,
  DivSupplierPa,
  DivSuppliers,
  ImgHeadPhone,
  ULList,
  ULListItem,
  ULListItems,
  DivDays,
  DivDeals,
  DivOffers,
  DivTime,
  Divflexoffer,
  ButtonHome,
  DivAllProducts,
  DivImgs,
  Divone,
  ImgHome,
  PHome,
  DivProduct1,
  DivImges,
  ImgsHome,
  PHomes,
  ButtonHomes,
  DivSendReq,
  ImgBuild,
  DivRecommended,
  DivRecomFlex,
  DivRecomgrid,
  ExtraService,
  ExtraServiceFlex,
  DivImgBuild,
  DivFlagFlex,
  HeadingReq,
  PHeadingReq,
  DivFormQ,
  DivFormQFlex,
  HFormQ,
  InputQ,
  InputTextAreaQ,
  DivInputNumQ,
  InputNumQ,
  SelectQ,
  InputSubmitQ,
  HeadingEService,
  HeadingSuppliers,
} from "./style";
import Products from "../../Components/Products";
import RecommendedItems from "../../Components/RecommendedItems";
import ExtraServices from "../../Components/ExtraServices";
import Region from "../../Components/Region";
import Subscribe from "../../Components/Subscribe";
import LastFooter from "../../Components/LastFooter";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Container>
        <DivContent>
          <DivAllContent>
            <DivList>
              <ULList>
                <ULListItem>Automobiles</ULListItem>
                <ULListItems>Clothes and wear</ULListItems>
                <ULListItems>Home interiors</ULListItems>
                <ULListItems>Computer and tech</ULListItems>
                <ULListItems>Tools, equipments</ULListItems>
                <ULListItems>Sports and outdoor</ULListItems>
                <ULListItems>Animal and pets</ULListItems>
                <ULListItems>Machinery tools</ULListItems>
                <ULListItems>More category</ULListItems>
              </ULList>
            </DivList>
            <DivImg>
              <ImgHeadPhone src={imgHeadPhone} alt="HeadPhone" />
            </DivImg>
            <DivGrid>
              <HelloUser imgUser={UserImg} title="Hi, user let’s get stated" />
              <DivSupplier>
                <DivSupplierP>Get US $10 off with a new suplier</DivSupplierP>
              </DivSupplier>
              <DivSuppliers>
                <DivSupplierPa>
                  Send quotes with supplier preferences
                </DivSupplierPa>
              </DivSuppliers>
            </DivGrid>
          </DivAllContent>
        </DivContent>
        <Divflexoffer>
          <DivOffers>
            <DivDeals>
              <h2>Deals and offers</h2>
              <p>Hygiene equipments</p>
              <DivTime>
                <DivDays>
                  <p>04</p>
                  <p>Days</p>
                </DivDays>
                <DivDays>
                  <p>13</p>
                  <p>Hour</p>
                </DivDays>
                <DivDays>
                  <p>34</p>
                  <p>Hour</p>
                </DivDays>
                <DivDays>
                  <p>56</p>
                  <p>Sec</p>
                </DivDays>
              </DivTime>
            </DivDeals>
          </DivOffers>
          <Divflexoffer>
            <Offers image={watch} name="Smart watches" offer="-25%" />
            <Offers image={labs} name="Laptops" offer="-25%" />
            <Offers image={camera} name="GoPro cameras" offer="-25%" />
            <Offers image={headphons} name="Headphones" offer="-25%" />
            <Offers image={phons} name="Canon camreras" offer="-25%" />
          </Divflexoffer>
        </Divflexoffer>
        <DivAllProducts>
          <Divone>
            <DivImgs>
              <ImgHome src={img} alt="images" />
            </DivImgs>
            <PHome>Home and outdoor</PHome>
            <ButtonHome>Source now</ButtonHome>
          </Divone>
          <div>
            <DivProduct1>
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
            </DivProduct1>
            <DivProduct1>
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
            </DivProduct1>
          </div>
        </DivAllProducts>
        <DivAllProducts>
          <Divone>
            <DivImges>
              <ImgsHome src={mobile} alt="packgeMobile" />
            </DivImges>
            <PHomes>Consumer electronics and gadgets</PHomes>
            <ButtonHomes>Source now</ButtonHomes>
          </Divone>
          <div>
            <DivProduct1>
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
            </DivProduct1>
            <DivProduct1>
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
              <Products
                name="Soft chairs"
                price="From USD 19"
                imgProduct={ImgPro}
              />
            </DivProduct1>
          </div>
        </DivAllProducts>
        <DivSendReq>
          <DivImgBuild>
            <ImgBuild src={build} alt="buildings" />
          </DivImgBuild>
          <DivFormQFlex>
            <h1>
              <HeadingReq>
                An easy way to send requests to all suppliers
              </HeadingReq>
              <PHeadingReq>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </PHeadingReq>
            </h1>
            <DivFormQ>
              <HFormQ>Send quote to suppliers</HFormQ>
              <form>
                <InputQ type="text" id="" placeholder="What item you need?" />
                <InputTextAreaQ
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Type more details"
                ></InputTextAreaQ>
                <DivInputNumQ>
                  <InputNumQ type="number" id="" placeholder="Quantity" />
                  <SelectQ id="">
                    <option value="1">Pcs</option>
                  </SelectQ>
                </DivInputNumQ>
                <InputSubmitQ type="submit" value="Send inquiry" />
              </form>
            </DivFormQ>
          </DivFormQFlex>
        </DivSendReq>
        <DivRecommended>
          <HFormQ>Recommended items</HFormQ>
          <DivRecomgrid>
            <DivRecomFlex>
              <RecommendedItems
                Iimage={TImage}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
              <RecommendedItems
                Iimage={TImage}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
              <RecommendedItems
                Iimage={TImage}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
              <RecommendedItems
                Iimage={TImage}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
              <RecommendedItems
                Iimage={TImage}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
              <RecommendedItems
                Iimage={TImage}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
            </DivRecomFlex>
            <DivRecomFlex>
              <RecommendedItems
                Iimage={headset}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
              <RecommendedItems
                Iimage={headset}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
              <RecommendedItems
                Iimage={headset}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
              <RecommendedItems
                Iimage={headset}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
              <RecommendedItems
                Iimage={headset}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
              <RecommendedItems
                Iimage={headset}
                price="$10.30"
                description="T-shirts with multiple colors, for men"
              />
            </DivRecomFlex>
          </DivRecomgrid>
        </DivRecommended>
        <ExtraService>
          <HeadingEService>Our extra services</HeadingEService>
          <ExtraServiceFlex>
            <ExtraServices
              img1={services}
              img2={IconServices}
              title="Source from Industry Hubs"
            />
            <ExtraServices
              img1={services}
              img2={IconServices}
              title="Source from Industry Hubs"
            />
            <ExtraServices
              img1={services}
              img2={IconServices}
              title="Source from Industry Hubs"
            />
            <ExtraServices
              img1={services}
              img2={IconServices}
              title="Source from Industry Hubs"
            />
            <ExtraServices
              img1={services}
              img2={IconServices}
              title="Source from Industry Hubs"
            />
          </ExtraServiceFlex>
        </ExtraService>
        <HeadingSuppliers>Suppliers by region</HeadingSuppliers>
        <div>
          <DivFlagFlex>
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
          </DivFlagFlex>
          <DivFlagFlex>
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
            <Region
              FlagImg={imgFlag}
              name="Arabic Emirates"
              subname="shopname.ae"
            />
          </DivFlagFlex>
        </div>
      </Container>
      <Subscribe
        title="Subscribe on our newsletter"
        subTitle="Get daily news on upcoming
        offers from many suppliers all over the world"
        emailImg={emilimg}
      ></Subscribe>
      <LastFooter />
    </div>
  );
};

export default Home;
