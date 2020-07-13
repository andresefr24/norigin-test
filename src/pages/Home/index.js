import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { format } from "date-fns";
import useMediaQuery from "react-responsive";
import { fetchProgramsRequest } from "~/store/modules/programs/actions";
import Default from "~/pages/_layouts/Default";
import * as S from "./styles";
import Program from "~/pages/Home/components/Program";
import { currentHourPosition } from "~/pages/Home/utils";
import SpinnerModal from "~/components/Modal/SpinnerModal";

export default function Home() {
  const dispatch = useDispatch();
  const referenceTimes = [...new Array(24)];
  const [measure, setMeasure] = useState(50);

  const isMobile = useMediaQuery({ query: `(max-width:768px)` });

  const { data, loading } = useSelector((state) => state.programs.channels);

  useEffect(() => {
    dispatch(fetchProgramsRequest());
  }, [dispatch]);

  useEffect(() => {
    setMeasure(isMobile ? 100 : 50);
  }, [setMeasure, isMobile]);

  useEffect(() => {
    const currentHour = format(new Date(), "H");
    if (
      document.getElementById(
        `t-${parseInt(currentHour, 10) + (isMobile ? 0 : 1)}`
      )
    ) {
      document
        .getElementById(`t-${parseInt(currentHour, 10) + 1}`)
        .scrollIntoView();
    }
  }, [data, isMobile]);

  return (
    <Default>
      <S.Container>
        {!loading && (
          <S.Calendar measure={measure}>
            <div className="channel_column">
              {data.map(({ title, images: { logo } }) => (
                <div className="channel_feed_row" key={v4()}>
                  <div className="logo_container">
                    <img src={logo.replace("https", "http")} alt={title} />
                  </div>
                </div>
              ))}
            </div>
            <div className="feed_column">
              <S.Reticle position={currentHourPosition(measure)} />
              <S.TimeReferences measure={measure}>
                {referenceTimes.map((hour, i) => (
                  <S.TimeTag
                    key={v4()}
                    measure={measure}
                    id={`t-${i + 1}`}
                  >{`${i}:00`}</S.TimeTag>
                ))}
              </S.TimeReferences>
              {data.map(({ schedules }) => (
                <div className="channel_feed_row" key={v4()}>
                  <div className="feed_container">
                    {schedules.map((schedule) => (
                      <Program key={v4()} {...schedule} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </S.Calendar>
        )}
      </S.Container>
      <SpinnerModal isOpen={loading} />
    </Default>
  );
}
