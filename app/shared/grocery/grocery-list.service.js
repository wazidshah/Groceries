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
    GroceryListService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + "/" + id, { headers: this.getCommonHeaders() })
            .map(function (res) { return res.json(); })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzQ0FBb0U7QUFDcEUsOENBQTJDO0FBQzNDLCtCQUE2QjtBQUM3Qiw2QkFBMkI7QUFFM0Isb0NBQWlDO0FBQ2pDLHFDQUFrQztBQUdsQztJQUdJLDRCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztRQUY3QixZQUFPLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBQyxVQUFVLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBRSxZQUFZLENBQUM7SUFFbEMsQ0FBQztJQUVoQyxpQ0FBSSxHQUFKO1FBRUksSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLE1BQU0sRUFBQyxNQUFNO1NBQ2hCLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFNUQsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFHLEdBQUgsVUFBSSxJQUFXO1FBRVgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFDM0IsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FDcEM7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3BCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxNQUFNLENBQUMsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBR0QsbUNBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFDdkIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDbkM7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUlMLDZDQUFnQixHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBL0RNLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO3lDQUlnQixXQUFJO09BSHBCLGtCQUFrQixDQWdFOUI7SUFBRCx5QkFBQztDQUFBLEFBaEVELElBZ0VDO0FBaEVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLEhlYWRlcnMsVVJMU2VhcmNoUGFyYW1zLFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHtHcm9jZXJ5fSBmcm9tIFwiLi9ncm9jZXJ5XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdFNlcnZpY2V7XHJcbiAgICBiYXNlVXJsID0gQ29uZmlnLmFwaVVybCtcImFwcGRhdGEvXCIgKyBDb25maWcuYXBwS2V5ICtcIi9Hcm9jZXJpZXNcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7fVxyXG5cclxuICAgIGxvYWQoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgcGFyYW1zLmFwcGVuZChcInNvcnRcIixcIntcXFwiX2ttZC5sbXRcXFwiOjF9XCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwse1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSxcclxuICAgICAgICAgICAgcGFyYW1zOnBhcmFtc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAubWFwKGRhdGE9PntcclxuICAgICAgICAgICAgbGV0IGdyb2NlcnlMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaChncm9jZXJ5ID0+IHtcclxuICAgICAgICAgICAgICAgIGdyb2NlcnlMaXN0LnB1c2gobmV3IEdyb2NlcnkoZ3JvY2VyeS5faWQsZ3JvY2VyeS5OYW1lKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZ3JvY2VyeUxpc3Q7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChuYW1lOlN0cmluZylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe05hbWU6bmFtZX0pLFxyXG4gICAgICAgICAgICB7aGVhZGVyczp0aGlzLmdldENvbW1vbkhlYWRlcnMoKX1cclxuICAgICAgICApXHJcbiAgICAgICAgLm1hcChyZXM9PnJlcy5qc29uKCkpXHJcbiAgICAgICAgLm1hcChkYXRhPT57XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvY2VyeShkYXRhLl9pZCxuYW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBkZWxldGUoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxyXG4gICAgICAgIHRoaXMuYmFzZVVybCArIFwiL1wiICsgaWQsXHJcbiAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgZ2V0Q29tbW9uSGVhZGVycygpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIktpbnZleSBcIiArIENvbmZpZy50b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICB9XHJcbn0iXX0=