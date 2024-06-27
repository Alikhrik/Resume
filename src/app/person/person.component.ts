import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ExperienceComponent, SkillComponent],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {

}
