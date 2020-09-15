import React from 'react'
import { Modal } from './modal/modal';
import { useModal } from './modal/useModal';
import { Form } from './forms/newForm'
export default function New() {
    const { isShown, toggle } = useModal();
    const content = <><Form close={toggle} /></>;
    return (
        <div>
            <Modal isShown={isShown} headerText="New" hide={toggle} modalContent={content} />
            <div onClick={toggle}>New</div>
        </div>
    )
}
