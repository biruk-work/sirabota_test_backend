import { Router } from 'express'

import EmployeeController from '../controllers/employee.controller'
import Validation from '../middlewares/validation.middleware'
import {
    CreateEmployeeSchema,
    UpdateEmployeeSchema,
} from '../schemas/employee.schema'

const route = Router()

route.post(
    '/create-employee',
    Validation(CreateEmployeeSchema),
    EmployeeController.CreateEmployee
)

route.get('/get-employees', EmployeeController.GetEmployees)

route.put(
    '/update-employee/:id',
    Validation(UpdateEmployeeSchema),
    EmployeeController.UpdateEmployee
)

route.delete('/delete-employee/:id', EmployeeController.DeleteEmployee)

export default route
