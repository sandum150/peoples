import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'pl-person-age',
  template: `
    <p>
      person-age: {{age}}
    </p>
  `,
  styles: []
})
export class PersonAgeComponent implements OnInit {

  @Input() age?:number;

  constructor() { }

  ngOnInit() {
  }

}
