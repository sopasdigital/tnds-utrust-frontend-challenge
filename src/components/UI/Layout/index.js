import styled, { css } from "styled-components";

import colors from "../Provider/colors";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: [full-start] 5% [content-start] auto [content-end] 5% [full-end];
`;

export const Main = styled.div`
  grid-column-start: content-start;
  grid-column-end: content-end;
  display: flex;
`;

export const Header = styled.div`
  grid-column-start: full-start;
  grid-column-end: full-end;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  position: relative;
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};

  ${props =>
    props.justifyLeft &&
    css`
      justify-content: flex-start;
    `} ${props =>
    props.justifyRight &&
    css`
      justify-content: flex-end;
    `};
`;

export const ImageHolder = styled(Container)`
  border-radius: 5px;
  background-color: ${colors.greyscale.grey.dark};
  background-image: url(${props => (props.bg ? props.bg : "none")});
  background-size: cover;
`;
