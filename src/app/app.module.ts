import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeListComponent } from './pages/node-list/node-list.component';
import { CardModuleComponent } from './card-module/card-module.component';
import { SearchModuleComponent } from './search-module/search-module.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeListComponent,
    CardModuleComponent,
    SearchModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
