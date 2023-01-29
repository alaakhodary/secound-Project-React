import React from "react";
import {
  DivExtra,
  DivImageSer,
  DivImageSericon,
  DivSerP,
  ImageSer,
  ImageSerIcon,
  SerP,
} from "./styled";

const ExtraServices = ({ img1, img2, title }) => {
  return (
    <DivExtra>
      <DivImageSer>
        <ImageSer src={img1} alt="imgServics" />
      </DivImageSer>
      <DivImageSericon>
        <ImageSerIcon src={img2} alt="imgIcon" />
      </DivImageSericon>
      <DivSerP>
        <SerP>{title}</SerP>
      </DivSerP>
    </DivExtra>
  );
};

export default ExtraServices;
