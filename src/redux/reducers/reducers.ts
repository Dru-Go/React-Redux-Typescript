import { Employee } from "../types/types";
import {
  AppActions,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
  REQUEST_FAILED_MESSAGE,
  GET_USERS_SUCCESS,
} from "../actions/actions_types";

interface State {
  state: Employee[];
  loading: boolean;
}

const initialState: any = [];

console.log("InitialState", initialState);

const EmployeeReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      state.push(action.empl)
      return state

    case EDIT_EMPLOYEE:
      return state.map((empl: Employee) => {
        if (empl.name === action.empl.name)
          return { ...empl, ...action.empl };
        else return empl;
      });

    case DELETE_EMPLOYEE:
      return state.filter((empl: Employee) => empl._id !== action.id )

    case GET_USERS_SUCCESS:
      state = action.empl
      return state

    case REQUEST_FAILED_MESSAGE:
      return state

    default:
      return state;
  }
};

export default EmployeeReducer;
