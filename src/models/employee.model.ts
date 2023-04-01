import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
})

export const Employee = mongoose.model('Employee', employeeSchema)
