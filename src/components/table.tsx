import React, { FC } from "react";
import styled from "styled-components";
import Row from "./row";
import { Employee } from "../redux/types";
// TODO Add the state to be looped

interface Props {
  employees: Employee[];
}

const Table: FC<Props> = ({ employees }: Props) => {

  console.log("Table Props ", employees);

  return (
    <Tables>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date of birth</th>
          <th>Gender</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((empl: Employee, i: number) => (
          <Row
            empl = {empl}
            index = {i}
          />
        ))}
      </tbody>
    </Tables>
  );
}

const Tables = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin: auto;
  empty-cells: show;
  border: 1px solid #cbcbcb;
  width: 50%;
  th,
  td {
    // border: 1px solid black;
    padding-right: 10px;
    padding-left: 10px;
    text-align: center;
  }
`;



export default Table;
