import styled from "styled-components";

export const DivNumBar = styled.div`
  height: 125px;
  width: 103rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const SelectBar = styled.select`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 125px;
  height: 50px;
  outline: none;
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
`;
export const FlexBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
export const DivArrowL = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
`;
export const DivArrowR = styled(DivArrowL)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;
export const ImgArrowL = styled.img`
  width: 10px;
  height: 15px;
  cursor: pointer;
`;
export const PNumber = styled.p`
  border: 1px solid #e3e8ee;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  background: white;
  cursor: pointer;
`;
