import React, { FC } from 'react';
import ReactDOM from 'react-dom';
// import { GlobalStyle } from './utils';
// import Table from './components/table'
import { Modal } from './components/modal/modal';
import { useModal } from './components/modal/useModal';


const App: FC = () => {
  const { isShown, toggle } = useModal();
  const content = <>Hey, I'm a model.</>;
  return (
    <>
      <button onClick={toggle}>Open modal</button>
      <Modal isShown={isShown} headerText="Header" hide={toggle} modalContent={content} />
    </>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));