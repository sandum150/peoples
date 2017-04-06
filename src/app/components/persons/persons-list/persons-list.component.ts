import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {PersonService} from "../../../services/person.service";
import {Person} from "../../../services/person";

@Component({
  selector: 'pl-persons-list',
  templateUrl: './persons-list.component.html'
})
export class PersonsListComponent implements OnInit {

  personList:Person[] = [];

  @Output() selectedPerson = new EventEmitter<Person>();


  constructor( private personService:PersonService) { }

  ngOnInit() {
    this.personList = this.personService.getPersons();
  }

  onSelect(person: Person){
    this.selectedPerson.emit(person);
  }
}
