import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  Title:String = "Company Name";
  PeriodIn:Date = new Date(2019, 1);
  PeriodOut:Date = new Date(2023, 1);
  Description:String = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloremque totam harum praesentium laboriosam ducimus laborum repellendus aliquid vitae dolor, sint velit ipsum facilis deleniti, assumenda debitis quo, odit ratione.";
  
}
