var validator = require("email-validator");
export class User{
    email:String;
    password:String;
    isValidEmail()
    {
        return validator.validate(this.email);
    }
}