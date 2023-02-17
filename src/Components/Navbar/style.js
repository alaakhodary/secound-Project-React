import styled from "styled-components";

export const DivAll = styled.div`
  display: flex;
  padding: 0 6%;
  align-items: center;
  background: #ffffff;
  height: 56px;
  border: 1px solid ${(props) => props.theme.pallet.hr};
  gap: 40rem;
  border-right: none;
  border-left: none;
  background-color: ${(props) => props.theme.pallet.main};
`;

export const DivNav = styled.div`
  gap: 3rem;
  display: flex;
  align-items: center;
`;
export const ImgNavbar = styled.img`
  margin-right: 0.5rem;
  filter: ${(props) => props.theme.pallet.filter};
`;
export const LItem = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.pallet.secondary};
  cursor: pointer;
  list-style: none;
`;

export const SecletItem = styled.select`
  font-weight: 500;
  font-size: 19px;
  line-height: 22px;
  color: #1c1c1c;
  border: none;
  cursor: pointer;
  outline: none;
`;
export const DivSelect = styled.div`
  display: flex;
  gap: 5rem;
`;
