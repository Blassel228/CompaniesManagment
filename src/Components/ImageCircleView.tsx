import styled, { css } from "styled-components";

export const ImageCircleView = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasimage",
})<{ hasimage: boolean; size: keyof typeof sizes }>`
  ${({ size }) => sizes[size]}
  border-radius: 50%;
  background-color: ${({ hasimage }) => (hasimage ? "transparent" : "#6200ea")};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 2px dashed #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ hasimage }) => (hasimage ? "transparent" : "#4500a3")};
  }
`;

const sizes = {
  small: css`
    height: 50px;
    width: 50px;
  `,
  medium: css`
    height: 100px;
    width: 100px;
  `,
  large: css`
    height: 150px;
    width: 150px;
  `,
};
