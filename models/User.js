import mongoose from 'mongoose'
import validator from "validator";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please provide name'],
        minLength: 3,
        maxLength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate:{
            validator:validator.isEmail, // don't invoke it here !
            message:"Please provide a valid email"
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minLength: 6,
    },
})

export default mongoose.model('User', UserSchema)