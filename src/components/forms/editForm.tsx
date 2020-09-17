import React, { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { EditAction } from '../../redux/actions/actions_types'
import { Employee } from "../../redux/types/types"

interface Props {
   empl: Employee
    close: () => void
}

export function Form({empl, close}: Props) {
    const Dispatcher = useDispatch<Dispatch<EditAction>>();

    const { register, handleSubmit } = useForm<Employee>();

    const onSubmit = (employee: Employee) => {
        console.log(employee);
        const emp: Employee = {
            _id: empl._id,
            name: employee.name !== '' ? employee.name : empl.name,
            date_of_birth: employee.date_of_birth !== '' ? employee.date_of_birth : empl.date_of_birth,
            gender: employee.gender,
            salary: employee.salary !== '' ? employee.salary.$numberDecimal : empl.salary.$numberDecimal
        }

        console.log(emp);
        close(); // Closes the modal
        Dispatcher({ type: 'EDIT_EMPLOYEE', empl: emp })
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input name="name" ref={register} placeholder={empl.name} />
                </div>
                <div>
                    <label>Birth date</label>
                    <input name="date_of_birth" ref={register} type="date" placeholder={empl.date_of_birth} />
                </div>
                <div>
                    <label>Gender</label>
                    <select name="gender" ref={register}>
                        <option value="female" selected={empl.gender === 'female'}>female</option>
                        <option value="male" selected={empl.gender === 'male'}>male</option>
                    </select>
                </div>
                <div>
                    <label>Salary</label>
                    <input name="salary" ref={register} placeholder={empl.salary.$numberDecimal.toString()} />
                </div>
                <input type="submit" />
            </form>
        </>
    );
}