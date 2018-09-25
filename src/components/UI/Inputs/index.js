import styled from "styled-components";

import colors from "../Provider/colors";
import Search from "../Icons/Search";

const Input = styled.input.attrs({ type: "text" })`
  background-color: ${colors.greyscale.white};
  color: ${colors.greyscale.black};
  display: inline-flex;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.18px;
  padding: 12px 16px 12px 12px;
  transition: border-color 100ms ease-in-out;
  vertical-align: middle;
  width: 100%;
  text-indent: 32px;
  border-radius: 5px;

  &::placeholder {
    color: ${colors.greyscale.grey.light};
  }
`;

export default Input;

export const SearchInput = styled(Input)`
  flex-grow: 8;
  border-radius: 8px 0 0 8px;
  position: relative;
`;

export const SearchBarContainer = styled.div`
  padding: 18px;
  display: flex;
  background: ${colors.purple.default};
  border-bottom: 1px solid ${colors.purple.outline};
  justify-content: center;

  & form {
    position: relative;
    width: 60%;
    display: flex;
  }
`;

export const SearchBarButton = styled.span`
  background: ${colors.purple.dark};
  color: ${colors.greyscale.white};
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background: ${colors.purple.darker};
  }

  & button {
    cursor: pointer;
    padding: 12px 18px;
    border: none;
  }
`;

export const Icon = styled(Search)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  z-index: 2;
`;
