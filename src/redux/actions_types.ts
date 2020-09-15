import { Employee } from "./types"

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE' 
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE' 
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'

export const REQUEST_EMPLOYEE_DATA = 'LOAD_EMPLOYEE_DATA'
export const REQUEST_SUCCESS = 'LOAD_SUCCESS'
export const REQUEST_FALIURE = 'LOAD_FALIURE'

export interface AddAction {
    type: typeof ADD_EMPLOYEE;
    employee: Employee;
}

export interface EditAction {
    type: typeof EDIT_EMPLOYEE;
    empl: Employee;
}

export interface RemoveAction {
    type: typeof DELETE_EMPLOYEE;
    id: string;
}

export interface RequestData {
    type: typeof REQUEST_EMPLOYEE_DATA;
}

export interface RequestDataSuccess {
    type: typeof REQUEST_SUCCESS;
    message: string
}

export interface RequestDataFaliure {
    type: typeof REQUEST_FALIURE;
    error: string
}

export type EmployeeActionTypes = AddAction | EditAction | RemoveAction  // | more . . .

export type ApiActionTypes = RequestData | RequestDataSuccess | RequestDataFaliure

export type AppActions = EmployeeActionTypes | ApiActionTypes // | more . . .