import logger from '../helpers/logger.helper'
import { Request, Response } from 'express'
import EmployeeService from '../services/employee.service'

const EmployeeController = {
    CreateEmployee: async (req: Request, res: Response) => {
        try {
            const employee: {
                name: string
                dateOfBirth: string
                gender: string
                salary: number
            } = req.body

            await EmployeeService.CreateEmployee(employee)
            const employees = await EmployeeService.GetEmployees()

            return res.json({
                message: 'Employee created successfully',
                employees,
                statusCode: 200,
            })
        } catch (err) {
            res.json({ message: 'Something went wrong', statusCode: 500 })
            logger.error(err)
        }
    },
    GetEmployees: async (_req: Request, res: Response) => {
        try {
            const employees = await EmployeeService.GetEmployees()

            return res.json({ employees, statusCode: 200 })
        } catch (err) {
            res.json({ message: 'Something went wrong', statusCode: 500 })
            logger.error(err)
        }
    },
    UpdateEmployee: async (req: Request, res: Response) => {
        try {
            console.log(req.body)

            const employee: {
                name: string
                dateOfBirth: string
                gender: string
                salary: number
            } = req.body
            const { id } = req.params

            await EmployeeService.UpdateEmployee(id, employee)
            const employees = await EmployeeService.GetEmployees()

            return res.json({
                message: 'Employee updated succesfully',
                employees,
                statusCode: 200,
            })
        } catch (err) {
            res.json({ message: 'Something went wrong', statusCode: 500 })
            logger.error(err)
        }
    },
    DeleteEmployee: async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            await EmployeeService.DeleteEmployee(id)

            return res.json({
                message: `Employee #${id} deleted successfully`,
                statusCode: 200,
            })
        } catch (err) {
            res.json({ message: 'Something went wrong', statusCode: 500 })
            logger.error(err)
        }
    },
}

export default EmployeeController
