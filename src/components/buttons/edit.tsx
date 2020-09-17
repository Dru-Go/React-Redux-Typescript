import React from "react";
import editSVG from "./assets/edit.svg";
import { Modal } from "../modal/modal";
import { Form } from "../forms/newForm";
import { useModal } from "../modal/useModal";
import {EditStyled} from './buttons'
function Edit() {
  const { isShown, toggle } = useModal();
  const content = (
    <>
      <Form close={toggle} />
    </>
  );
  return (
    <EditStyled>
      <Modal
        isShown={isShown}
        headerText="New"
        hide={toggle}
        modalContent={content}
      />
      <img src={editSVG} alt="edit svg" />
    </EditStyled>
  );
}

export default Edit;
