import styled from "styled-components";
import { Flexbox } from "../navbar/navbarStyle";
import { GetFont } from "../otherStyles/othersStyles";

export const FooterStyled = styled.div`
  width: 100%;
  height: 100px;
  ${Flexbox()};
  background: violet;
  margin-top: 50px;

  p {
    color: white;
    font-size: 13pt;
    ${GetFont("Medium")}
  }
`;
