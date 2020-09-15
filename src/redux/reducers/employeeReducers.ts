import { Employee, GenderEnum } from "../types";
import { EmployeeActionTypes, ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE } from "../actions_types";
import { all } from '../services'

const initialState: Employee[] = [
    {
        _id: '1',
        name: "Toys",
        date_of_birth: new Date().toDateString(),
        gender: GenderEnum.male,
        salary: "123"
    },
    {
        _id: '2',
        name: "Poys",
        date_of_birth: new Date().toDateString(),
        gender: GenderEnum.female,
        salary: "1223"
    },
    {
        _id: '3',
        name: "Koys",
        date_of_birth: new Date().toDateString(),
        gender: GenderEnum.male,
        salary: "123"
    }
]


const employees = all()
console.log(employees.then((res) => res))

const EmployeeReducer = (state = initialState, action: EmployeeActionTypes): Employee[] => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            console.log(state)
            action.employee._id = (state.length + 1).toString()
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

        default:
            return state;
    }
}

export default EmployeeReducer;