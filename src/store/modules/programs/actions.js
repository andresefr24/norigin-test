export const Types = {
  FETCH_PROGRAMS_REQUEST: "@programs_reducer/FETCH_PROGRAMS_REQUEST",
  FETCH_PROGRAMS_SUCCESS: "@programs_reducer/FETCH_PROGRAMS_SUCCESS",
  FETCH_PROGRAMS_FAILURE: "@programs_reducer/FETCH_PROGRAMS_FAILURE",
};

export const fetchProgramsRequest = () => ({
  type: Types.FETCH_PROGRAMS_REQUEST,
});

export const fetchProgramsSuccess = (payload) => ({
  type: Types.FETCH_PROGRAMS_SUCCESS,
  payload,
});

export const fetchProgramsFailure = (payload) => ({
  type: Types.FETCH_PROGRAMS_FAILURE,
  payload,
});
