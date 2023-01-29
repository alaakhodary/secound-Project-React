import React from "react";
import {
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
            <DivSubscribeImgemail src={emailImg} alt="emailImgs" />
            <DivSubscribeInput type="email" id="email" placeholder="Email" />
          </div>
          <DivSubscribeInSubmit type="submit" value="Subscribe" />
        </DivSubscribeFlex>
      </form>
    </DivSubscribe>
  );
};

export default Subscribe;
