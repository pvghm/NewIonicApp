import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Person} from "../../models/Person";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons: Person[] = [];
  personDetails: Person;

  constructor(public navCtrl: NavController) {
    this.persons =  [
      new Person('Praveen', 'praveen@gmail.com', '123 Main St.'),
      new Person('Prashant', 'prashant@gmail.com', '456 Main St.'),
      new Person('John', 'john@gmail.com', '789 Main St.'),
    ];

    this.personDetails = this.persons[0];

  }

  onPersonClick(person) {
    this.personDetails = person;
  }


}
