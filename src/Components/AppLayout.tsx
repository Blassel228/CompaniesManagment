import * as React from 'react';
import styled from "styled-components";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.tsx";

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;  
  grid-template-columns: 0.5fr 2fr;
  grid-template-areas: 
    "sidebar navbar" 
    "sidebar main"; 
  background-color: black;
  height: 100vh;
`;

const NavbarStyled = styled.div`
  grid-area: navbar; 
`;

const SidebarStyled = styled.div`
  grid-area: sidebar; 
  background-color: #2a2a2a; 
`;

const Main = styled.main`
  grid-area: main; 
  background-color: #1a1a1a;
  height: 100%;
`;

export default function AppLayout(){
  return (
    <StyledLayout>
      <NavbarStyled>
        <Navbar />
      </NavbarStyled>
      <SidebarStyled>
        <Sidebar />
      </SidebarStyled>
      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
};
