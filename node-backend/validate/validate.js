const validator = require("validator");

const validateSignUpdata = (req) => {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName || !lastName) {
        throw new Error("Please enter first / last name");
    } else if (!validator.isEmail(emailId)) {
        throw new Error("please enter valid email id");
    } else if (!validator.isStrongPassword(password)) {
        throw new Error("please enter strong password");
    }
}

module.exports = validateSignUpdata;