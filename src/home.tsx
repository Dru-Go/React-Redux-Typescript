import React from 'react'
import { Modal } from './components/modal/modal';
import { useModal } from './components/modal/useModal';


function Home() {
    const { isShown, toggle } = useModal();
    const content = <>Hey, I'm a model.</>;
    return (
        <>
            <button onClick={toggle}>Open modal</button>
            <Modal isShown={isShown} headerText="Header" hide={toggle} modalContent={content} />
        </>
    ); 
}

export default Home
