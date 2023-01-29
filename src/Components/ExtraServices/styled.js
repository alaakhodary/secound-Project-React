import styled from "styled-components";

export const DivExtra = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  width: 280px;
  height: 200px;
  margin-top: 1.4rem;
`;
export const DivImageSer = styled.div`
  width: 278px;
  height: 120px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  position: relative;

  &::before {
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
    opacity: 0.69;
  }
`;
export const DivImageSericon = styled.div`
  position: relative;
  z-index: 22;
  margin-left: 13rem;
  margin-top: -2rem;
  background: #d1e7ff;
  border: 2px solid #ffffff;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageSer = styled.img`
  width: 278px;
  height: 120px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
export const ImageSerIcon = styled.img`
  width: 17px;
  height: 17px;
`;
export const DivSerP = styled.div`
  padding: 17px;
  margin-top: -1.5rem;
`;
export const SerP = styled.p`
  font-weight: 500;
  font-size: 25px;
  line-height: 25px;
  color: #1c1c1c;
`;
