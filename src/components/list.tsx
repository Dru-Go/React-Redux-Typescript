import React, { FC } from 'react'
import Row from './row'

interface Employee {
    name: string,
    date_of_birth: string,
    gender: string,
    salary: number
}

interface Props {
    employees: Employee[] | null
}

const List: FC<Props> = ({ employees }) => {

    if (employees === null)
        return null

    return (
        <tbody>
            {
                employees.map((empl: Employee, i: number) =>
                    <Row index={i} {...empl} />
                )
            }
        </tbody>
    )
}

export default List