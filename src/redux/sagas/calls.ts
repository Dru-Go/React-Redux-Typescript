import * as Api from "../services/services";
import { Employee } from "../types/types";
import { logger } from "../utils/logger";

export const getAll = () => {
  return Api.all().then((res) => {
    const employees: Employee[] = [...res];
    logger.info("Promices ", employees);
    return employees;
  });
};

export const create = (empl: Employee) => {
  return Api.create(empl).then((res) => {
    const employee = res;
    logger.info("Created Employee ", employee);
    return employee;
  });
};

export const update = (empl: Employee) => {
  return Api.edit(empl).then((res) => {
    const employee = res;
    logger.info("Updated Employee ", employee);
    return employee;
  });
};

export const remove = (empl: Employee) => {
  return Api.remove(empl._id).then((res) => {
    const employee = res;
    logger.info("Deleted Employee ", employee);
    return employee;
  });
};
