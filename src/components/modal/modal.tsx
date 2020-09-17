import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import closeSVG from './assets/close.svg'
import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './modals.style';

// TODO Adding the form / confirmation message
export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}
export const Modal: FC <ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}><img src={closeSVG} alt="Close SVG"/></CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};