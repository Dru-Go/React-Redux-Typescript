import { Employee } from "./types";
import { AppActions, ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE, REQUEST_EMPLOYEE_DATA } from "./actions_types";
import { all, create } from './services'

const initialState: Employee[] = []

console.log("InitialState", initialState)

const EmployeeReducer = (state = initialState, action: AppActions): Employee[] => {

    switch (action.type) {
        case ADD_EMPLOYEE:
            create(action.employee)
            return [...state, action.employee]

        case EDIT_EMPLOYEE:
            return state.map(empl => {
                if (empl._id === action.empl._id)
                    return { ...action.empl }
                else
                    return empl
            })

        case DELETE_EMPLOYEE:
            return state.filter((empl => empl._id !== action.id))
        
        case REQUEST_EMPLOYEE_DATA:
            getAll(state)
            return state

        default:
            return state;
    }
}


const getAll = async (init: Employee[]) => {
    const employees: Employee[] = []
    await all().then((res) => {
        employees.push(...res)
        console.log("Promices ", employees)
        init.push(...employees)
    })
}

export default EmployeeReducer;