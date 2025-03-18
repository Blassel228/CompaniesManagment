import * as React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar.tsx";

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 8px;
  background-color: #1f1f1f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  height: 100%;
`;

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
  background-color: #171616;
`;

const Main = styled.main`
  grid-area: main;
  background-color: #121212;
  padding: 2rem;
  height: 100%;
  overflow-y: auto;
`;

export default function AppLayout({ children }) {
  return (
    <StyledLayout>
      <NavbarStyled>
        <Navbar showIcon={false} />
      </NavbarStyled>
      <SidebarStyled>
        <Sidebar />
      </SidebarStyled>
      <Main>
        <ChildrenContainer>{children}</ChildrenContainer>
      </Main>
    </StyledLayout>
  );
}
