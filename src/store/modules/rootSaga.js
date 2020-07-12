import { all } from "redux-saga/effects";

import templateSaga from "./programs/sagas";

export default function* rootSaga() {
  return yield all([templateSaga]);
}
