import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import Logo from "~/assets/Branding-mark@4x.png";

export default function Header() {
  return (
    <S.Container>
      <Link to="/">
        <img src={Logo} alt="logo" width={23} height={23} />
        <p>Norigin</p>
      </Link>
    </S.Container>
  );
}
