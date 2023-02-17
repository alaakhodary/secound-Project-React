import styled from "styled-components";

export const DivSubscribe = styled.div`
  background: ${(props) => props.theme.pallet.background};
  height: 190px;
  margin-top: 3.5rem;
  border-bottom: 1px solid ${(props) => props.theme.pallet.border.b2};
  border-top: 1px solid ${(props) => props.theme.pallet.border.b2};
`;
export const DivSubscribeTitle = styled.div`
  padding: 1rem;
`;
export const HeadingSubscribe = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.secondary};
  margin-top: 2rem;
`;
export const PSubscribe = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.secondary};
`;
export const DivSubscribeFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export const DivSubscribeInput = styled.input`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  outline: none;
  width: 274px;
  height: 40px;
  padding-left: 40px;
  position: relative;
  font-size: 16px;
`;
export const DivSubscribeInSubmit = styled.input`
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  border: 1px solid #0d6efd;
  border-radius: 6px;
  width: 120px;
  height: 40px;
  color: white;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
export const DivSubscribeImgemail = styled.img`
  width: 19px;
  height: 15px;
  position: absolute;
  z-index: 5;
`;
export const DivImgF = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
`;
