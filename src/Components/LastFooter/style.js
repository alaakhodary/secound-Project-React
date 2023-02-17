import styled from "styled-components";

export const DivAllFooter = styled.div`
  height: 324px;
  background: ${(props) => props.theme.pallet.main};
  position: relative;
`;
export const Divlogo = styled.div`
  padding: 45px 6%;
`;
export const DivlogoFlex = styled.div`
  display: flex;
  gap: 8rem;
`;
export const PLogo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.secondary};
  width: 270px;
  margin-top: 1rem;
`;
export const DivlogoSoial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
export const DivlogoGrid = styled.div`
  display: grid;
  gap: 0.2rem;
  margin-top: 3rem;
`;
export const PItem = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.textFooter};
`;
export const DivFinalFooter = styled.div`
  display: flex;
  gap: 74.2rem;
  background: ${(props) => props.theme.pallet.main};
  border-top: 1px solid #e3e8ee;
  height: 68px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const Pecommerce = styled.p`
  color: ${(props) => props.theme.pallet.secondary};
`;
export const SelectLang = styled.select`
  background: ${(props) => props.theme.pallet.main};
  border: none;
  font-size: 18px;
  color: ${(props) => props.theme.pallet.secondary};
  outline: none;
  padding: 10px;
`;
export const HeadingMainTitle = styled.h3`
  color: ${(props) => props.theme.pallet.secondary};
`;
