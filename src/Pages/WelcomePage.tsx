import * as React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar.tsx";
import Button from "../Components/Button.tsx";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #121212;
  font-family: "Arial", sans-serif;
`;

const WelcomeContent = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 2rem;
  font-family:
    "Consolas", "Menlo", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    monospace;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const WelcomePage = () => {
  return (
    <PageWrapper>
      <Navbar />
      <WelcomeContent>
        <Heading>Welcome to Our Application!</Heading>
        <Button>Create Company</Button>
      </WelcomeContent>
    </PageWrapper>
  );
};

export default WelcomePage;
