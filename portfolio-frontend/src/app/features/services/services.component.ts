import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Website Development',
      description: 'I create modern, responsive websites for businesses, services, personal brands, and other professional needs.'
    },
    {
      title: 'Angular Development',
      description: 'I develop interactive, responsive, and scalable web applications using Angular and TypeScript.'
    },
    {
      title: ' .NET Backend Development',
      description: 'I build reliable backend applications and REST APIs using C# and .NET.'
    },
    {
      title: 'Database Development',
      description: 'I integrate web applications with SQL databases and implement reliable CRUD operations and data management.'
    },
    {
      title: 'API Development & Integration',
      description: 'I can develop REST APIs and integrate existing or third-party APIs into web applications.'
    },
    {
      title: 'Bug Fixing & Improvements',
      description: 'I can help identify bugs, improve existing functionality, and enhance the reliability and usability of web applications.'
    },
    {
      title: 'Responsive Web Design',
      description: 'I build interfaces that work smoothly across desktop, tablet, and mobile devices.'
    }
  ];
}
