import styled from "styled-components";

import colors from "../UI/Provider/colors";

export const WeatherList = styled.ul`
  margin: 20px;
  padding: 0;
`;

export const WeatherListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid ${colors.greyscale.grey.default};
  border-left: 1px solid ${colors.greyscale.grey.default};
  display: flex;
  flex: nowrap;

  &:first-child {
    border-top: 1px solid ${colors.greyscale.grey.default};
  }

  &:first-child > span:first-child > h4 {
    color: ${colors.purple.default};
    font-weight: 700;
  }

  &:last-child {
    border-right: 0;
  }
`;

export const Entry = styled.span`
  align-items: center;
  border-right: 1px solid ${colors.greyscale.grey.default};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 80px;
  padding: 15px 15px 5px;

  &:first-child {
    padding: 15px;
    border-right: 0;
    min-width: 200px;

    & p {
      text-align: left;
    }
  }

  & p {
    width: 100%;
    text-align: center;
  }

  &:nth-child(2) {
    border-left: 1px solid ${colors.greyscale.grey.default};
  }
`;
