"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/operator/catch");
require("rxjs/operator/map");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
var GroceryListService = /** @class */ (function () {
    function GroceryListService(http) {
        this.http = http;
        this.baseUrl = config_1.Config.apiUrl + "appdata/" + config_1.Config.appKey + "/Groceries";
    }
    GroceryListService.prototype.load = function () {
        var params = new http_1.URLSearchParams();
        params.append("sort", "{\"_kmd.lmt\":1}");
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var groceryList = [];
            data.forEach(function (grocery) {
                groceryList.push(new grocery_1.Grocery(grocery._id, grocery.Name));
            });
            return groceryList;
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.add = function (name) {
        return this.http.post(this.baseUrl, JSON.stringify({ Name: name }), { headers: this.getCommonHeaders() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return new grocery_1.Grocery(data._id, name);
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Kinvey " + config_1.Config.token);
        return headers;
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    GroceryListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GroceryListService);
    return GroceryListService;
}());
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzQ0FBb0U7QUFDcEUsOENBQTJDO0FBQzNDLCtCQUE2QjtBQUM3Qiw2QkFBMkI7QUFFM0Isb0NBQWlDO0FBQ2pDLHFDQUFrQztBQUdsQztJQUdJLDRCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUY3QixZQUFPLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBQyxVQUFVLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBRSxZQUFZLENBQUM7SUFFbEMsQ0FBQztJQUVoQyxpQ0FBSSxHQUFKO1FBRUksSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLE1BQU0sRUFBQyxNQUFNO1NBQ2hCLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFNUQsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFHLEdBQUgsVUFBSSxJQUFXO1FBRVgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFDM0IsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FDcEM7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3BCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxNQUFNLENBQUMsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFuRE0sa0JBQWtCO1FBRDlCLGlCQUFVLEVBQUU7eUNBSWdCLFdBQUk7T0FIcEIsa0JBQWtCLENBb0Q5QjtJQUFELHlCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsSGVhZGVycyxVUkxTZWFyY2hQYXJhbXMsUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0dyb2Nlcnl9IGZyb20gXCIuL2dyb2NlcnlcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyb2NlcnlMaXN0U2VydmljZXtcclxuICAgIGJhc2VVcmwgPSBDb25maWcuYXBpVXJsK1wiYXBwZGF0YS9cIiArIENvbmZpZy5hcHBLZXkgK1wiL0dyb2Nlcmllc1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKXt9XHJcblxyXG4gICAgbG9hZCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKFwic29ydFwiLFwie1xcXCJfa21kLmxtdFxcXCI6MX1cIik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCx7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpLFxyXG4gICAgICAgICAgICBwYXJhbXM6cGFyYW1zXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5tYXAoZGF0YT0+e1xyXG4gICAgICAgICAgICBsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGdyb2NlcnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3JvY2VyeUxpc3QucHVzaChuZXcgR3JvY2VyeShncm9jZXJ5Ll9pZCxncm9jZXJ5Lk5hbWUpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG5hbWU6U3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgICAgICAgdGhpcy5iYXNlVXJsLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7TmFtZTpuYW1lfSksXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOnRoaXMuZ2V0Q29tbW9uSGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAubWFwKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAubWFwKGRhdGE9PntcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHcm9jZXJ5KGRhdGEuX2lkLG5hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiS2ludmV5IFwiICsgQ29uZmlnLnRva2VuKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgIH1cclxufSJdfQ==