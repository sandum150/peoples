import {Component, OnInit, Input} from '@angular/core';
import {Person} from "../../../services/person";

@Component({
  selector: 'pl-person-item',
  template: `
    <div class="list-group-item clearfix">
        <b>name:</b> {{person.name}} <br>
        <b>age:</b> {{person.age}} <br>
        <b>sex:</b> {{person.sex}}
    </div>
  `,
  styles: []
})
export class PersonItemComponent implements OnInit {
  @Input() person:Person;


  constructor(  ) { }

  ngOnInit() {
  }

}
