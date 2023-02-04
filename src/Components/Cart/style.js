import styled from "styled-components";

export const DivAllCart = styled.div`
  height: 150px;
  margin: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const DivImgCart = styled.div`
  background: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageCart = styled.img`
  max-width: 100%;
`;
export const Headingname = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
  margin-top: 2rem;
`;
export const PCart = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8b96a5;
  width: 23rem;
  padding-top: 0.2rem;
`;
export const ButtonRemove = styled.button`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  color: #fa3434;
  width: 71px;
  height: 30px;
`;
export const ButtonSave = styled(ButtonRemove)`
  width: 108px;
  color: #0d6efd;
`;
export const DivButton = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 0.9rem;
`;
export const DivgridCart = styled.div`
  display: grid;
`;
export const DivFlexCart = styled.div`
  display: flex;
  align-items: center;
  gap: 32rem;
`;
export const DivGridCart = styled.div`
  display: grid;
  gap: 1.3rem;
`;
export const PcartPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #1c1c1c;
`;
export const SelectCart = styled.select`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 123px;
  height: 40px;
  font-weight: 400;
  font-size: 16px;
  outline: none;
`;
export const Hr = styled.hr`
  color: #e3e8ee;
  width: 72rem;
  margin-left: 1.5rem;
  height: 0;
`;
