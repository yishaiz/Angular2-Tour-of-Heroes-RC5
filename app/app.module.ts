import {NgModule}      from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

import {routing, appRoutingProviders} from './app.routing';


import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
