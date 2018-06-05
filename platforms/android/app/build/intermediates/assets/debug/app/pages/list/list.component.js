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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUVwRSxrRkFBNkU7QUFFN0UsdURBQXlEO0FBU3pEO0lBTUksY0FBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFMeEQsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDVixnQkFBVyxHQUFVLEVBQUUsQ0FBQztJQUcyQixDQUFDO0lBRTVELHVCQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7YUFDN0IsU0FBUyxDQUFDLFVBQUEsZUFBZTtZQUN0QixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsYUFBYTtnQkFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFNUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFFRCxrQkFBRyxHQUFIO1FBQUEsaUJBMkJDO1FBekJHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUcsRUFBRSxDQUFDLENBQ2hDLENBQUM7WUFDRyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDOUQsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzVDLFNBQVMsQ0FDTixVQUFBLGFBQWE7WUFDVCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsV0FBVyxHQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBRUQ7WUFDSSxLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFDLHdDQUF3QztnQkFDaEQsWUFBWSxFQUFDLElBQUk7YUFDcEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUNKLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUVJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ2hDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBRSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxDQUFDO2FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixJQUFJLEVBQUUsQ0FBQztRQUVSLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXJEOEI7UUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQztrQ0FBaUIsaUJBQVU7aURBQUM7SUFKakQsSUFBSTtRQVJoQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLE1BQU07WUFDZixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFDLGFBQWE7WUFDekIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO1lBQzlDLFNBQVMsRUFBQyxDQUFDLHlDQUFrQixDQUFDO1NBQ2pDLENBQUM7eUNBUXlDLHlDQUFrQjtPQU5oRCxJQUFJLENBMkRoQjtJQUFELFdBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LE9uSW5pdCxWaWV3Q2hpbGQsRWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtHcm9jZXJ5fSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xyXG5pbXBvcnQge0dyb2NlcnlMaXN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnktbGlzdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VGV4dEZpZWxkfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwibGlzdFwiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6XCIuL2xpc3QuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xpc3QtY29tbW9uLmNzc1wiLCBcIi4vbGlzdC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6W0dyb2NlcnlMaXN0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgICBncm9jZXJ5TGlzdDogQXJyYXk8R3JvY2VyeT4gPSBbXTtcclxuICAgICBpc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBncm9jZXJ5SXRlbTpTdHJpbmcgPSBcIlwiO1xyXG4gICAgQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIikgZ3JvY2VyVGV4dEZpZWxkOkVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6R3JvY2VyeUxpc3RTZXJ2aWNlKXt9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5sb2FkKClcclxuICAgICAgICAuc3Vic2NyaWJlKGxvYWRlZEdyb2NlcmllcyA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKGdyb2NlcnlPYmplY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5ncm9jZXJ5SXRlbS50cmltKCk9PT1cIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFbnRlciBBIEdyb2NlcnkgSXRlbVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5ncm9jZXJUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG5cclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5hZGQodGhpcy5ncm9jZXJ5SXRlbSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBncm9jZXJ5T2JqZWN0PT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb2NlcnlJdGVtPVwiXCI7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XCJBbiBlcnJvciBPY2N1cmVkIFdoaWxlIEFkZGluZyBUaGUgSXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDpcIk9rXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncm9jZXJ5SXRlbSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2hhcmUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsaXN0U3RyaW5nID0gdGhpcy5ncm9jZXJ5TGlzdFxyXG4gICAgICAgIC5tYXAoZ3JvY2VyeT0+Z3JvY2VyeS5uYW1lKVxyXG4gICAgICAgIC5qb2luKFwiLCBcIilcclxuICAgICAgICAudHJpbSgpO1xyXG5cclxuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQobGlzdFN0cmluZyk7XHJcbiAgICB9XHJcblxyXG59Il19