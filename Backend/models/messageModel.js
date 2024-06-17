import mongoose from "mongoose";
import validator from 'validator'

const messageModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Name must contain at least 3 characters!"],
      },
      email: {
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please enter a valid email!"],
      },
      subject: {
        type: String,
        required: [true, "Subject Required!"],
        minLength: [5, "Subject must contain at least 4 characters!"],
      },
      message: {
        type: String,
        required: [true, "Message Required!"],
        minLength: [10, "Message must contain at least 10 characters!"],
      },
})

export const Message = mongoose.model("Message", messageModel);