import styled from "styled-components";

export const DivProduct = styled.div`
  width: 232.5px;
  height: 129px;
  padding: 20px;
  position: relative;
  border: 1px solid ${(props) => props.theme.pallet.border.b1};
  border-left: none;
  background: ${(props) => props.theme.pallet.main};
`;
export const Pproduct = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.secondary};
`;
export const Pprice = styled.p`
  color: ${(props) => props.theme.pallet.secondary};
  font-weight: 400;
  font-size: 13px;
  width: 50px;
  margin-top: 0.5rem;
`;
export const Imgproduct = styled.img`
  position: absolute;
  left: 67.33%;
  right: 9.33%;
  top: 22%;
  bottom: 7.56%;
  width: 66px;
  height: 66px;
`;
