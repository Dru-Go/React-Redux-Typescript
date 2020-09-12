import { Employee } from "./types";
import { EmployeeActionTypes , ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE} from "./actions_types";

 const initialState: Employee[] = []

const EmployeeReducer = (state = initialState, action: EmployeeActionTypes): Employee[] => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return [...state, action.employee]
        
        case EDIT_EMPLOYEE:
            return state.map(empl => {
                if(empl.name === action.employee.name)
                    return {...empl, ...action.employee}
                else 
                    return empl
            })

        case DELETE_EMPLOYEE:
            return state.filter((empl => empl.name === action.id))
        
        default:
            return state;
    }
 } 

 export default EmployeeReducer;