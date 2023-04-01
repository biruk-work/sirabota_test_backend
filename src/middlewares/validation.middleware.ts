import { Schema } from 'yup'
import { Request, Response, NextFunction } from 'express'

const Validation =
    (schema: Schema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { body } = req
            await schema.validate(body)
            return next()
        } catch (err) {
            return res.json({ validationErr: err, statusCode: 400 })
        }
    }

export default Validation
