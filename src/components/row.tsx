import React, {Dispatch} from 'react'
import { useDispatch } from 'react-redux';
import {RemoveAction} from '../redux/actions_types'
import { Modal } from './modal/modal';
import { useModal } from './modal/useModal';
import {Form, GenderEnum} from './forms/editForm'
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
    const { isShown, toggle } = useModal();
    const content = <><Form name={name} date_of_birth={date_of_birth} gender={GenderEnum.male} salary={salary} close={toggle}/></>;

    const handleClick = () => {
        Dispatcher({type: 'DELETE_EMPLOYEE', name})
    }

    return (
        <tr>
            <Modal isShown={isShown} headerText="Edit" hide={toggle} modalContent={content} />
            <td>{index}</td>
            <td>{name}</td>
            <td>{date_of_birth}</td>
            <td>{gender}</td>
            <td>{salary}</td>
            <td><div onClick={toggle}>Edit</div></td>
            <td><div onClick={handleClick}>Delete</div></td>
        </tr>
    )
}

export default Row
