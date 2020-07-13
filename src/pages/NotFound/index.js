import React from "react";
import { Link } from "react-router-dom";
import Default from "~/pages/_layouts/Default";
import * as S from "./styles";
import { Button } from "~/components/Button";
import Logo from "~/assets/Branding-mark@4x.png";

const NotFound = () => {
  return (
    <Default>
      <S.Container>
        <img src={Logo} alt="logo" height={50} />
        <S.Message>Not found</S.Message>
        <Link to="/">
          <Button type="primary">Go back</Button>
        </Link>
      </S.Container>
    </Default>
  );
};

export default NotFound;
