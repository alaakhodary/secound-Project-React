import React from "react";

import arrow from "../../asset/path.png";
import { DivPath, ParagraphPath } from "./style";

const Path = () => {
  return (
    <DivPath>
      <ParagraphPath>Home</ParagraphPath>
      <img src={arrow} alt="arrow" />
      <ParagraphPath>Clothings</ParagraphPath>
      <img src={arrow} alt="arrow" />
      <ParagraphPath>Men’s wear</ParagraphPath>
      <img src={arrow} alt="arrow" />
      <ParagraphPath>Summer clothing</ParagraphPath>
      <img src={arrow} alt="arrow" />
    </DivPath>
  );
};

export default Path;
