import styled from "styled-components";

export const DivRecommended = styled.div`
  width: 220px;
  height: 325px;
  background: ${(props) => props.theme.pallet.main};
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin-top: 1.5rem;
`;
export const DivRecommendedImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 220px;
  height: 200px;
`;
export const DivRecoImage = styled.img`
  max-width: 100%;
`;
export const DivRecoPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.pallet.secondary};
  margin-left: 1rem;
  margin-top: 2rem;
`;
export const DivRecoDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.secondary};
  margin-left: 1rem;
  margin-top: 0.6rem;
`;
