import { Component,OnInit,ElementRef,ViewChild } from "@angular/core";
import {Page} from "ui/page";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service"
import {Router} from "@angular/router";

import {Color} from "color";
import {View} from "ui/core/view";

@Component({
  selector: "login",
  providers: [UserService],
  templateUrl: "./pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class Login implements OnInit {

  private user:User;
  private isLoggedIn=true;
  @ViewChild("container") container:ElementRef;

  constructor(private userService: UserService, private router:Router,private page:Page)
  {
    this.user = new User();
  }

  ngOnInit()
  {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  submit(){

    if(!this.user.isValidEmail())
    {
      alert("Enter a Valid Email Id");
      return;
    }
    if(this.isLoggedIn)
    {
      this.login();
    }
    else
    {
      this.signUp();
    }
  }

  toggleDisplay()
  {
    this.isLoggedIn = !this.isLoggedIn;
    let container = <View>this.container.nativeElement;
    container.animate({
    backgroundColor: this.isLoggedIn ? new Color("white") : new Color("#ffc966"),
    duration: 200
    });
  }

  login()
  {
    this.userService.login(this.user)
    .subscribe(()=>{
        this.router.navigate(["/list"]);
    });
  }

  signUp()
  {
    this.userService.register(this.user)
    .subscribe(()=>{
      alert("Your Account Was Successfully Created");
      this.toggleDisplay();
    },
    
    ()=>{
      alert("Ufortunately Something Went Wrong");
    }
    );
  }
}