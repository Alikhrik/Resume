import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  Title:String = ".net";
  CertificateTitle:String = "Certificate";
  CertificateUrl:String = "#";
  Description:String = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolores?";
}
