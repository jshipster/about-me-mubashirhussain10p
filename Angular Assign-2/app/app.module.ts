import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }         from './app.component';
import { CountryService } from './Countries/services/country.service';
import{RouterModule} from '@angular/router'
import{AppRoutingModule} from './app-routing.module'
import{CountryListComponent} from './Countries/Components/country-list.Component'
import{CountryDetailComponent} from './Countries/Components/country-detail.Component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailComponent
  ],
  providers: [
    CountryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

