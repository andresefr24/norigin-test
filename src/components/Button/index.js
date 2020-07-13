import styled, { css } from "styled-components";

const buttonTypes = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.lighter};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.lighter};
  `,
  transparent: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.lighter};
  `,
  default: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  `,
};

const buttonSizes = {
  large: css`
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.fontScale.h5};
  `,
  medium: css`
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontScale.paragraph};
  `,
  small: css`
    padding: 2px 5px;
    font-size: ${({ theme }) => theme.fontScale.label};
  `,
  default: css`
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontScale.paragraph};
  `,
};

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  border-style: none;
  border-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;

  ${({ size }) => (size ? buttonSizes[size] : buttonSizes.default)};
  ${({ type }) => (type ? buttonTypes[type] : buttonTypes.default)};
`;
