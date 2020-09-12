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

export const removeEmployee = (id: string) : AppActions => ({
    type: "DELETE_EMPLOYEE",
    id
})