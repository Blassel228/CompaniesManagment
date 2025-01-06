import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  background-color: black;
  height: 100vh;
`;

const Main = styled.main`
  background-color: #1a1a1a;
  height: 100%; 
`;

export default function AppLayout() {
  return (
    <StyledLayout>
      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
}
