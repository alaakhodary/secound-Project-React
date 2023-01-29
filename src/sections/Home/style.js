import styled from "styled-components";

export const DivContent = styled.div`
  height: 450px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  margin-top: 20px;
`;
export const DivAllContent = styled.div`
  display: flex;
  height: 450px;
`;
export const DivList = styled.div`
  width: 260px;
  padding: 20px;
`;
export const ULList = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.4rem;
  width: 350px;
`;
export const ULListItem = styled.li`
  background: #e5f1ff;
  border-radius: 6px;
  padding: 10px;
  height: 40px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  width: 350px;
`;
export const ULListItems = styled(ULListItem)`
  background: white;
  font-weight: 400;
`;
export const DivImg = styled.div`
  padding: 20px;
  margin-left: 10rem;
`;
export const ImgHeadPhone = styled.img`
  background-size: cover;
  width: 704px;
  height: 400px;
`;
export const DivSupplier = styled.div`
  width: 365px;
  height: 90px;
  background: #f38332;
  border-radius: 6px;
  margin-left: 6rem;
  margin-top: 0.8rem;
`;
export const DivGrid = styled.div`
  margin-top: 0.8rem;
`;
export const DivSupplierP = styled.p`
  width: 190px;
  height: 57px;
  font-weight: 300;
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  padding: 15px;
`;
export const DivSuppliers = styled(DivSupplier)`
  background: #55bdc4;
`;
export const DivSupplierPa = styled(DivSupplierP)`
  width: 200px;
  font-size: 20px;
  font-weight: 300;
`;
export const DivOffers = styled.div`
  height: 240px;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  background: #ffffff;
  margin-top: 1rem;
  border-right: none;
`;
export const DivDeals = styled.div`
  padding: 20px;
  border-right: 1px solid #e3e8ee;
  width: 281px;
  height: 238px;
`;
export const DivTime = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const DivDays = styled.div`
  text-align: center;
  width: 45px;
  height: 50px;
  background: #606060;
  border-radius: 4px;
  color: white;
  display: grid;
  align-items: center;
  justify-content: center;
`;
export const Divflexoffer = styled.div`
  display: flex;
`;
export const DivAllProducts = styled.div`
  height: 257px;
  background-color: white;
  margin-top: 1rem;
  display: flex;
  border-radius: 6px;
`;

export const Divone = styled.div`
  width: 280px;
  height: 257px;
  border-radius: 6px;
`;
export const DivImgs = styled.div`
  position: relative;
`;
export const DivImges = styled(DivImgs)``;
export const ImgHome = styled.img`
  width: 280px;
  height: 257px;
  background: #c4c4c4;
`;
export const ImgsHome = styled(ImgHome)``;
export const PHome = styled.p`
  position: absolute;
  width: 130px;
  height: 52px;
  left: 131px;
  top: 904px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;
export const PHomes = styled(PHome)`
  left: 132px;
  top: 74rem;
`;
export const ButtonHome = styled.button`
  position: absolute;
  width: 119px;
  height: 40px;
  left: 6.99%;
  right: 81.25%;
  top: 62rem;
  bottom: 72.5%;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
`;
export const ButtonHomes = styled(ButtonHome)`
  left: 6.99%;
  right: 81.25%;
  top: 80rem;
`;
export const DivProduct1 = styled.div`
  display: flex;
`;

export const DivRecommended = styled.div`
  margin-top: 1rem;
`;
export const DivRecomFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5rem;
`;
export const DivRecomgrid = styled.div`
  display: grid;
`;
export const ExtraService = styled.div`
  margin-top: 1rem;
  height: 300px;
`;
export const ExtraServiceFlex = styled.div`
  display: flex;
  gap: 4.4rem;
`;
export const DivFlagFlex = styled.div`
  display: flex;
  gap: 4.4rem;
`;
export const DivSendReq = styled.div`
  height: 500px;
  width: 100%;
  margin-top: 1rem;
  border-radius: 6px;
  position: relative;
  background-image: linear-gradient(
    94.99deg,
    #2c7cf1 7.19%,
    rgba(0, 209, 255, 0.5) 89.49%,
    rgba(0, 209, 255, 0.5) 89.49%
  );
`;
export const DivImgBuild = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  &::before {
    content: "";
    border-radius: 6px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      94.99deg,
      #2c7cf1 7.19%,
      rgba(0, 209, 255, 0.5) 89.49%,
      rgba(0, 209, 255, 0.5) 89.49%
    );
  }
`;
export const ImgBuild = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 6px;
`;
export const HeadingReq = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.2px;
  color: #ffffff;
  width: 28rem;
  margin-top: 3rem;
  margin-left: 4rem;
`;
export const PHeadingReq = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #ffffff;
  margin-left: 4rem;
  margin-top: 1rem;
  width: 25rem;
`;
export const DivFormQ = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
  border-radius: 6px;
  width: 491px;
  height: 371px;
  margin-top: 2rem;
`;
export const DivFormQFlex = styled.div`
  display: flex;
  gap: 30rem;
  position: absolute;
  top: 0;
  left: 0;
`;
export const HFormQ = styled.h2`
  margin: 2rem;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;
export const InputQ = styled.input`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 440px;
  height: 40px;
  margin-left: 2rem;
  outline: none;
  padding-left: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: black;
  font-family: "Inter";
`;
export const InputTextAreaQ = styled.textarea`
  height: 73px;
  margin-top: 1rem;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 440px;
  margin-left: 2rem;
  outline: none;
  padding: 1rem 0.5rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: black;
  font-family: "Inter";
  resize: none;
`;
export const DivInputNumQ = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const InputNumQ = styled.input`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 206px;
  height: 40px;
  margin-left: 2rem;
  margin-top: 1rem;
  outline: none;
  padding-left: 10px;
  font-size: 16px;
  font-family: "Inter";
`;
export const SelectQ = styled.select`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 111px;
  height: 40px;
  margin-top: 1rem;
  font-size: 16px;
  outline: none;
  font-weight: 500;
`;
export const InputSubmitQ = styled.input`
  width: 129px;
  height: 40px;
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  border: 1px solid #0d6efd;
  border-radius: 6px;
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 16px;
  color: white;
  font-family: "Inter";
  cursor: pointer;
`;
