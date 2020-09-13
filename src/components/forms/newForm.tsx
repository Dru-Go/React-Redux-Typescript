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
    close: () => void
}

export function Form(props: Props) {
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
                    <input name="name" ref={register}  />
                </div>
                <div>
                    <label>Birth date</label>
                    <input name="date_of_birth" ref={register} type="date"  />
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