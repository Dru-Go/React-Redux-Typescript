import { all } from "redux-saga/effects";
import saga from "./sagas";

export default function* rootSaga() {
  yield all([saga()]);
}
