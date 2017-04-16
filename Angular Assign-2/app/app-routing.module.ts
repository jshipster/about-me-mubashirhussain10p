import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CountryListComponent }      from './Countries/Components/country-list.Component';
import {CountryDetailComponent} from  './Countries/Components/country-detail.Component'

const appRoutes: Routes = [
  { path: '', component: CountryListComponent},
  { path: 'country-detail/:id', component: CountryDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}