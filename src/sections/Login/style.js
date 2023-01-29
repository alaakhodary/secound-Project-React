import styled from "styled-components";

export const DivBox = styled.div`
  width: 387px;
  height: 561px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
  border-radius: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
`;
export const Heading = styled.h1`
  margin-bottom: 1rem;
`;
export const Label = styled.label`
  font-size: 18px;
  line-height: 19px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  font-weight: 500;
`;
export const DivUserName = styled.div`
  display: grid;
`;
export const Input = styled.input`
  width: 327px;
  height: 45px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  outline: none;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  background: #ffffff;
  padding-left: 10px;
`;
export const DivPassword = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LabelPass = styled(Label)`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.2px;
  color: #0d6efd;
  cursor: pointer;
`;
export const DivCheckbox = styled.div`
  display: flex;
`;
export const InputCheck = styled.input`
  width: 20px;
  height: 20px;
  accsent-color: #0d6efd;
  border-radius: 5px;
`;
export const Remember = styled.p`
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  margin-bottom: 1.3rem;
`;
export const LogIn = styled(Input)`
  background: #0d6efd;
  color: white;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`;
export const DivOr = styled.div`
  position: relative;
  margin-top: 0.6rem;
`;
export const Or = styled.p`
  position: absolute;
  left: 9rem;
  bottom: -5px;
  z-index: 1;
  background-color: white;
  border-left: 15px solid white;
  border-right: 15px solid white;
  color: #a9acb0;
  font-size: 14px;
`;
export const DivGoogle = styled.div`
  display: flex;
  margin-top: 2rem;
`;
export const Buttongoogle = styled.button`
  width: 327px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #606060;
  position: relative;
  margin-bottom: 0.7rem;
  cursor: pointer;
`;
export const Imagegoogle = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 2.5rem;
  top: 25.7rem;
  z-index: 12;
`;
export const DivFacebook = styled(DivGoogle)`
  margin-top: 0rem;
`;
export const Buttonface = styled(Buttongoogle)`
  background: #4267b2;
  color: white;
`;
export const Imageface = styled(Imagegoogle)`
  left: 2.5rem;
  top: 29.3rem;
`;
export const RigesterAccount = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  justify-content: center;
  color: #606060;
`;
export const RigesterNow = styled.span`
  margin-left: 0.3rem;
  color: #0d6efd;
  font-weight: 600;
  cursor: pointer;
`;