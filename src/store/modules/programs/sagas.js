import { takeLatest, call, put, all, delay } from "redux-saga/effects";
import { toast } from "react-toastify";
import * as api from "~/services/api";
import {
  Types as programsTypes,
  fetchProgramsSuccess,
  fetchProgramsFailure,
  fetchProgramDetailsSuccess,
  fetchProgramDetailsFailure,
} from "./actions";

export function* fetchPrograms() {
  try {
    const {
      data: { channels },
    } = yield call(api.getProgramGrid);
    yield delay(2000);
    yield put(fetchProgramsSuccess(channels));
  } catch (err) {
    toast.error(`Programs schedule couldn't load, try refreshing the page`);
    yield put(fetchProgramsFailure());
  }
}

export function* fetchProgramDetails({ payload }) {
  try {
    const { data } = yield call(api.getProgramDetails, payload);
    yield delay(2000);
    yield put(fetchProgramDetailsSuccess(data));
  } catch (err) {
    toast.error(`Program details couldn't load, try refreshing the page`);
    yield put(fetchProgramDetailsFailure());
  }
}

export default all([
  takeLatest(programsTypes.FETCH_PROGRAMS_REQUEST, fetchPrograms),
  takeLatest(programsTypes.FETCH_PROGRAM_DETAILS_REQUEST, fetchProgramDetails),
]);
