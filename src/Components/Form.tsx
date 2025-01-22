import styled, { css } from "styled-components";

const sizes = {
  small: css`
    height: ${({ height = "20rem" }) => height};
  `,
  medium: css`
    height: ${({ height = "27rem" }) => height};
  `,
  large: css`
    height: ${({ height = "50rem" }) => height};
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
