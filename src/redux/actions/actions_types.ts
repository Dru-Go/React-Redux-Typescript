import { Employee } from "../types/types"

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE'
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'

export const GET_USERS_REQUESTED = 'GET_USERS_REQUESTED';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const REQUEST_SUCCESS_MESSAGE = 'REQUEST_SUCCESS_MESSAGE'
export const REQUEST_FAILED_MESSAGE = 'REQUEST_FAILED_MESSAGE'

export const CREATE_EMPLOYEE_REQUEST = 'CREATE_EMPLOYEE_REQUEST';
export const UPDATE_EMPLOYEE_REQUEST = 'UPDATE_EMPLOYEE_REQUEST';
export const DELETE_EMPLOYEE_REQUEST = 'DELETE_EMPLOYEE_REQUEST';

export interface AddAction {
    type: typeof ADD_EMPLOYEE;
    empl: Employee;
}

export interface EditAction {
    type: typeof EDIT_EMPLOYEE;
    empl: Employee;
}

export interface RemoveAction {
    type: typeof DELETE_EMPLOYEE;
    id: string;
}

export interface RequestEmployees {
    type: typeof GET_USERS_REQUESTED;
}
export interface RequestEmployeeSuccess {
    type: typeof GET_USERS_SUCCESS;
    empl: any
}

export interface RequestSuccessfull {
    type: typeof REQUEST_SUCCESS_MESSAGE;
    message: string
}
export interface CreateRequest {
  type: typeof CREATE_EMPLOYEE_REQUEST;
  empl: Employee
}
export interface EditRequest {
  type: typeof UPDATE_EMPLOYEE_REQUEST;
  empl: Employee
}
export interface DeleteRequest {
  type: typeof DELETE_EMPLOYEE_REQUEST;
  empl: Employee
}

export interface RequestFaliure {
    type: typeof REQUEST_FAILED_MESSAGE;
    error: string
}

export type EmployeeActionTypes = AddAction | EditAction | RemoveAction | RequestEmployeeSuccess | RequestEmployees// | more . . .


export type ApiActionTypes = CreateRequest | EditRequest | DeleteRequest | RequestFaliure | RequestSuccessfull

export type AppActions = EmployeeActionTypes | ApiActionTypes // | more . . .