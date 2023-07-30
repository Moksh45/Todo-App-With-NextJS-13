import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select:false,
        minLength:[8,"Passwords must be at least 8 characters long"]
    },
}) 

mongoose.model = {};

export const User = mongoose.model("User", schema)