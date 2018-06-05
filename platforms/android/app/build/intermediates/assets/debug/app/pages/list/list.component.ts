import {Component,OnInit,ViewChild,ElementRef} from "@angular/core";
import {Grocery} from "../../shared/grocery/grocery";
import {GroceryListService} from "../../shared/grocery/grocery-list.service";
import {TextField} from "ui/text-field";
import * as SocialShare from "nativescript-social-share";
@Component({
    selector:"list",
    moduleId:module.id,
    templateUrl:"./list.html",
    styleUrls: ["./list-common.css", "./list.css"],
    providers:[GroceryListService]
})

export class List implements OnInit {
     groceryList: Array<Grocery> = [];
     isLoading = true;
    private groceryItem:String = "";
    @ViewChild("groceryTextField") grocerTextField:ElementRef;

    constructor(private groceryListService:GroceryListService){}

    ngOnInit(){
        this.groceryListService.load()
        .subscribe(loadedGroceries => {
            loadedGroceries.forEach(groceryObject => {
                this.groceryList.unshift(groceryObject);
                
            });
            this.isLoading=false;
        })
        
    }

    add()
    {
        if(this.groceryItem.trim()==="")
        {
            alert("Enter A Grocery Item");
            return;
        }

        let textField = <TextField>this.grocerTextField.nativeElement;
        textField.dismissSoftInput();

        this.groceryListService.add(this.groceryItem)
        .subscribe(
            groceryObject=>{
                this.groceryList.unshift(groceryObject);
                this.groceryItem="";
            },

            ()=>{
                alert({
                    message:"An error Occured While Adding The Item",
                    okButtonText:"Ok"
                });
            }
        );

        this.groceryItem = "";
    }

    share()
    {
        let listString = this.groceryList
        .map(grocery=>grocery.name)
        .join(", ")
        .trim();

        SocialShare.shareText(listString);
    }

}