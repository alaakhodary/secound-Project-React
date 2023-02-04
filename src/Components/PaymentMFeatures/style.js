import styled from "styled-components";

export const DivFeature = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const DivImgLock = styled.div`
  width: 48px;
  height: 48px;
  background: #e3e8ee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PNameFeature = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;
export const PdiscFeature = styled(PNameFeature)`
  color: #a9acb0;
`;
