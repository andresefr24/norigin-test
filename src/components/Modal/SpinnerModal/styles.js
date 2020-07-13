import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    transform: rotateZ(-3deg);
  }
  
  50% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(-3deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    height: 100px;
    width: 100px;
    margin-bottom: 50px;
    animation: ${loading} 2s linear infinite;
    transform-origin: bottom;
  }
`;
