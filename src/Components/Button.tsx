import styled from "styled-components";

export const UploadActionButton = styled.button`
  padding: 1rem 2rem;
  background-color: #28a745;
  color: #eae3e3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #1e7e34;
  }

  &:disabled {
    background-color: #565050;
    color: #beb4b4;
    cursor: not-allowed;
  }
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

export default Button;
