import React from "react";
import {
  DivImgF,
  DivSubscribe,
  DivSubscribeFlex,
  DivSubscribeImgemail,
  DivSubscribeInput,
  DivSubscribeInSubmit,
  DivSubscribeTitle,
  HeadingSubscribe,
  PSubscribe,
} from "./style";

const Subscribe = ({ title, subTitle, emailImg }) => {
  return (
    <DivSubscribe>
      <DivSubscribeTitle>
        <HeadingSubscribe>{title}</HeadingSubscribe>
        <PSubscribe>{subTitle}</PSubscribe>
      </DivSubscribeTitle>
      <form>
        <DivSubscribeFlex>
          <div>
            <DivImgF>
              <DivSubscribeImgemail src={emailImg} alt="emailImgs" />
            </DivImgF>
            <DivSubscribeInput type="email" id="email" placeholder="Email" />
          </div>
          <DivSubscribeInSubmit type="submit" value="Subscribe" />
        </DivSubscribeFlex>
      </form>
    </DivSubscribe>
  );
};

export default Subscribe;
