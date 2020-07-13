import styled from "styled-components/macro";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-direction: column;
  z-index: 1;
  overflow-y: scroll;
`;

export const PreviewBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: url(${({ src }) => src}), linear-gradient(34deg, #542466, #244366);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: top center;
  -webkit-mask-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5) 40%,
    rgba(0, 0, 0, 0.5) 100%
  );
  overflow: hidden;
`;

export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  min-height: 50px;
  font-size: ${({ theme }) => theme.fontScale.h5};
  color: ${({ theme }) => theme.colors.lighter};
  font-family: ${({ theme }) => theme.fonts.primary};
  z-index: 1;
  margin-top: 20px;

  img {
    max-height: 75px;
    max-width: 75px;
    margin-right: 10px;
  }
`;

export const PlayerZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20vh;

  svg {
    transition: all 0.2s;
    cursor: pointer;
  }

  p {
    font-size: ${({ theme }) => theme.fontScale.h5};
    color: ${({ theme }) => theme.colors.lighter};
    font-family: ${({ theme }) => theme.fonts.primary};
    margin-top: 10px;
    cursor: pointer;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.secondary};
    }

    p {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const DataZone = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 20px;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.lighter};

  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    margin-top: 10px;
    line-height: 25px;
  }

  .title {
    font-size: ${({ theme }) => theme.fontScale.h5};
    font-weight: 700;
    margin-bottom: 10px;
    width: 100%;
  }

  .description {
    font-size: ${({ theme }) => theme.fontScale.paragraph};
    letter-spacing: 0.05rem;
    width: 100%;
  }

  .details_container {
    .detail {
      margin: 2px 10px;
      float: left;
    }
  }

  .seasons {
    width: 100%;
    margin-bottom: 5px;

    .season_selector {
      margin-right: 10px;
      text-transform: uppercase;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
