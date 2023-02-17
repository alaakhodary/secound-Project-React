import styled from "styled-components";

export const Containers = styled.div`
  margin-bottom: 20px;
`;
export const AccordionCardBox = styled.div`
  padding: 14px 0px 15px;
  border-top: 1px solid #e3e8ee;
`;

export const AccordionName = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.Text};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FiltersSelection = styled.div`
  width: 294px;
  padding-left: 1rem;
`;

export const AccordionContent = styled.div`
  display: ${(props) => (props.display === "block" ? "block" : "none")};
  padding-top: 24px;
  & ul li {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.pallet.list};
    margin-bottom: 16px;
    cursor: pointer;
  }
  & ul li.blue {
    color: #0d6efd;
  }
`;

export const MinBox = styled.div`
  & h4 {
    font-weight: 400;
    color: ${(props) => props.theme.pallet.Text};
    margin-bottom: 5px;
  }
  margin-bottom: 5px;
`;
export const MaxBox = styled(MinBox)``;
export const ListInput = styled.input`
  background: #fff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  width: 110px;
  padding: 10px;
  outline: none;
`;

export const ListSubmit = styled.input`
  background: #fff;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  padding: 10px;
  outline: none;
  cursor: pointer;
  width: 229px;
  height: 40px;
  color: #0d6efd;
`;
