import React, { useState } from "react";
import { Containers } from "./style";

import uparrow from "../../asset/upArrow.png";
import FiveStars from "../../asset/5stars.png";
import FourStars from "../../asset/4stars.png";
import ThreeStars from "../../asset/3stars.png";
import TwoStars from "../../asset/2stars.png";

import {
  AccordionCardBox,
  AccordionContent,
  AccordionName,
  FiltersSelection,
  ListInput,
  ListSubmit,
  MaxBox,
  MinBox,
} from "./style";

import CheckboxInput from "../CheckboxInput";
import { Flex } from "../../global/style";
import RadioInput from "../RadioInput";

const Accordion = () => {
  const [categoryDisplay, setcategoryDisplay] = useState("none");
  const [BrandsDisplay, setBrandsDisplay] = useState("none");
  const [FeaturesDisplay, setFeaturesDisplay] = useState("none");
  const [RatingsDisplay, setRatingsDisplay] = useState("none");
  const [ConditionDisplay, setConditionDisplay] = useState("none");
  const [PriceRange, setPriceRange] = useState("none");
  return (
    <Containers>
      <FiltersSelection>
        <AccordionCardBox>
          <AccordionName>
            Category
            <img
              style={
                categoryDisplay === "none"
                  ? { cursor: "pointer", transform: "rotate(180deg)" }
                  : { cursor: "pointer" }
              }
              src={uparrow}
              alt="uparrow icon"
              onClick={() =>
                setcategoryDisplay((prevstate) =>
                  prevstate === "block" ? "none" : "block"
                )
              }
            />
          </AccordionName>
          <AccordionContent
            display={categoryDisplay === "none" ? "none" : "block"}
          >
            <ul>
              <li>Mobile accessory</li>
              <li>Electronics</li>
              <li>Smartphones </li>
              <li>Modern tech</li>
              <li className="blue">See all</li>
            </ul>
          </AccordionContent>
        </AccordionCardBox>

        <AccordionCardBox>
          <AccordionName>
            Brands
            <img
              style={
                BrandsDisplay === "none"
                  ? { cursor: "pointer", transform: "rotate(180deg)" }
                  : { cursor: "pointer" }
              }
              src={uparrow}
              alt="uparrow icon"
              onClick={() =>
                setBrandsDisplay((prevstate) =>
                  prevstate === "block" ? "none" : "block"
                )
              }
            />
          </AccordionName>
          <AccordionContent
            display={BrandsDisplay === "none" ? "none" : "block"}
          >
            <ul>
              <li>
                <CheckboxInput id="Samsung" label="Samsung" />
              </li>
              <li>
                <CheckboxInput id="Apple" label="Apple" />
              </li>
              <li>
                <CheckboxInput id="Huawei" label="Huawei" />
              </li>
              <li>
                <CheckboxInput id="Pocco" label="Pocco" />
              </li>
              <li>
                <CheckboxInput id="Lenovo" label="Lenovo" />
              </li>
              <li className="blue">See all</li>
            </ul>
          </AccordionContent>
        </AccordionCardBox>

        <AccordionCardBox>
          <AccordionName>
            Features
            <img
              style={
                FeaturesDisplay === "none"
                  ? { cursor: "pointer", transform: "rotate(180deg)" }
                  : { cursor: "pointer" }
              }
              src={uparrow}
              alt="uparrow icon"
              onClick={() =>
                setFeaturesDisplay((prevstate) =>
                  prevstate === "block" ? "none" : "block"
                )
              }
            />
          </AccordionName>
          <AccordionContent
            display={FeaturesDisplay === "none" ? "none" : "block"}
          >
            <ul>
              <li>
                <CheckboxInput id="Metallic" label="Metallic" />
              </li>
              <li>
                <CheckboxInput id="Plastic cover" label="Plastic cover" />
              </li>
              <li>
                <CheckboxInput id="8GB Ram" label="8GB Ram" />
              </li>
              <li>
                <CheckboxInput id="Super power" label="Super power" />
              </li>
              <li>
                <CheckboxInput id="Large Memory" label="Large Memory" />
              </li>
              <li className="blue">See all</li>
            </ul>
          </AccordionContent>
        </AccordionCardBox>

        <AccordionCardBox>
          <AccordionName>
            Price range
            <img
              style={
                PriceRange === "none"
                  ? { cursor: "pointer", transform: "rotate(180deg)" }
                  : { cursor: "pointer" }
              }
              src={uparrow}
              alt="uparrow icon"
              onClick={() =>
                setPriceRange((prevstate) =>
                  prevstate === "block" ? "none" : "block"
                )
              }
            />
          </AccordionName>
          <AccordionContent display={PriceRange === "none" ? "none" : "block"}>
            <ul>
              <form>
                <input
                  style={{ width: "100%" }}
                  type="range"
                  min="0"
                  max="999999"
                />
                <Flex gap="9">
                  <MinBox>
                    <h4>Min</h4>
                    <ListInput type="number" placeholder="0" />
                  </MinBox>
                  <MaxBox>
                    <h4>Max</h4>
                    <ListInput type="number" placeholder="999999" />
                  </MaxBox>
                </Flex>
                <ListSubmit value="Apply" type="submit" />
              </form>
            </ul>
          </AccordionContent>
        </AccordionCardBox>

        <AccordionCardBox>
          <AccordionName>
            Condition
            <img
              style={
                ConditionDisplay === "none"
                  ? { cursor: "pointer", transform: "rotate(180deg)" }
                  : { cursor: "pointer" }
              }
              src={uparrow}
              alt="uparrow icon"
              onClick={() =>
                setConditionDisplay((prevstate) =>
                  prevstate === "block" ? "none" : "block"
                )
              }
            />
          </AccordionName>
          <AccordionContent
            display={ConditionDisplay === "none" ? "none" : "block"}
          >
            <ul>
              <li>
                <RadioInput id="Any" label="Any" />
              </li>
              <li>
                <RadioInput id="Refurbished" label="Refurbished" />
              </li>
              <li>
                <RadioInput id="Brand new" label="Brand new" />
              </li>
              <li>
                <RadioInput id="Old items" label="Old items" />
              </li>
            </ul>
          </AccordionContent>
        </AccordionCardBox>

        <AccordionCardBox>
          <AccordionName>
            Ratings
            <img
              style={
                RatingsDisplay === "none"
                  ? { cursor: "pointer", transform: "rotate(180deg)" }
                  : { cursor: "pointer" }
              }
              src={uparrow}
              alt="uparrow icon"
              onClick={() =>
                setRatingsDisplay((prevstate) =>
                  prevstate === "block" ? "none" : "block"
                )
              }
            />
          </AccordionName>
          <AccordionContent
            display={RatingsDisplay === "none" ? "none" : "block"}
          >
            <ul>
              <li>
                <CheckboxInput id="5stars" imgLabel={FiveStars} />
              </li>
              <li>
                <CheckboxInput id="4stars" imgLabel={FourStars} />
              </li>
              <li>
                <CheckboxInput id="3stars" imgLabel={ThreeStars} />
              </li>
              <li>
                <CheckboxInput id="2stars" imgLabel={TwoStars} />
              </li>
            </ul>
          </AccordionContent>
        </AccordionCardBox>
      </FiltersSelection>
    </Containers>
  );
};

export default Accordion;
