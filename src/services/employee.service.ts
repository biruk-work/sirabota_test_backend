import { Employee } from '../models/employee.model'

import logger from '../helpers/logger.helper'

const EmployeeService = {
    CreateEmployee: async (employee: {
        name: string
        dateOfBirth: String
        gender: string
        salary: number
    }) => {
        try {
            const newEmployee = new Employee(employee)
            return await newEmployee.save()
        } catch (err) {
            return logger.error(err)
        }
    },
    GetEmployees: async () => {
        try {
            return await Employee.find()
        } catch (err) {
            return logger.error(err)
        }
    },
    UpdateEmployee: async (
        id: string,
        employee: {
            name: string
            dateOfBirth: String
            gender: string
            salary: number
        }
    ) => {
        try {
            const filter = { _id: id }
            const update = employee
            return await Employee.updateOne(filter, update)
        } catch (err) {
            return logger.error(err)
        }
    },
    DeleteEmployee: async (id: string) => {
        try {
            const filter = { _id: id }
            return await Employee.deleteOne(filter)
        } catch (err) {
            return logger.error(err)
        }
    },
}

export default EmployeeService
