import { Employee } from './types'
import { AppActions } from './actions_types'

export const addEmployee = (employee: Employee) : AppActions => ({
    type: "ADD_EMPLOYEE",
    employee 
})

export const editEmployee = (empl: Employee) : AppActions => ({
    type: "EDIT_EMPLOYEE",
    empl
})

export const removeEmployee = (id: string) : AppActions => ({
    type: "DELETE_EMPLOYEE",
    id
})

export const allEmployees = (): AppActions => ({
    type: "LOAD_EMPLOYEE_DATA",
})

export const requestSuccessfull = (message: string): AppActions => ({
    type: "LOAD_SUCCESS",
    message
})

export const requestFaliure = (error: string): AppActions => ({
    type: "LOAD_FALIURE",
    error
})