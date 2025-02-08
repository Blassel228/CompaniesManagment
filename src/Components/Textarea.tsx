import styled from "styled-components";

const TextArea = styled.textarea.attrs((props) => ({
  ...props,
}))`
  background-color: #1a1a1a;
  width: 40rem;
  height: 10rem;
  margin: 1rem 0;
  padding: 1rem;
  color: white;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 1.6rem;
  display: block;
  resize: vertical;
`;

export default TextArea;
