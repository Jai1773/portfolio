import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillBadgeComponent, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    {
      category: 'Frontend',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Responsive Web Design']
    },
    {
      category: 'Backend',
      items: ['C#', '.NET', 'ASP.NET Core', 'REST APIs', 'Entity Framework Core']
    },
    {
      category: 'Database',
      items: ['SQL', 'Database Design', 'CRUD Operations', 'Database Integration']
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Visual Studio', 'Visual Studio Code', 'Postman', 'npm']
    },
    {
      category: 'Other',
      items: ['API Integration', 'Bug Fixing', 'Feature Development', 'Cloud Deployment', 'Web Application Development']
    }
  ];
}
