import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonsComponent } from './components/persons/persons.component';
import {PersonService} from "./services/person.service";
import { PersonsListComponent } from './components/persons/persons-list/persons-list.component';
import { PersonItemComponent } from './components/persons/persons-list/person-item.component';
import { PersonDetailsComponent } from './components/persons/person-details/person-details.component';
import { PersonAgeComponent } from './components/persons/person-details/person-age.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonsListComponent,
    PersonItemComponent,
    PersonDetailsComponent,
    PersonAgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
