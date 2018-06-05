"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post(config_1.Config.apiUrl + "user/" + config_1.Config.appKey, JSON.stringify({
            username: user.email,
            email: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .catch(this.handleErrors);
    };
    UserService.prototype.login = function (user) {
        return this.http.post(config_1.Config.apiUrl + "user/" + config_1.Config.appKey + "/login", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            config_1.Config.token = data._kmd.authtoken;
        })
            .catch(this.handleErrors);
    };
    UserService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", config_1.Config.authHeader);
        return headers;
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFvRDtBQUNwRCw4Q0FBMkM7QUFDM0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFHL0Isb0NBQWlDO0FBR2pDO0lBRUkscUJBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUUsQ0FBQztJQUVoQyw4QkFBUSxHQUFSLFVBQVMsSUFBUztRQUVkLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDZCxlQUFNLENBQUMsTUFBTSxhQUFRLGVBQU0sQ0FBQyxNQUFRLEVBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDWCxRQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUs7WUFDbkIsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2hCLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUTtTQUN6QixDQUFDLEVBQ0YsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FDckM7YUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBUztRQUVYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDZCxlQUFNLENBQUMsTUFBTSxhQUFRLGVBQU0sQ0FBQyxNQUFNLFdBQVEsRUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNYLFFBQVEsRUFBQyxJQUFJLENBQUMsS0FBSztZQUNuQixRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVE7U0FDekIsQ0FBQyxFQUNGLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLENBQ3JDO2FBQ0EsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxFQUFFLENBQUMsVUFBQSxJQUFJO1lBQ0osZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN0QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEI7UUFFSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFjO1FBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBL0NRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHZ0IsV0FBSTtPQUZwQixXQUFXLENBZ0R2QjtJQUFELGtCQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLEhlYWRlcnMsUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe31cclxuXHJcbiAgICByZWdpc3Rlcih1c2VyOlVzZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICAgICAgICBgJHtDb25maWcuYXBpVXJsfXVzZXIvJHtDb25maWcuYXBwS2V5fWAsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDp1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6dXNlci5wYXNzd29yZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAge2hlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKHVzZXI6VXNlcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIGAke0NvbmZpZy5hcGlVcmx9dXNlci8ke0NvbmZpZy5hcHBLZXl9L2xvZ2luYCxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6dXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOnVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKX1cclxuICAgICAgICApXHJcbiAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLmRvKGRhdGE9PntcclxuICAgICAgICAgICAgQ29uZmlnLnRva2VuID0gZGF0YS5fa21kLmF1dGh0b2tlblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21tb25IZWFkZXJzKClcclxuICAgIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIixcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsQ29uZmlnLmF1dGhIZWFkZXIpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjpSZXNwb25zZSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=