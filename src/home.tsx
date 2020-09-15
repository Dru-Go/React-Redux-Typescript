import React, { Dispatch, FC } from "react";
import { connect } from "react-redux";
import { Employee } from "./redux/types";
import New from './components/new'
import Table from './components/table'

import { AppState } from "./redux/store";
import { AppActions } from "./redux/actions_types";
import { addEmployee, editEmployee, removeEmployee, allEmployees } from "./redux/actions";


const Home: FC = (props: any) => {
  props.fetchEmployees()


  console.log("Home State", props);
  return (
    <>
      <Table employees={props.employees} />
      <New/>
    </>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    employees: state.employees
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => {
  return {
    fetchEmployees: () => dispatch(allEmployees()),
    create: (empl: Employee) => dispatch(addEmployee(empl)),
    update: (empl: Employee) => dispatch(editEmployee(empl)),
    remove: (id: string) => dispatch(removeEmployee(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
