import React from 'react'
import styled from 'styled-components'
import Row from './row';


function Table() {
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
                <Row index={1} name="Burra" date_of_birth="12/30/20" gender="M" salary={1200} />
                <Row index={2} name="Burra" date_of_birth="12/30/20" gender="M" salary={1200} />
                <Row index={3} name="Burra" date_of_birth="12/30/20" gender="M" salary={1200} />
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
