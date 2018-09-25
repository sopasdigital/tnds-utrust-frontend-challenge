import styled, { css } from "styled-components";

import { applyColor } from "../UI/Provider/applyColor";
import colors from "../UI/Provider/colors";

export const font = {
  primary: "Open Sans",
  secondary: "Noto Serif"
};

//  Text
export const Text = styled.p.attrs({
  color: props => (props.color ? props.color : "black")
})`
  color: ${applyColor};
  font-size: 1em;
  letter-spacing: .16px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  text-align: left;  
  transition: color 100ms ease-in-out;

  /* Centered */

  ${props =>
    props.center &&
    css`
      text-align: center;
    `}

  /* Bold */
  ${props =>
    props.bold &&
    css`
      font-weight: 700;
    `}
`;

export const Heading = styled.h1`
  color: ${applyColor};
  font-family: ${font.secondary}, serif;
  font-size: 3.6em;
  font-weight: 700;
  line-height: 1.1em;
  margin-top: 15px;
`;

export const Temp = styled.h2`
  color: ${applyColor};
  font-family: ${font.secondary}, serif;
  font-size: 6.854em;
  position: absolute;
  bottom: 2px;
  right: 10px;
  margin: 0;
  letter-spacing: 1.1px;
  line-height: 1.1em;
  text-shadow: 5px 3px 0px ${colors.alpha.purple};
`;

export const Headline = styled.h4`
  color: ${applyColor};
  font-size: 1.2em;
  font-weight: 500;
  letter-spacing: 0.16px;
  line-height: 1.1em;
  width: 100%;
  margin: 20px 0;
`;
