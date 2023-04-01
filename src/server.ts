import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import EmployeeRoute from './routes/employee.route'
import logger from './helpers/logger.helper'

const PORT: number = Number(process.env.PORT) || 4000
const MONGODB_URI = process.env.MONGODB_URI

const app = express()

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use((_req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')

    next()
})

app.use('/api/employees/', EmployeeRoute)

mongoose
    .connect(MONGODB_URI)
    .then(() => logger.info(`Connected to MongoDB database at ${MONGODB_URI}`))
    .catch((err) => logger.error(`Failed to connect to database: ${err}`))

app.listen(PORT, () => {
    logger.info(`Server started on port: ${PORT}`)
})
