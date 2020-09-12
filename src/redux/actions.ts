import { Employee } from './types'
import { AppActions } from './actions_types'

export const addEmployee = (employee: Employee) : AppActions => ({
    type: "ADD_EMPLOYEE",
    employee 
})

export const editEmployee = (employee: Employee) : AppActions => ({
    type: "EDIT_EMPLOYEE",
    employee
})

export const removeEmployee = (name: string) : AppActions => ({
    type: "DELETE_EMPLOYEE",
    name
})