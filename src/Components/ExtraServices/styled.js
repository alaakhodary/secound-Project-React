import styled from "styled-components";

export const DivExtra = styled.div`
  background: #ffffff;
  /* border: 1px solid #e0e0e0; */
  border-radius: 6px;
  width: 280px;
  margin-top: 1.4rem;
  border: 1px solid ${(props) => props.theme.pallet.secondary};
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
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
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
  background: ${(props) => props.theme.pallet.main};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
export const SerP = styled.p`
  font-weight: 500;
  font-size: 25px;
  line-height: 25px;
  color: ${(props) => props.theme.pallet.secondary};
`;
