import styled from "styled-components";
import Navbar from "../Components/Navbar.tsx";
import Logo from "../Components/Logo.tsx";
import { FormLayout } from "../Components/FormLayout.tsx";
import RegistrationForm from "../Features/Registration/RegistrationForm.tsx";

const Container = styled.div`
  text-align: center;
`;

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <FormLayout>
        <Container>
          <Logo size={70} />
        </Container>
        <RegistrationForm />
      </FormLayout>
    </>
  );
}
