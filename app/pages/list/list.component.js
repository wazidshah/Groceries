"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var SocialShare = require("nativescript-social-share");
var List = /** @class */ (function () {
    function List(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
        this.isLoading = true;
        this.groceryItem = "";
    }
    List.prototype.ngOnInit = function () {
        var _this = this;
        this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
        });
    };
    List.prototype.add = function () {
        var _this = this;
        if (this.groceryItem.trim() === "") {
            alert("Enter A Grocery Item");
            return;
        }
        var textField = this.grocerTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.groceryItem)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.groceryItem = "";
        }, function () {
            alert({
                message: "An error Occured While Adding The Item",
                okButtonText: "Ok"
            });
        });
        this.groceryItem = "";
    };
    List.prototype.share = function () {
        var listString = this.groceryList
            .map(function (grocery) { return grocery.name; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    };
    List.prototype.delete = function (item) {
        this.groceryListService.delete(item._id)
            .subscribe(function (groceryItems) {
            console.log(groceryItems);
        });
    };
    __decorate([
        core_1.ViewChild("groceryTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], List.prototype, "grocerTextField", void 0);
    List = __decorate([
        core_1.Component({
            selector: "list",
            moduleId: module.id,
            templateUrl: "./list.html",
            styleUrls: ["./list-common.css", "./list.css"],
            providers: [grocery_list_service_1.GroceryListService]
        }),
        __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
    ], List);
    return List;
}());
exports.List = List;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUVwRSxrRkFBNkU7QUFFN0UsdURBQXlEO0FBU3pEO0lBTUksY0FBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFMeEQsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDVixnQkFBVyxHQUFVLEVBQUUsQ0FBQztJQUcyQixDQUFDO0lBRTVELHVCQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7YUFDN0IsU0FBUyxDQUFDLFVBQUEsZUFBZTtZQUN0QixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsYUFBYTtnQkFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFNUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFFRCxrQkFBRyxHQUFIO1FBQUEsaUJBMkJDO1FBekJHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUcsRUFBRSxDQUFDLENBQ2hDLENBQUM7WUFDRyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDOUQsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzVDLFNBQVMsQ0FDTixVQUFBLGFBQWE7WUFDVCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsV0FBVyxHQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBRUQ7WUFDSSxLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFDLHdDQUF3QztnQkFDaEQsWUFBWSxFQUFDLElBQUk7YUFDcEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUNKLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUVJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ2hDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBRSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxDQUFDO2FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixJQUFJLEVBQUUsQ0FBQztRQUVSLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBTyxJQUFJO1FBRVAsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ3ZDLFNBQVMsQ0FBQyxVQUFBLFlBQVk7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE3RDhCO1FBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7a0NBQWlCLGlCQUFVO2lEQUFDO0lBSmpELElBQUk7UUFSaEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxNQUFNO1lBQ2YsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFdBQVcsRUFBQyxhQUFhO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztZQUM5QyxTQUFTLEVBQUMsQ0FBQyx5Q0FBa0IsQ0FBQztTQUNqQyxDQUFDO3lDQVF5Qyx5Q0FBa0I7T0FOaEQsSUFBSSxDQWtFaEI7SUFBRCxXQUFDO0NBQUEsQUFsRUQsSUFrRUM7QUFsRVksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXQsVmlld0NoaWxkLEVsZW1lbnRSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7R3JvY2VyeX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnlcIjtcclxuaW1wb3J0IHtHcm9jZXJ5TGlzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZVwiO1xyXG5pbXBvcnQge1RleHRGaWVsZH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcImxpc3RcIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOlwiLi9saXN0Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9saXN0LWNvbW1vbi5jc3NcIiwgXCIuL2xpc3QuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOltHcm9jZXJ5TGlzdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAgZ3JvY2VyeUxpc3Q6IEFycmF5PEdyb2Nlcnk+ID0gW107XHJcbiAgICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZ3JvY2VyeUl0ZW06U3RyaW5nID0gXCJcIjtcclxuICAgIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlclRleHRGaWVsZDpFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvY2VyeUxpc3RTZXJ2aWNlOkdyb2NlcnlMaXN0U2VydmljZSl7fVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpXHJcbiAgICAgICAgLnN1YnNjcmliZShsb2FkZWRHcm9jZXJpZXMgPT4ge1xyXG4gICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaChncm9jZXJ5T2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhZGQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuZ3JvY2VyeUl0ZW0udHJpbSgpPT09XCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRW50ZXIgQSBHcm9jZXJ5IEl0ZW1cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyVGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UuYWRkKHRoaXMuZ3JvY2VyeUl0ZW0pXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZ3JvY2VyeU9iamVjdD0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5SXRlbT1cIlwiO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOlwiQW4gZXJyb3IgT2NjdXJlZCBXaGlsZSBBZGRpbmcgVGhlIEl0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6XCJPa1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUl0ZW0gPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbGlzdFN0cmluZyA9IHRoaXMuZ3JvY2VyeUxpc3RcclxuICAgICAgICAubWFwKGdyb2Nlcnk9Pmdyb2NlcnkubmFtZSlcclxuICAgICAgICAuam9pbihcIiwgXCIpXHJcbiAgICAgICAgLnRyaW0oKTtcclxuXHJcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVUZXh0KGxpc3RTdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmRlbGV0ZShpdGVtLl9pZClcclxuICAgICAgICAuc3Vic2NyaWJlKGdyb2NlcnlJdGVtcz0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhncm9jZXJ5SXRlbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19