import React, {Dispatch} from 'react'
import { useDispatch } from 'react-redux';
import {RemoveAction} from '../redux/actions_types'
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

const Dispatcher = useDispatch<Dispatch<RemoveAction>>();

    const handleClick = () => {
        Dispatcher({type: 'DELETE_EMPLOYEE', name})
    }

    return (
        <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{date_of_birth}</td>
            <td>{gender}</td>
            <td>{salary}</td>
            <td>Edit</td>
            <td><div onClick={handleClick}>Delete</div></td>
        </tr>
    )
}

export default Row
