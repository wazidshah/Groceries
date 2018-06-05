"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var color_1 = require("color");
var Login = /** @class */ (function () {
    function Login(userService, router, page) {
        this.userService = userService;
        this.router = router;
        this.page = page;
        this.isLoggedIn = true;
        this.user = new user_1.User();
    }
    Login.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    Login.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a Valid Email Id");
            return;
        }
        if (this.isLoggedIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    Login.prototype.toggleDisplay = function () {
        this.isLoggedIn = !this.isLoggedIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggedIn ? new color_1.Color("white") : new color_1.Color("#ffc966"),
            duration: 200
        });
    };
    Login.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () {
            _this.router.navigate(["/list"]);
        });
    };
    Login.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your Account Was Successfully Created");
            _this.toggleDisplay();
        }, function () {
            alert("Ufortunately Something Went Wrong");
        });
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], Login.prototype, "container", void 0);
    Login = __decorate([
        core_1.Component({
            selector: "login",
            providers: [user_service_1.UserService],
            templateUrl: "./pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, page_1.Page])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNFO0FBQ3RFLGdDQUE2QjtBQUM3QiwrQ0FBNEM7QUFDNUMsK0RBQTBEO0FBQzFELDBDQUF1QztBQUV2QywrQkFBNEI7QUFTNUI7SUFNRSxlQUFvQixXQUF3QixFQUFVLE1BQWEsRUFBUyxJQUFTO1FBQWpFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFTLFNBQUksR0FBSixJQUFJLENBQUs7UUFIN0UsZUFBVSxHQUFDLElBQUksQ0FBQztRQUt0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHdCQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0MsQ0FBQztJQUVELHNCQUFNLEdBQU47UUFFRSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FDN0IsQ0FBQztZQUNDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQ25CLENBQUM7WUFDQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCw2QkFBYSxHQUFiO1FBRUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNsQixlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUM1RSxRQUFRLEVBQUUsR0FBRztTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFBSyxHQUFMO1FBQUEsaUJBTUM7UUFKQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQztZQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQUEsaUJBWUM7UUFWQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25DLFNBQVMsQ0FBQztZQUNULEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBRUQ7WUFDRSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQ0EsQ0FBQztJQUNKLENBQUM7SUE1RHVCO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFXLGlCQUFVOzRDQUFDO0lBSmxDLEtBQUs7UUFOakIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUN2RSxDQUFDO3lDQU9pQywwQkFBVyxFQUFpQixlQUFNLEVBQWMsV0FBSTtPQU4xRSxLQUFLLENBaUVqQjtJQUFELFlBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQsRWxlbWVudFJlZixWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge0NvbG9yfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHtWaWV3fSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsb2dpblwiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW4gaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIHVzZXI6VXNlcjtcclxuICBwcml2YXRlIGlzTG9nZ2VkSW49dHJ1ZTtcclxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjpFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLHByaXZhdGUgcGFnZTpQYWdlKVxyXG4gIHtcclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpXHJcbiAge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19sb2dpblwiO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCl7XHJcblxyXG4gICAgaWYoIXRoaXMudXNlci5pc1ZhbGlkRW1haWwoKSlcclxuICAgIHtcclxuICAgICAgYWxlcnQoXCJFbnRlciBhIFZhbGlkIEVtYWlsIElkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmlzTG9nZ2VkSW4pXHJcbiAgICB7XHJcbiAgICAgIHRoaXMubG9naW4oKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZURpc3BsYXkoKVxyXG4gIHtcclxuICAgIHRoaXMuaXNMb2dnZWRJbiA9ICF0aGlzLmlzTG9nZ2VkSW47XHJcbiAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dlZEluID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjZmZjOTY2XCIpLFxyXG4gICAgZHVyYXRpb246IDIwMFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbigpXHJcbiAge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAuc3Vic2NyaWJlKCgpPT57XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaWduVXAoKVxyXG4gIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgLnN1YnNjcmliZSgoKT0+e1xyXG4gICAgICBhbGVydChcIllvdXIgQWNjb3VudCBXYXMgU3VjY2Vzc2Z1bGx5IENyZWF0ZWRcIik7XHJcbiAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgKCk9PntcclxuICAgICAgYWxlcnQoXCJVZm9ydHVuYXRlbHkgU29tZXRoaW5nIFdlbnQgV3JvbmdcIik7XHJcbiAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufSJdfQ==