import styled from "styled-components";

export const DivBox = styled.div`
  width: 387px;
  background: ${(props) => props.theme.pallet.main};
  box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
  border-radius: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.pallet.border.b1};
`;
export const Heading = styled.h1`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.pallet.secondary};
`;
export const Label = styled.label`
  font-size: 18px;
  line-height: 19px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.secondary};
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
  display: block;
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
  color: ${(props) => props.theme.pallet.secondary};
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
  background-color: ${(props) => props.theme.pallet.main};
  /* border-left: 15px solid white;
  border-right: 15px solid white; */
  padding-left: 15px;
  padding-right: 15px;
  color: ${(props) => props.theme.pallet.secondary};
  font-size: 14px;
`;
export const DivGoogle = styled.div`
  display: flex;
  margin-top: 2rem;
  position: relative;
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
  margin-bottom: 0.7rem;
  cursor: pointer;
`;
export const Imagegoogle = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 16px;
  top: 11px;
  z-index: 12;
`;
export const DivFacebook = styled(DivGoogle)`
  margin-top: 0rem;
`;
export const Buttonface = styled(Buttongoogle)`
  background: #4267b2;
  color: white;
`;
export const Imageface = styled(Imagegoogle)``;
export const RigesterAccount = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  justify-content: center;
  color: ${(props) => props.theme.pallet.secondary};
`;
export const RigesterNow = styled.span`
  margin-left: 0.3rem;
  color: #0d6efd;
  font-weight: 600;
  cursor: pointer;
`;
export const ErrorsList = styled.ul`
  list-style: circle;
  padding: 10px;
`;
export const ErrorMessage = styled.li`
  margin-top: 5px;
  color: red;
`;
