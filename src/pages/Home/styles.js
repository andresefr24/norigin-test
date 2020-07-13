import styled from "styled-components";
import { transparentize } from "polished";

const minsMult10InADay = [...new Array(144)];
const gridCols = (measure) =>
  minsMult10InADay.reduce((acc) => `${acc}${measure}px `, "");

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Calendar = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow-x: scroll;

  .channel_column {
    position: sticky;
    left: 0;
    top: 0;
    z-index: 2;
    padding-top: 30px;
  }

  .feed_column {
    padding-top: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .channel_feed_row {
    display: flex;
    height: 75px;
    align-items: center;

    .logo_container {
      position: sticky;
      left: 0;
      top: 0;
      width: 70px;
      height: 100%;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.lighter};
      border-bottom: 1px solid
        ${({ theme }) => transparentize(0.7, theme.colors.dark)};

      img {
        max-height: 60%;
        max-width: 80%;
      }
    }

    .feed_container {
      display: grid;
      grid-template-columns: ${({ measure }) => gridCols(measure)};
      height: 100%;
      width: auto;
      border-bottom: 1px solid
        ${({ theme }) => transparentize(0.9, theme.colors.light)};

      & > div {
        background-color: transparent;
      }

      & > div:last-child {
        border-right: 1px solid ${({ theme }) => theme.colors.modded.light_t_90};
      }

      & > div:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        transform: scale(1.05);
        transform-origin: bottom;
      }
    }
  }
`;

export const Reticle = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.accent};
  left: ${({ position }) => position}px;
  top: 0;
  opacity: 0.6;
  z-index: 1;
`;

export const TimeReferences = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: ${({ measure }) => 144 * measure}px;
  height: 30px;
  top: 0px;
  color: ${({ theme }) => theme.colors.modded.light_t_50};
  border-bottom: 1px solid ${({ theme }) => theme.colors.modded.light_t_90};
  cursor: default;
`;

export const TimeTag = styled.div`
  width: ${({ measure }) => measure * 6}px;
  padding-left: 5px;
  border-left: 2px solid ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};

  &:first-child {
    width: ${({ measure }) => measure * 5}px;
  }
`;
