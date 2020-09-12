
import { Dispatch } from "redux";
import { AppState } from "./store";
import {addEmployee, editEmployee, removeEmployee} from './actions'
import { Employee } from "./types";
import { AppActions } from "./actions_types";

interface Props {
    name: string;
    date_of_birth: string;
    gender: string;
    salary: number;
}

export const startAddEmpl = (emplData: Props) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        const {
            name = "Borra",
            date_of_birth = "12/34/21",
            gender = "male",
            salary = 123
        } = emplData;
        const empl = { name, date_of_birth, gender, salary };

        return dispatch(addEmployee(empl));
    };
};

export const startRemoveEmpl = (id: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(removeEmployee(id));
    };
};

export const startEditEmpl = (expense: Employee) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(editEmployee(expense));
    };
};
