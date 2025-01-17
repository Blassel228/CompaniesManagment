import AuthenticationForm from "../Features/Authentication/AuthenticationForm.tsx";
import styled from "styled-components";
import Navbar from "../Components/Navbar.tsx";
import Logo from "../Components/Logo.tsx";

const LoginLayout = styled.main`
  background-color: #121212; 
  height: calc(100vh - 60px);
  display: grid;
  place-content: center;
`;

const Container = styled.div`
  text-align: center;
`;


export default function AuthenticationPage() {
    return(
        <>
        <Navbar />
        <LoginLayout >
            <Container>
              <Logo size={70}/>
            </Container>
            <AuthenticationForm />
        </LoginLayout>
        </>
    )
}