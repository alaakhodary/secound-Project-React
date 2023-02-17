import styled from "styled-components";
import { DivBox } from "../Login/style";

export const DivBoxs = styled(DivBox)`
  height: 635px;
`;

export const Headings = styled.h1`
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.pallet.secondary};
`;
export const Divall = styled.div`
  display: flex;
  gap: 0.7rem;
`;
export const DivName = styled.div`
  margin-top: 0.5rem;
`;
export const InputName = styled.input`
  width: 166px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  outline: none;
  padding-left: 10px;
`;
export const InputSurName = styled(InputName)`
  width: 150px;
`;
export const DivEmail = styled.div`
  display: grid;
  margin-top: 1rem;
`;
export const InputEmail = styled(InputName)`
  width: 326px;
  margin-top: 0.2rem;
`;
export const DivPass = styled.div`
  display: grid;
  margin-top: 1rem;
`;
export const InputPass = styled(InputEmail)`
  width: 326px;
`;
export const DivRePass = styled.div`
  display: grid;
  margin-top: 1rem;
`;
export const InputRePass = styled(InputEmail)`
  width: 326px;
`;
export const Rigester = styled.div`
  margin-top: 1rem;
`;
export const InputRigerster = styled(InputEmail)`
  background: #0d6efd;
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
`;
export const Agree = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const PAgree = styled.p`
  margin-left: 10px;
  color: ${(props) => props.theme.pallet.secondary};
`;
export const SpanAgree = styled.span`
  color: #0d6efd;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
export const HaveAnAccount = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
`;
export const SpanLogin = styled(SpanAgree)`
  margin-left: 0.3rem;
  cursor: pointer;
`;
export const PHaveAnAccount = styled.p`
  color: ${(props) => props.theme.pallet.secondary};
`;
export const Divfhone = styled.div`
  display: block;
  margin-top: 1rem;
`;
export const Divfhoneflex = styled.div`
  display: flex;
`;
export const Selectfhone = styled.select`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  width: 121px;
  height: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  outline: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
export const SelectInputfhone = styled.input`
  width: 220px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left: none;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #a9acb0;
  padding-left: 10px;
`;
