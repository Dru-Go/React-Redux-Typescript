import React from "react";
import deleteSVG from "./assets/delete.svg";
import {DeleteStyled} from './buttons'
function Delete() {
  return (
    <DeleteStyled>
      <img src={deleteSVG} alt="Delete svg" />
    </DeleteStyled>
    )
}

export default Delete;
