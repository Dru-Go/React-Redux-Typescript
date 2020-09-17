import axios from 'axios'
import { Employee } from '../types/types'

interface ServerResponse {
    data: Employee[]
}

export const all = () => {
    return axios.request({ url: `http://localhost:4000/users`, method: 'GET' })
        .then((res) => {
            return res.data
            })
        .catch((err) => console.log(err))
}


export const create = async (empl: Employee) => {
    return axios.request({ url: 'http://localhost:4000/users', method: 'POST', data: empl })
        .then((res) => { return res.data })
        .catch((error) => console.log(error))
}
export const edit = async (empl: Employee) => {
    return axios.request({ url: 'http://localhost:4000/users', method: 'PUT', data: empl })
        .then((res) => { return res.data })
        .catch((error) => console.log(error))
}

export const remove = (id: string) => {
    return axios.request({ url: `http://localhost:4000/users`, method: 'DELETE', data: {id}})
        .then((res) => res.data)
        .catch(function (error) {
            console.log(error);
        })

}