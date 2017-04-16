import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {CountryService} from '../services/country.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Country } from '../model/country';


@Component({
    moduleId:module.id,
    templateUrl: 'countrylist.html',
})

export class CountryListComponent implements OnInit{
    constructor(
        private countryService: CountryService
        ,private _router:Router
        ){}
    // Local properties
    comments: any[]=[];
    details: any[]=[];

    loadComments(){
         this.countryService.getCountryList()
                           .subscribe((res)=>{
                               this.comments=res;
                           });
    }

    ngOnInit(){
            this.loadComments()
    }   
 }
