import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { fetchProgramsRequest } from "~/store/modules/programs/actions";

export default function Home() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.programs.channels);

  useEffect(() => {
    dispatch(fetchProgramsRequest());
  }, [dispatch]);

  return (
    <div>
      loading:{loading ? "true" : "false"}
      <br />
      <br />
      data:
      <br />
      {data.map(({ title }) => (
        <React.Fragment key={v4()}>
          {title}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}
