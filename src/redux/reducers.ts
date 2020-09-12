import { Employee } from "./types";
import { EmployeeActionTypes , ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE} from "./actions_types";

 const initialState: Employee[] = [
     {
         name: "Toys",
         date_of_birth: "12/34/21",
         gender: "male",
         salary: 123
     },
     {
         name: "Poys",
         date_of_birth: "12/34/21",
         gender: "female",
         salary: 1223
     },
     {
         name: "Koys",
         date_of_birth: "12/34/21",
         gender: "male",
         salary: 123
     }
 ]

const EmployeeReducer = (state = initialState, action: EmployeeActionTypes): Employee[] => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            console.log(state)
            return [...state, action.employee]
        
        case EDIT_EMPLOYEE:
            return state.map(empl => {
                if(empl.name === action.employee.name)
                    return {...empl, ...action.employee}
                else 
                    return empl
            })

        case DELETE_EMPLOYEE:
            return state.filter((empl => empl.name !== action.name))
        
        default:
            return state;
    }
 } 

 export default EmployeeReducer;