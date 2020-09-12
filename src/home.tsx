import React from 'react'
import { Modal } from './components/modal/modal';
import { useModal } from './components/modal/useModal';
import Table from './components/table'

interface HomePageProps{
    name?: string
    date_of_birth?:string
    gender?:string
    salary?:number
}

interface HomePageState{}

const Home = () => {
    const { isShown, toggle } = useModal();
    const content = <>Hey, I'm a model.</>;
    return (
        <>
            <button onClick={toggle}>Open modal</button>
            <Table/>
            <Modal isShown={isShown} headerText="Header" hide={toggle} modalContent={content} />
        </>
    ); 
}

export default Home
