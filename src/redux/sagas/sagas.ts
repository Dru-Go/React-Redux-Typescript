import { call, put, takeEvery } from "redux-saga/effects";
import * as Api from "../services/services";
import { Employee } from "../types/types";
import { logger } from "../actions/logger";
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

const getAll = () => {
  return Api.all().then((res) => {
    const employees: Employee[] = [...res]
    logger.info("Promices ", employees);
    return employees;
  });
};

const create = (empl: Employee) => {
  return Api.create(empl).then((res) => {
    const employee = res
    logger.info("Created Employee ", employee);
    return employee;
  });
};

const update = (empl: Employee) => {
  return Api.edit(empl).then((res) => {
    const employee = res
    logger.info("Updated Employee ", employee);
    return employee;
  });
};

const remove = (empl: Employee) => {
  return Api.remove(empl._id).then((res) => {
    const employee = res
    logger.info("Deleted Employee ", employee);
    return employee;
  });
};

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
