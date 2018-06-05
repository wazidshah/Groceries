"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("email-validator");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMzQztJQUFBO0lBT0EsQ0FBQztJQUpHLDJCQUFZLEdBQVo7UUFFSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZhbGlkYXRvciA9IHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3JcIik7XHJcbmV4cG9ydCBjbGFzcyBVc2Vye1xyXG4gICAgZW1haWw6U3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6U3RyaW5nO1xyXG4gICAgaXNWYWxpZEVtYWlsKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMuZW1haWwpO1xyXG4gICAgfVxyXG59Il19