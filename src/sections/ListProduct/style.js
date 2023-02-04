import styled from "styled-components";

export const DivRightSide = styled.div`
  width: 306px;
  background: white;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
`;
export const DivSittings = styled.div`
  width: 83rem;
  height: 62px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  display: flex;
  align-items: center;
`;
export const DivFlex = styled.div`
  display: flex;
  gap: 1rem;
`;
export const PNum = styled.p`
  margin-left: 1rem;
`;
export const DivForm = styled.form`
  margin-left: 40rem;
`;
export const InputCheck = styled.input`
  accent-color: #0d6efd;
  width: 15px;
  height: 15px;
`;
export const Label = styled.label`
  margin-left: 0.9rem;
`;
export const Select = styled.select`
  margin-left: 0.9rem;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 172px;
  height: 40px;
  outline: none;
`;
export const Span = styled.span`
  font-weight: bold;
`;
export const DivFlexIcon = styled.div`
  display: flex;
  margin-left: 1rem;
  align-items: center;
`;
export const DivImgIcon = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  width: 38px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
`;
export const DivImgIcons = styled(DivImgIcon)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
