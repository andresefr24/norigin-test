import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { format } from "date-fns";
import useMediaQuery from "react-responsive";
import { useHistory } from "react-router-dom";
import { fetchProgramsRequest } from "~/store/modules/programs/actions";
import Default from "~/pages/_layouts/Default";
import * as S from "./styles";
import Program from "~/pages/Home/components/Program";
import { currentHourPosition } from "~/pages/Home/utils";
import SpinnerModal from "~/components/Modal/SpinnerModal";

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

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

  const scrollToNow = () => {
    const currentHour = format(new Date(), "H");
    if (document.getElementById(`t-${parseInt(currentHour, 10)}`)) {
      document
        .getElementById(`t-${parseInt(currentHour, 10) + 1}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToNow();
  }, [data, isMobile]);

  const handleHorizontalScroll = (e) => {
    const calendar = document.getElementById("horizontal_scroll");
    const posX = calendar.scrollLeft;
    calendar.scrollTo({
      top: 0,
      left: posX + e.deltaY / 2,
      behaviour: "smooth",
    });
  };

  return (
    <Default>
      <S.Container>
        {!loading && (
          <S.Calendar measure={measure} id="horizontal_scroll">
            <div className="channel_column">
              {data.map(({ title, images: { logo } }) => (
                <div className="channel_feed_row" key={v4()}>
                  <div className="logo_container">
                    <img src={logo.replace("https", "http")} alt={title} />
                  </div>
                </div>
              ))}
            </div>
            <div className="feed_column" onWheel={handleHorizontalScroll}>
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
                      <Program
                        {...schedule}
                        key={v4()}
                        onClick={() => {
                          history.push(`/program/${schedule.id}`);
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <S.NowButton type="primary" onClick={scrollToNow}>
              Now
            </S.NowButton>
          </S.Calendar>
        )}
      </S.Container>
      <SpinnerModal isOpen={loading} />
    </Default>
  );
}
