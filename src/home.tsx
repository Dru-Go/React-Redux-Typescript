import React, { Dispatch, useEffect, FC } from "react";
import { connect } from "react-redux";
import { Employee } from "./redux/types/types";
import New from "./components/buttons/new";
import Table from "./components/table/table";
import {logger} from './redux/utils/logger'
import { AppState } from "./redux/store/store";
import { AppActions } from "./redux/actions/actions_types";
import styled from 'styled-components'
import { typeScale, primaryFont } from './utils/typography'
import {
  addEmployee,
  editEmployee,
  removeEmployee,
  allEmployees,
} from "./redux/actions/actions";

const Home: FC = (props: any) => {

  useEffect(() => {
    logger.info("Dispatching from Home")
    props.fetchEmployees();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  console.log("Home State", props);
  return (
    <>
    <Header>Employes Management</Header>
      <Table empl={props.employees} loading={false} />
      <New />
    </>
  );
};

const Header = styled.div`
  font-size: ${typeScale.header4};
  font-type: ${primaryFont};
  text-align: center;
  margin-top: 30px;
`

const mapStateToProps = (state: AppState) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => {
  return {
    fetchEmployees: () => dispatch(allEmployees()),
    create: (empl: Employee) => dispatch(addEmployee(empl)),
    update: (empl: Employee) => dispatch(editEmployee(empl)),
    remove: (id: string) => dispatch(removeEmployee(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
