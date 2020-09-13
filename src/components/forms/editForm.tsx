import React from "react";
import { useForm } from "react-hook-form";

export enum GenderEnum {
    female = "female",
    male = "male"
}

interface IFormInput {
    name: string;
    date_of_birth: string | Date;
    gender: GenderEnum;
    salary: number;
}

interface Props {
    name: string;
    date_of_birth: string;
    gender: GenderEnum;
    salary: number;
    close: () => void
}

export function Form(props: Props | null) {
    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        console.log(data)
        props?.close();
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input name="name" ref={register} placeholder={props?.name} />
                </div>
                <div>
                    <label>Birth date</label>
                    <input name="date_of_birth" ref={register} type="date" placeholder={props?.date_of_birth} />
                </div>
                <div>
                    <label>Gender</label>
                    <select name="gender" ref={register}>
                        <option value="female" selected={props?.gender === 'female'}>female</option>
                        <option value="male" selected={props?.gender === 'male'}>male</option>
                    </select>
                </div>
                <div>
                    <label>Salary</label>
                    <input name="salary" ref={register} placeholder={props?.salary.toString()} />
                </div>
                <input type="submit" />
            </form>
        </>
    );
}