import {Component, Input} from '@angular/core';

@Component({
  selector: 'pl-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {

  @Input() age:number

}
