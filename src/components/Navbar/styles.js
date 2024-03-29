import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { colors } from "../constants";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? colors.black : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  min-width: 250px;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: ${colors.white};
  justify-self: flex-start;
  display: flex;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  letter-spacing: 0.3rem;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${colors.white};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: ${colors.green};
    transition: 0.2s ease-in-out;
  }
  &.active {
    border-bottom: 3px solid ${colors.green};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${colors.green};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${colors.black};
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.25s ease-in-out;
    background: ${colors.white};
    color: ${colors.black};
  }
`;
