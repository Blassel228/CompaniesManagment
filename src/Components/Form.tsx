import styled, { css } from "styled-components";

const sizes = {
  small: css`
    height: 20rem;
  `,
  medium: css`
    height: 27rem;
  `,
  large: css`
    height: 50rem;
  `,
};

const Form = styled.form`
  background-color: #1a1a1a;
  width: ${({ width = "50rem" }) => width};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;

  ${({ size = "medium" }) => sizes[size]}
`;

Form.defaultProps = {
  size: "medium",
};

export default Form;
