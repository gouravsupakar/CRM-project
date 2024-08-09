import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Others"],
        required: true
    },

    salary: {
        type: String,
        required: true
    }
});

export const User = mongoose.model("User", userSchema);