import { Employee } from '../types/types'
import { AppActions } from './actions_types'

export const addEmployee = (empl: Employee): AppActions => ({
    type: "ADD_EMPLOYEE",
    empl
})

export const editEmployee = (empl: Employee): AppActions => ({
    type: "EDIT_EMPLOYEE",
    empl
})

export const removeEmployee = (id: string): AppActions => ({
    type: "DELETE_EMPLOYEE",
    id
})

export const allEmployees = (): AppActions => ({
    type: "GET_USERS_REQUESTED",
})

export const requestSuccessfull = (empl: Employee[]): AppActions => ({
    type: "GET_USERS_SUCCESS",
    empl
})

export const successMessage = (message: string): AppActions => ({
    type: 'REQUEST_SUCCESS_MESSAGE',
    message
})

export const createRequest = (empl: Employee): AppActions => ({
    type: 'CREATE_EMPLOYEE_REQUEST',
    empl

})

export const editRequest = (empl: Employee): AppActions => ({
  type: "UPDATE_EMPLOYEE_REQUEST",
  empl
});

export const deleteRequest = (empl: Employee): AppActions => ({
  type: "DELETE_EMPLOYEE_REQUEST",
  empl
});

export const errorMessage = (error: string): AppActions => ({
    type: "REQUEST_FAILED_MESSAGE",
    error
})

