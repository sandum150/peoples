import { Injectable } from '@angular/core';
import {Person} from "./person";

@Injectable()
export class PersonService {

  constructor() { }

  private persons: Person[] = [
      new Person('Gheorghe', 21, 'M'),
      new Person('Ileanea', 19, 'F'),
      new Person('Vasilica', 22, 'M')
  ];

  addPerson(person:Person){
    this.persons.push(person);
  }

  getPersons(){
    return this.persons;
  }

}
