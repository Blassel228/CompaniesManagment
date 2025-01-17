import styled from "styled-components";

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

export default Button;