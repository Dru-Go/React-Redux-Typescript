import React from 'react'

interface Props {
    index: number,
    name: string,
    date_of_birth: string,
    gender: string,
    salary: number
}

const Row: React.FC<Props> = ({
    index,
    name,
    date_of_birth,
    gender,
    salary
}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{date_of_birth}</td>
            <td>{gender}</td>
            <td>{salary}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    )
}

export default Row
