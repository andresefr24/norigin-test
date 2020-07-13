import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { minutesDiffFromDayStart } from "~/pages/Home/utils";
import useTheme from "~/utils/useTheme";

export default function Program({ title, start, end }) {
  const theme = useTheme();

  const {
    start: startCol,
    end: endCol,
    isAiring,
    startFormatted,
    endFormatted,
  } = minutesDiffFromDayStart(start, end);

  return (
    <div
      key={v4()}
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: 10,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        gridColumnStart: startCol,
        gridColumnEnd: endCol,
        backgroundColor: isAiring && theme.colors.secondary,
        color: theme.colors.lighter,
        borderLeft: `1px solid ${theme.colors.modded.light_t_90}`,
        borderBottom: `1px solid ${theme.colors.modded.light_t_90}`,
        cursor: "pointer",
        fontFamily: theme.fonts.primary,
        fontSize: theme.fontScale.paragraph,
        transition: "all 0.2s",
      }}
    >
      <p> {title}</p>
      <div className="schedules">
        <p
          style={{
            color: isAiring
              ? theme.colors.primary
              : theme.colors.modded.light_t_50,
            width: "100%",
            textAlign: "left",
            fontSize: theme.fontScale.label,
            fontWeight: 700,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >{`${startFormatted} - ${endFormatted}`}</p>
      </div>
    </div>
  );
}

Program.propTypes = {
  title: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
};

Program.defaultProps = {
  title: "",
  start: "",
  end: "",
};
