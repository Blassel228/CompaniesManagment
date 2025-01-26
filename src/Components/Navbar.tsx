import * as React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaUser } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import Button from "./Button.tsx";
import useAuth from "../Features/Authentication/useAuth.tsx";
import { getItem } from "../Utils/localstorage.tsx";
import { routerKeys } from "../Constants/routerKeys.tsx";
import { ImageCircleView } from "./ImageCircleView.tsx";
import { UploadImage } from "./UploadImage.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store.tsx";


 // TODO: Replace all elements with flex-direction to rows components


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
    const { logout } = useAuth();
    const user = useSelector((state: RootState) => state.user.user);
    const profileImage = user?.profileImage;

    const hasProfileImage = profileImage && profileImage.length > 0;

  return (
    <NavbarContainer>
      <NavLinksLeft>
        <IconContainer>
            <SiNetlify size={40}/>
        </IconContainer>
        <IconContainer>
          <Link to={routerKeys.welcome}>
            <FaHome size={24} color="#fff" />
          </Link>
        </IconContainer>
       <Link to={routerKeys.account}>
          <ImageCircleView size="small" hasimage={hasProfileImage}>
            {hasProfileImage ? (
              <UploadImage src={`data:image/png;base64,${profileImage}`} alt="Profile" />
            ) : (
              <FaUser size={24} color="#fff" />
            )}
          </ImageCircleView>
        </Link>

        <NavLinkStyled to={routerKeys.dashboard}>Dashboard</NavLinkStyled>
      </NavLinksLeft>

      <NavLinksRight>
          <NavLinkStyled to={routerKeys.account}>Account</NavLinkStyled>
          <NavLinkStyled to={routerKeys.login}>Login</NavLinkStyled>
          <NavLinkStyled to={routerKeys.register}>Register</NavLinkStyled>
          {getItem("token") ? <Button onClick={logout}>Logout</Button> : undefined}
      </NavLinksRight>
    </NavbarContainer>
  );
};

export default Navbar;
