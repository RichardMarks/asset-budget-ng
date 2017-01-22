import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CategoryDbService } from './categorydb.service';

import { AppComponent }  from './app.component';

import { CategoryService } from './category.service';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(CategoryDbService),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
