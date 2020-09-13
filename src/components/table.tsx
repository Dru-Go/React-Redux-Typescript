import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Row from './row';
import { AppState } from '../redux/store'
import { Employee } from '../redux/types'
// TODO Add the state to be looped 

interface Props {
    employeeState: Employee[];
    actions: any;
}


function Table(props: any) {
    const employees = useSelector((state: AppState) => state.employees);

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
                {
                    employees.map((empl, i) => <Row index={i} name={empl.name} date_of_birth={empl.date_of_birth} gender={empl.gender} salary={empl.salary} />)
                }
            </tbody>
        </Tables>
    )
}

const Tables = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    margin: auto;
    empty-cells: show;
    border: 1px solid #cbcbcb;
    width: 50%;
    th, td{
        // border: 1px solid black;
        padding-right: 10px;
        padding-left: 10px; 
        text-align: center;
    }
`

export default Table
