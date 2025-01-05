import * as React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaUser } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a1a;
`;

const NavLinksLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 2rem;
`;

const NavLinksRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 2rem;
`;

const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.6rem;
  font-family: 'Consolas', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', monospace;
  margin-right: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #6200ea;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinksLeft>
        <IconContainer>
          <Link to="/welcome">
            <FaHome size={24} color="#fff" />
          </Link>
        </IconContainer>
        <IconContainer>
          <FaUser size={24} color="#fff" />
        </IconContainer>
        <NavLinkStyled to="/dashboard">Dashboard</NavLinkStyled>
      </NavLinksLeft>
      <NavLinksRight>
          <NavLinkStyled to="/account">Account</NavLinkStyled>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
      </NavLinksRight>
    </NavbarContainer>
  );
};

export default Navbar;
