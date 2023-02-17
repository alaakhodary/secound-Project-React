import styled from "styled-components";

export const DivAllProduct = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-top: 1.5rem;
  display: flex;
  height: 255px;
  padding: 20px;
  gap: 2rem;
`;
export const DivImgProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 210px;
`;
export const ImgProduct = styled.img`
  width: 100%;
  height: 100%;
`;
export const PnameProduct = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #1c1c1c;
`;
export const DivFlexPrice = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.5rem;
  align-items: center;
}
`;
export const Pprice = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;
export const Prevprice = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: line-through;
  color: #8b96a5;
`;
export const Flexdetails = styled(DivFlexPrice)`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
export const Prate = styled.p`
  color: #ff9017;
  font-weight: 500;
`;
export const Porders = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  color: #8b96a5;
`;
export const Pfree = styled(Porders)`
  color: #00b517;
  font-weight: 500;
`;
export const Pdesc = styled(Porders)`
  color: #505050;
  width: 42rem;
  line-height: 25px;
`;
export const Pview = styled(Porders)`
  color: #0d6efd;
  margin-top: 1rem;
  font-weight: 600;
`;
export const Divlove = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  margin-left: 18rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Imglove = styled.img`
  max-width: 100%;
  cursor: pointer;
`;
