import styled from "styled-components";

export const Container = styled.div`
  flex: 0.08;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  z-index: 100;

  color: ${({ theme }) => theme.colors.lighter};

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
      font-size: ${({ theme }) => theme.fontScale.h4};
      color: ${({ theme }) => theme.colors.lighter};
      font-family: ${({ theme }) => theme.fonts.primary};
      letter-spacing: 1px;
    }
  }
`;
