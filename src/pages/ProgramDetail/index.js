import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PlayCircle } from "styled-icons/ionicons-outline";
import { v4 } from "uuid";
import {
  fetchProgramDetailsRequest,
  flushProgramDetails,
} from "~/store/modules/programs/actions";
import SpinnerModal from "~/components/Modal/SpinnerModal";
import Default from "~/pages/_layouts/Default";
import * as S from "./styles";
import useTheme from "~/utils/useTheme";
import { Button } from "~/components/Button";

export default function ProgramDetail() {
  const dispatch = useDispatch();
  const theme = useTheme();

  const { id } = useParams();
  const { data, loading } = useSelector(
    (state) => state.programs.currentProgram
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProgramDetailsRequest(id));
    }
    return () => dispatch(flushProgramDetails());
  }, [dispatch, id]);

  return (
    <Default>
      <S.Container>
        <S.ChannelInfo>
          <img
            src={data.channelImages?.logo?.replace("https", "http")}
            alt={data.channelTitle}
          />
        </S.ChannelInfo>
        <S.PlayerZone>
          <PlayCircle size={40} color={theme.colors.lighter} />
          <p>Play now</p>
        </S.PlayerZone>
        <S.DataZone>
          <p className="title">{data.title}</p>
          <div className="seasons">
            {data.series?.map(({ title }) => (
              <Button
                type="transparent"
                size="medium"
                className="season_selector"
                key={v4()}
              >
                {title}
              </Button>
            ))}
          </div>
          <div className="details_container">
            <p className="detail">{data.meta?.year}</p>
            {data.meta?.genres.map((genre) => (
              <p className="detail" key={v4()}>
                {genre}
              </p>
            ))}
          </div>
          <p className="description">{data.description}</p>
        </S.DataZone>
        <S.DataZone>
          <p className="title">Cast</p>
          <div className="details_container">
            {data.meta?.cast.map(({ name }) => (
              <p className="detail" key={v4()}>
                {name}
              </p>
            ))}
          </div>
        </S.DataZone>
        <S.DataZone>
          <p className="title">Creators</p>
          <div className="details_container">
            {data.meta?.creators.map(({ name }) => (
              <p className="detail" key={v4()}>
                {name}
              </p>
            ))}
          </div>
        </S.DataZone>
      </S.Container>
      <S.PreviewBackground src={data.images?.icon?.replace("https", "http")} />
      <SpinnerModal isOpen={loading} />
    </Default>
  );
}
