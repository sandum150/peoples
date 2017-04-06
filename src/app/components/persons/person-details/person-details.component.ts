import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Person} from "../../../services/person";

@Component({
  selector: 'pl-person-details',
  templateUrl: './person-details.component.html'
})
export class PersonDetailsComponent implements OnInit {

  @Input() personSelected:Person;
  @Output() personAge = new EventEmitter<number>();
  @Input() age?:number;

  showAge:boolean = false;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.showAge = false;
  }

  onShowAge(age){
    this.showAge = !this.showAge;
    this.personAge.emit(age);
    console.log(this.showAge);
  }

}
