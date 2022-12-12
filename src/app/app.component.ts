import { Component } from '@angular/core';
import { basePerson } from './models/model-ps';
import {   Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';
  baseValue: Person = basePerson;

}
