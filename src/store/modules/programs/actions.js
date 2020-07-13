export const Types = {
  FETCH_PROGRAMS_REQUEST: "@programs_reducer/FETCH_PROGRAMS_REQUEST",
  FETCH_PROGRAMS_SUCCESS: "@programs_reducer/FETCH_PROGRAMS_SUCCESS",
  FETCH_PROGRAMS_FAILURE: "@programs_reducer/FETCH_PROGRAMS_FAILURE",

  FETCH_PROGRAM_DETAILS_REQUEST:
    "@programs_reducer/FETCH_PROGRAM_DETAILS_REQUEST",
  FETCH_PROGRAM_DETAILS_SUCCESS:
    "@programs_reducer/FETCH_PROGRAM_DETAILS_SUCCESS",
  FETCH_PROGRAM_DETAILS_FAILURE:
    "@programs_reducer/FETCH_PROGRAM_DETAILS_FAILURE",
  FLUSH_PROGRAM_DETAILS: "@programs_reducer/FLUSH_PROGRAM_DETAILS",
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

export const fetchProgramDetailsRequest = (payload) => ({
  type: Types.FETCH_PROGRAM_DETAILS_REQUEST,
  payload,
});

export const fetchProgramDetailsSuccess = (payload) => ({
  type: Types.FETCH_PROGRAM_DETAILS_SUCCESS,
  payload,
});

export const fetchProgramDetailsFailure = () => ({
  type: Types.FETCH_PROGRAM_DETAILS_FAILURE,
});

export const flushProgramDetails = () => ({
  type: Types.FLUSH_PROGRAM_DETAILS,
});
