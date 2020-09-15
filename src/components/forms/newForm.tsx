import React, { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { AddAction } from '../../redux/actions_types'
import { Employee } from "../../redux/types"


interface Props {
    close: () => void
}

export function Form({close}: Props) {
    const Dispatcher = useDispatch<Dispatch<AddAction>>();

    const { register, handleSubmit } = useForm<Employee>();

    const onSubmit = (employee: Employee) => {
        console.log(employee)
        close();
        Dispatcher({ type: 'ADD_EMPLOYEE', employee })
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input name="name" ref={register} />
                </div>
                <div>
                    <label>Birth date</label>
                    <input name="date_of_birth" ref={register} type="date" />
                </div>
                <div>
                    <label>Gender</label>
                    <select name="gender" ref={register}>
                        <option value="female">female</option>
                        <option value="male" >male</option>
                    </select>
                </div>
                <div>
                    <label>Salary</label>
                    <input name="salary" ref={register} />
                </div>
                <input type="submit" />
            </form>
        </>
    );
}