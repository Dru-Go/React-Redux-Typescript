import axios from 'axios'
import { Employee } from './types'

interface ServerResponse {
    data: Employee[]
}

export const all = async () => {
    return await axios.request({ url: `http://localhost:4000/users`, method: 'GET' })
        .then((res) => {
            console.log("Sevice Responce ", res.data)
            return res.data
            })
        .catch((err) => console.log(err))
}


export const create = async (empl: Employee) => {
    return axios.request<Employee, void>({ url: 'http://localhost:4000/users', method: 'POST', data: empl })
        .then((res) => { return res })
        .catch((error) => console.log(error))
}

export const edit = (empl: Employee) => {
    return axios.put(`http://localhost:4000/users${empl._id}`, empl)
        .then((res) => res)
        .catch(function (error) {
            console.log(error);
        });
}

export const remove = (id: number) => {
    return axios.delete('http://localhost:4000/users', {
        params: {
            id: id
        }
    })
        .then((res) => res)
        .catch(function (error) {
            console.log(error);
        })

}