import { call, put, takeEvery } from "redux-saga/effects";
import { logger } from "../utils/logger";
import {getAll, create, update, remove} from './calls'
import {
  GET_USERS_SUCCESS,
  GET_USERS_REQUESTED,
  CREATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "../actions/actions_types";
// Watchers


function* fetchEmpl() {
  try {
    const empl = yield call(getAll);
    logger.info("Yielding fetch employees", empl);
    yield put({ type: GET_USERS_SUCCESS, empl });
  } catch (e) {
    yield put({ type: "REQUEST_FAILED_MESSAGE", message: e.message });
  }
}


function* createEmpl(action: any) {
  try {
    const empl = yield call(create, action.empl);
    logger.info("Yielding create employees", empl);
    yield put({ type: ADD_EMPLOYEE, empl });
  } catch (e) {
    yield put({ type: "REQUEST_FAILED_MESSAGE", message: e.message });
  }
}


function* updateEmpl(action: any) {
  try {
    let edited = {...action, salary: Number(action.salary)}
    const empl = yield call(update, edited);
    logger.info("Yielding update employees", empl);
    yield put({ type: EDIT_EMPLOYEE, empl });
  } catch (e) {
    yield put({ type: "REQUEST_FAILED_MESSAGE", message: e.message });
  }
}

function* removeEmpl(action: any) {
  try {
    const empl = yield call(remove, action.empl);
    logger.info("Yielding remove employees", empl); 
    yield put({ type: DELETE_EMPLOYEE, empl });
  } catch (e) {
    yield put({ type: "REQUEST_FAILED_MESSAGE", message: e.message });
  }
}



function* userSaga() {
  yield takeEvery(GET_USERS_REQUESTED , fetchEmpl);
  yield takeEvery(DELETE_EMPLOYEE, fetchEmpl);
  yield takeEvery(ADD_EMPLOYEE, fetchEmpl);
  yield takeEvery(EDIT_EMPLOYEE, fetchEmpl);
  yield takeEvery(CREATE_EMPLOYEE_REQUEST, createEmpl);
  yield takeEvery(UPDATE_EMPLOYEE_REQUEST, updateEmpl);
  yield takeEvery(DELETE_EMPLOYEE_REQUEST, removeEmpl);
}

export default userSaga;

// Generators
