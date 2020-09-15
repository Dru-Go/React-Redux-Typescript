import React, { Dispatch } from 'react'
import { useDispatch } from 'react-redux';
import { RemoveAction } from '../redux/actions_types'
import { Modal } from './modal/modal';
import { useModal } from './modal/useModal';
import { Form } from './forms/editForm'
import { Employee } from '../redux/types'
interface Props {
    empl: Employee,
    index: number
}

const Row: React.FC<Props> = ({empl, index}: Props) => {
    console.log("Props in rows",{index, empl});

    const Dispatcher = useDispatch<Dispatch<RemoveAction>>();
    const { isShown, toggle } = useModal();
    const content = <><Form empl={empl} close={toggle} /></>;

    const handleClick = () => {
        Dispatcher({ type: 'DELETE_EMPLOYEE', id: empl._id })
    }

    return (
        <tr>
            <Modal isShown={isShown} headerText="Edit" hide={toggle} modalContent={content} />
            <td>{index}</td>
            <td>{empl.name}</td>
            <td>{empl.date_of_birth}</td>
            <td>{empl.gender}</td>
            <td>{empl.salary}</td>
            <td><div onClick={toggle}>Edit</div></td>
            <td><div onClick={handleClick}>Delete</div></td>
        </tr>
    )
}

export default Row
