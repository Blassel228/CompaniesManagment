import * as React from "react";
import Logo from "./Logo.tsx";
import styled from "styled-components";
import { NavLinkStyledSidebar } from "./StyledLink.tsx";
import { routerKeys } from "../Constants/routerKeys.tsx";

/* TODO: ADD icons to every link */

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;

const TopSection = styled.div`
  text-align: center;
`;

const CompanyName = styled.h2`
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  font-family:
    "Consolas", "Menlo", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    monospace;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const NavItem = styled.li`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  transition:
    transform 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <TopSection>
        <Logo />
        <CompanyName>Company Name</CompanyName>
      </TopSection>

      <NavList>
        <NavItem>
          <NavLinkStyledSidebar to={routerKeys.company}>
            Companies
          </NavLinkStyledSidebar>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
}
