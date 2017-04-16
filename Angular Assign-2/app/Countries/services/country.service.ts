import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Country }           from '../model/country';

@Injectable()
export class CountryService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
    private countryUrl = 'http://api.geonames.org/countryInfoJSON?username=mubashir.hussain@tenpearls.com';
    private detailUrl = 'http://api.geonames.org/countryInfo?username=mubashir.hussain@tenpearls.com&type=json&country=';
    private neighbour = 'http://api.geonames.org/neighbours?username=mubashir.hussain@tenpearls.com&type=json&geonameId='
     
     // Fetch all existing comments
     getCountryList(){
         // ...using get request
         return this.http.get(this.countryUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }


   countryDetails (id:string){
        return this.http.get(`${this.detailUrl}${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

     NeighbourDetails (code:number){
        return this.http.get(`${this.neighbour}${code}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   
}