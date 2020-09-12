import { Employee } from "./types"

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE' 
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE' 
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'

export interface AddAction {
    type: typeof ADD_EMPLOYEE;
    employee: Employee;
}

export interface EditAction {
    type: typeof EDIT_EMPLOYEE;
    employee: Employee;
}

export interface RemoveAction {
    type: typeof DELETE_EMPLOYEE;
    name: string;
}

export type EmployeeActionTypes = AddAction | EditAction | RemoveAction // | more . . .

export type AppActions = EmployeeActionTypes // | more . . .