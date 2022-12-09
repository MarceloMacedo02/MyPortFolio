import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  @Input() person!:Person;

}
