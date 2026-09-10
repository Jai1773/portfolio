import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, SkillBadgeComponent, ScrollRevealDirective],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  techs = [
    'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS',
    'C#', '.NET', 'ASP.NET Core', 'REST API', 'Entity Framework Core',
    'SQL', 'Git', 'GitHub', 'Postman', 'Visual Studio', 'Visual Studio Code'
  ];
}
