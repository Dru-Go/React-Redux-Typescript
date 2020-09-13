import React from 'react'
import Table from './components/table'
import { Modal } from './components/modal/modal';
import { useModal } from './components/modal/useModal';
import {Form } from './components/forms/newForm'
interface HomePageProps{
    name?: string
    date_of_birth?:string
    gender?:string
    salary?:number
}

interface HomePageState{}

const Home = () => {
    const { isShown, toggle } = useModal();
    const content = <><Form close={toggle}/></>;

    return (
        <>
            <Table/>
            <Modal isShown={isShown} headerText="New" hide={toggle} modalContent={content} />
            <div onClick={toggle}>New</div>
        </>
    ); 
}

export default Home
