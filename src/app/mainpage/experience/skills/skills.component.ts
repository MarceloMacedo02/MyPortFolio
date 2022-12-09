import { Component,Input } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() person!:Person;
}
