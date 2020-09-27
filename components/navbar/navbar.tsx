import { ItemMenu, Logo, Menu, NavbarStyled } from "./navbarStyle";
import Link from "next/link";
import Router from "next/router";

export default function Navbar() {
  const page = Router.asPath;

  return (
    <NavbarStyled>
      <Logo>Voting App</Logo>

      <Menu>
        <Link href="/">
          <ItemMenu active={page === "/" ? true : false}>Home</ItemMenu>
        </Link>

        <Link href="/about">
          <ItemMenu active={page === "/about" ? true : false}>About</ItemMenu>
        </Link>
      </Menu>
    </NavbarStyled>
  );
}
