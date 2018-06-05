import {Injectable} from "@angular/core";
import {Http,Headers,URLSearchParams,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/operator/catch";
import "rxjs/operator/map";

import {Config} from "../config";
import {Grocery} from "./grocery";

@Injectable()
export class GroceryListService{
    baseUrl = Config.apiUrl+"appdata/" + Config.appKey +"/Groceries";

    constructor(private http:Http){}

    load()
    {
        let params = new URLSearchParams();
        params.append("sort","{\"_kmd.lmt\":1}");

        return this.http.get(this.baseUrl,{
            headers: this.getCommonHeaders(),
            params:params
        })
        .map(res => res.json())
        .map(data=>{
            let groceryList = [];
            data.forEach(grocery => {
                groceryList.push(new Grocery(grocery._id,grocery.Name));
                
            });

            return groceryList;
        })
        .catch(this.handleErrors);
    }

    add(name:String)
    {
        return this.http.post(
            this.baseUrl,
            JSON.stringify({Name:name}),
            {headers:this.getCommonHeaders()}
        )
        .map(res=>res.json())
        .map(data=>{
            return new Grocery(data._id,name);
        })
        .catch(this.handleErrors);
    }

    
    delete(id: string) {
        return this.http.delete(
        this.baseUrl + "/" + id,
        { headers: this.getCommonHeaders() }
        )
        .map(res => res.json())
        .catch(this.handleErrors);
        }
    


    getCommonHeaders() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Kinvey " + Config.token);
        return headers;
      }
    
      handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
      }
}