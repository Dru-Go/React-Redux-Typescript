import React, { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { EditRequest } from "../../redux/actions/actions_types";
import { Employee } from "../../redux/types/types";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledSelect
} from "./forms.styles";

interface Props {
  empl: Employee;
  close: () => void;
}

export function Form({ empl, close }: Props) {
  const Dispatcher = useDispatch<Dispatch<EditRequest>>();

  const { register, handleSubmit } = useForm<Employee>();

  const onSubmit = (employee: Employee) => {
    console.log("Editing Employee ", employee);
    const emp: Employee = {
      _id: empl._id,
      name: employee.name !== "" ? employee.name : empl.name,
      date_of_birth:
        employee.date_of_birth !== ""
          ? employee.date_of_birth
          : empl.date_of_birth,
      gender: employee.gender,
      salary:
        employee.salary !== ""
          ? employee.salary.$numberDecimal
          : empl.salary.$numberDecimal,
    };

    console.log(emp);
    close(); // Closes the modal
    Dispatcher({ type: "UPDATE_EMPLOYEE_REQUEST", empl: emp });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <StyledInput name="name" ref={register} placeholder={empl.name} />
        </div>
        <div>
          <label>Birth date</label>
          <StyledInput
            name="date_of_birth"
            ref={register}
            type="date"
            placeholder={empl.date_of_birth}
          />
        </div>
        <div>
          <label>Gender</label>
          <StyledSelect name="gender" ref={register}>
            <option value="female" selected={empl.gender === "female"}>
              female
            </option>
            <option value="male" selected={empl.gender === "male"}>
              male
            </option>
          </StyledSelect>
        </div>
        <div>
          <label>Salary</label>
          <StyledInput
            name="salary"
            ref={register}
            placeholder={empl.salary.$numberDecimal.toString()}
          />
        </div>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
}
