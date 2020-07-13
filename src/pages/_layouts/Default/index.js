import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import * as S from "./styles";
import Header from "~/components/Header";

export default function Default({ children }) {
  const { loading } = useSelector((state) => state.programs.channels);

  return (
    <S.Container>
      {!loading && <Header>asd</Header>}
      {children}
    </S.Container>
  );
}

Default.propTypes = {
  children: PropTypes.node,
};

Default.defaultProps = {
  children: {},
};
