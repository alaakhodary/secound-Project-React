import styled from "styled-components";

export const DivBoxUser = styled.div`
  width: 365px;
  height: 180px;
  background: #e3f0ff;
  border-radius: 6px;
  padding: 20px;
  margin-top: 9px;
  margin-left: 6rem;
`;
export const DivImgUser = styled.div`
  background: #91b1e7;
  border: 1px solid rgba(0, 0, 0, 0.12);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
`;
export const ImgUser = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
export const PUser = styled.p`
  width: 112px;
  height: 38px;
  font-weight: 500;
  font-size: 19px;
  line-height: 19px;
  color: #1c1c1c;
`;
export const DivFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
export const Button = styled.button`
  width: 20rem;
  height: 38px;
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  border: 1px solid #0d6efd;
  border-radius: 6px;
  margin-top: 0.9rem;
  color: white;
  cursor: pointer;
  font-size: 19px;
`;
export const ButtonLogin = styled(Button)`
  background: #ffffff;
  color: #0d6efd;
  margin-top: 0.7rem;
  border: 1px solid #e3e8ee;
`;
