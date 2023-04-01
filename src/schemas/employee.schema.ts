import { object, number, string } from 'yup'

export const CreateEmployeeSchema = object({
    salary: number().required(),
    gender: string().oneOf(['male', 'female']).required(),
    dateOfBirth: string().required(),
    name: string().required(),
})

export const UpdateEmployeeSchema = object({
    salary: number().required(),
    gender: string().oneOf(['male', 'female']).required(),
    dateOfBirth: string().required(),
    name: string().required(),
})
