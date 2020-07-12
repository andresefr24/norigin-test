import produce from "immer";

import { Types } from "./actions";

export const INITIAL_STATE = {
  channels: { data: [], loading: false },
};

export default function programs(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case Types.FETCH_PROGRAMS_REQUEST: {
        draft.channels.loading = true;
        break;
      }
      case Types.FETCH_PROGRAMS_SUCCESS: {
        draft.channels.loading = false;
        draft.channels.data = payload;
        break;
      }
      case Types.FETCH_PROGRAMS_FAILURE: {
        draft.channels.loading = false;
        break;
      }
      default:
        break;
    }
  });
}
