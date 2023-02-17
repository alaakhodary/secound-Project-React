import styled from "styled-components";

export const DivFlag = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
export const DivFlagImg = styled.div``;
export const Flagimg = styled.img`
  width: 28px;
  height: 20px;
`;
export const DivFlagP = styled.div``;

export const FlagP = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.pallet.secondary};
`;
export const FlagSubP = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => props.theme.pallet.secondary};
`;
