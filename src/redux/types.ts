export interface Employee {
    _id: string
    name: string
    date_of_birth: string
    gender: GenderEnum
    salary: string
}


export enum GenderEnum {
    female = "female",
    male = "male"
}
