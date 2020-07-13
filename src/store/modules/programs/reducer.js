import produce from "immer";

import { Types } from "./actions";

export const INITIAL_STATE = {
  channels: { data: [], loading: false },
  currentProgram: { data: {}, loading: false },
};

export default function programs(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      // EPG
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

      // PROGRAM DETAILS
      case Types.FETCH_PROGRAM_DETAILS_REQUEST: {
        draft.currentProgram.loading = true;
        break;
      }
      case Types.FETCH_PROGRAM_DETAILS_SUCCESS: {
        draft.currentProgram.loading = false;
        draft.currentProgram.data = payload;
        break;
      }
      case Types.FETCH_PROGRAM_DETAILS_FAILURE: {
        draft.currentProgram.loading = false;
        break;
      }
      case Types.FLUSH_PROGRAM_DETAILS: {
        draft.currentProgram.data = {};
        draft.currentProgram.loading = false;
        break;
      }
      default:
        break;
    }
  });
}
