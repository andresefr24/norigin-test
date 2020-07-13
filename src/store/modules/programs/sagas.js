import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as api from "~/services/api";
import { Types as programsTypes, fetchProgramsSuccess } from "./actions";

export function* fetchPrograms() {
  try {
    const {
      data: { channels },
    } = yield call(api.getProgramGrid);
    yield delay(2000);
    yield put(fetchProgramsSuccess(channels));
  } catch (err) {
    toast.error(`Programs schedule couldn't load, try refreshing the page`);
  }
}

export default all([
  takeLatest(programsTypes.FETCH_PROGRAMS_REQUEST, fetchPrograms),
]);
