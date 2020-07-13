import React from "react";
import { PropagateLoader } from "react-spinners";
import GlobalModal from "~/components/Modal/GlobalModal";
import Logo from "~/assets/Branding-mark@4x.png";
import * as S from "./styles";
import useTheme from "~/utils/useTheme";

export default function SpinnerModal(props) {
  const theme = useTheme();
  return (
    <GlobalModal {...props} appElement={document.querySelector("#modal")}>
      <S.Container>
        <img alt="logo" src={Logo} />
        <PropagateLoader size={15} color={theme.colors.secondary} loading />
      </S.Container>
    </GlobalModal>
  );
}
