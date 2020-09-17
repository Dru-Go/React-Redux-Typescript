import React, {FC } from "react";
import styled from "styled-components";
import Row from "./row";
import { Employee } from "../../redux/types/types";
import {logger} from '../../redux/actions/logger'
import colors from '../../utils/colors'
import {typeScale, primaryFont} from '../../utils/typography'
// TODO Add the state to be looped

interface Props {
  empl: Employee[];
  loading: boolean
}

const Table: FC<Props> = (props: any) => {
logger.info("Table props", props);
  return (
    <Tables>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date of birth</th>
          <th>Gender</th>
          <th>Salary</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.empl.map((empl: Employee, i: number) => (
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
  border-spacing: 0;
  margin: auto;
  empty-cells: show;
  margin-top: 20px;
  width: 50%;
  th,
  td {
    padding: 10px;
    text-align: left;
    font-type: ${primaryFont};
  }
  thead{
    background-color: ${colors.neutral_300}; 
  }
  th{
    font-size: ${typeScale.header5};
  }
  td{
    font-size: ${typeScale.paragraph}
  }
`;



export default Table;
