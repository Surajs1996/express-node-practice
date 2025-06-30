const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minLength: 4,
        maxlength: 50
    },
    emailId: {
        type: String,
        lowerCase: true,
        required: true,
        trim: true,
        unique: true, 
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email Id is not valid");
            };
        }
    },
    password: {
        type: String,
        required: true, 
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Please enter strong password");
            };
        }
    },
    gender: {
        type: String,
        validate(value) {
            if (!["male", "female", "other"].includes(value)) {
                throw new Error("Gender data is not proper");
            }
        }
    },
    dateOfBirth: {
        type: Date,
    },
    skills: {
        type: [String]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);