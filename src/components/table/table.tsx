import React, {FC } from "react";
import Row from "./row";
import { Employee } from "../../redux/types/types";
import {logger} from '../../redux/utils/logger'
import Tables from './table.style'
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

        {props.empl && props.empl.map((empl: Employee, i: number) => (
          <Row
            empl = {empl}
            index = {i}
          />
        ))}
        {props.empl === undefined && <div>Issue loading the tables</div> }
      </tbody>
    </Tables>
  );
}


export default Table;
