import React from "react";
import {
  DivArrowL,
  DivArrowR,
  DivNumBar,
  FlexBar,
  ImgArrowL,
  PNumber,
  SelectBar,
} from "./style";

import arrowLeft from "../../asset/arrow1.png";
import arrowRight from "../../asset/arrow2.png";

const NumberBar = () => {
  return (
    <DivNumBar>
      <SelectBar id="">
        <option value="1">Show 10</option>
      </SelectBar>
      <FlexBar>
        <DivArrowL>
          <ImgArrowL src={arrowRight} alt="arrowRight" />
        </DivArrowL>
        <PNumber>1</PNumber>
        <PNumber>2</PNumber>
        <PNumber>3</PNumber>
        <DivArrowR>
          <ImgArrowL src={arrowLeft} alt="arrowLeft" />
        </DivArrowR>
      </FlexBar>
    </DivNumBar>
  );
};

export default NumberBar;
