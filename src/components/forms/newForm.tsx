import React, { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CreateRequest } from "../../redux/actions/actions_types";
import { Employee } from "../../redux/types/types";
import {StyledSelect} from './forms.styles'
import {
  StyledForm,
  StyledInput,
  StyledButton,
} from "./forms.styles";

interface Props {
  close: () => void;
}

export function Form({ close }: Props) {
  const Dispatcher = useDispatch<Dispatch<CreateRequest>>();

  const { register, handleSubmit } = useForm<Employee>();

  const onSubmit = (empl: Employee) => {
    console.log(empl);
    close();
    Dispatcher({ type: "CREATE_EMPLOYEE_REQUEST", empl });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <StyledInput name="name" ref={register} />
        </div>
        <div>
          <label>Birth date</label>
          <StyledInput name="date_of_birth" ref={register} type="date" />
        </div>
        <div>
          <label>Gender</label>
          <StyledSelect name="gender" ref={register}>
            <option value="female">female</option>
            <option value="male">male</option>
          </StyledSelect>
        </div>
        <div>
          <label>Salary</label>
          <StyledInput name="salary" ref={register} />
        </div>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
}
