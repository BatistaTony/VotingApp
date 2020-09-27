import styled from "styled-components";
import { GetFont } from "../otherStyles/othersStyles";

interface IFlex {
  direction?: string;
  justify?: string;
  align?: string;
}

export function Flexbox(
  direction = "row",
  justify = "center",
  align = "center"
): any {
  return `
display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};

`;
}

export const NavbarStyled = styled.div`
  width: 100%;
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
  background: violet;
  box-sizing: border-box;
  ${Flexbox("row", "space-between", "center")};
`;

export const Logo = styled.h1`
  font-size: 20pt;
  color: white;
  ${GetFont("Medium")};
`;

export const Menu = styled.ul`
  width: auto;
  height: auto;
  list-style: none;
  ${Flexbox("row", "space-around", "center")}
`;

export const ItemMenu = styled.li`
  margin-right: 10px;
  padding: 5px;
  color: white;
  ${GetFont("Medium")};
  padding-left: 10px;
  padding-right: 10px;
  cursor: default;
  border: ${({ active }) =>
    active ? "2px solid white" : "2px solid transparent"};
  transition: 0.5s;

  &:hover {
    border: 2px solid white;
  }
`;
