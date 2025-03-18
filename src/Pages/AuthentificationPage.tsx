import AuthenticationForm from "../Features/Authentication/AuthenticationForm.tsx";
import styled from "styled-components";
import Navbar from "../Components/Navbar.tsx";
import Logo from "../Components/Logo.tsx";
import { FormLayout } from "../Components/FormLayout.tsx";

const Container = styled.div`
  text-align: center;
`;

export default function AuthenticationPage() {
  return (
    <>
      <Navbar />
      <FormLayout>
        <Container>
          <Logo size={70} />
        </Container>
        <AuthenticationForm />
      </FormLayout>
    </>
  );
}
