import axios from "axios";
import { Employee } from "../types/types";

interface ServerResponse {
  data: Employee[];
}

const URL = "https://employee-crud-api-1.herokuapp.com/users";

export const all = () => {
  return axios
    .request({ url: URL, method: "GET" })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const create = async (empl: Employee) => {
  return axios
    .request({ url: URL, method: "POST", data: empl })
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};
export const edit = async (empl: Employee) => {
  return axios
    .request({ url: URL, method: "PUT", data: empl })
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
};

export const remove = (id: string) => {
  return axios
    .request({ url: URL, method: "DELETE", data: { id } })
    .then((res) => res.data)
    .catch(function (error) {
      console.log(error);
    });
};
