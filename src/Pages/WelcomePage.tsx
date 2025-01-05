import * as React from 'react';
import styled from 'styled-components';
import Navbar from "../Components/Navbar.tsx";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #121212; 
  color: #fff;
  font-family: 'Arial', sans-serif;
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 2rem;
  font-family: 'Consolas', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', monospace;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  background-color: #6200ea;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3700b3;
  }
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
