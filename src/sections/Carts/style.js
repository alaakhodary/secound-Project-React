import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  height: 86px;
  padding: 1% 6%;
  gap: 49.9rem;
`;
export const HeadingCart = styled.h2`
  font-weight: 600;
  line-height: 28px;
  margin-top: 2rem;
`;
export const DivCart = styled.div`
  width: 75rem;
  height: 660px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-top: 1.5rem;
  display: block;
`;
export const DivSecoundCart = styled.div`
  position: absolute;
  top: 47rem;
  right: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 51rem;
`;
export const ButtonBack = styled.button`
  position: relative;
  width: 159px;
  height: 40px;
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  border: 1px solid #0d6efd;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  font-size: 16px;
`;
export const ImgButton = styled.img`
  position: absolute;
  top: 11px;
  left: 7px;
  z-index: 11;
`;
export const ButtonRAll = styled.button`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 115px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #0d6efd;
`;
export const FlexDivCart = styled.div`
  display: flex;
  gap: 2rem;
`;
export const DivCoupon = styled.div`
  width: 421px;
  height: 110px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-top: 1.5rem;
}
`;
export const PCoupon = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #505050;
  padding: 15px;
`;
export const DivInputCopon = styled.div`
  margin: 0.5rem 1rem;
  display: flex;
  align-items: center;
`;
export const InputCopon = styled.input`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  width: 237px;
  height: 40px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #8b96a5;
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
`;
export const InputSubmit = styled(InputCopon)`
  font-weight: 600;
  text-align: center;
  color: #0d6efd;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  width: 85px;
  height: 40px;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0;
  cursor: pointer;
`;
export const DetailsCart = styled.div`
  width: 421px;
  height: 350px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 4px 10px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
  margin-top: 1.5rem;
`;
export const GridDetailsCart = styled.div`
  display: grid;
  margin: 1.3rem 1.5rem;
  gap: 1rem;
`;
export const FlexDetailsCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Pprice = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;
`;
export const PpriceDis = styled(Pprice)`
  color: #fa3434;
`;
export const PTax = styled(Pprice)`
  color: #00b517;
`;
export const HrCopon = styled.hr`
  background: #e4e4e4;
  width: 86%;
  margin: auto;
`;
export const Flextotal = styled(FlexDetailsCart)`
  margin: 1.3rem 1.5rem;
`;
export const Ptotal = styled(Pprice)`
  font-weight: bold;
  color: black;
`;
export const PpriceTotal = styled(Ptotal)`
  font-size: 20px;
`;
export const ButtonCheck = styled.button`
  background: #00b517;
  border-radius: 8px;
  width: 350px;
  height: 54px;
  color: white;
  font-size: 20px;
  border: none;
`;
export const DivButtonChec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DivpaymentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`;
export const DivPayMethodImg = styled.div`
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  width: 34px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgPayment = styled.img`
  max-width: 100%;
`;
export const PaymentMethodsFeatures = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 7rem;
`;
export const DivSaveFLater = styled.div`
  width: 100%;
  height: 495px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-top: 3rem;
`;
export const HeadingFeature = styled.h2`
  padding: 2rem;
`;
export const DivFlexSaved = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
