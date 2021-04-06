import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  display: block;
  position: fixed;
`;
const NavLink = css`
  text-decoration: none;
  color: #fff;
  font-size: 48px;
`;
const MenuWrap = styled.div`
  padding-left: 2rem;
  padding-top: 2rem;
  z-index: 999;
`;
const MenuBars = styled(FaBars)`
  color: #fff;
  font-size: 42px;
  padding-right: 20px;
  margin-bottom: -4px;
  /* padding: 10px; */
`;
const Circle = styled.div`
  position: absolute;
  z-index: -999;
  top: -125px;
  left: -150px;
  background: #000;
  width: 525px;
  height: 525px;
  border-radius: 100%;
  clip-path: ${({ isOpen }) =>
    isOpen ? "circle(100%)" : "circle(0% at 36% 33%)"};
  transition: 0.5s ease-in-out;
`;

const Logo = styled(Link)`
  ${NavLink};
`;
const NavMenu = styled.div`
  clip-path: ${({ isOpen }) =>
    isOpen ? "circle(50% at 15% 20%)" : "circle(0% at 5% -25%)"};
  padding-left: 2rem;
  padding-top: 1rem;
  transition: 0.6s cubic-bezier(0.39, 0.58, 0.57, 1);
`;

const NavMenuLinks = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: left;
  font-weight: bolder;
  width: 550px;
  height: 65px;
  ${NavLink};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <Nav>
      <Circle isOpen={isOpen} />
      <MenuWrap onClick={toggle}>
        <MenuBars />
        <Logo to="/">EXP|CON</Logo>
      </MenuWrap>
      <NavMenu isOpen={isOpen}>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
