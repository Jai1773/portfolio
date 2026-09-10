import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-why-work-with-me',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './why-work-with-me.component.html',
  styleUrls: ['./why-work-with-me.component.css']
})
export class WhyWorkWithMeComponent {
  reasons = [
    {
      title: 'Clean Development',
      description: 'I focus on writing organized and maintainable code that is easier to understand, maintain, and extend.'
    },
    {
      title: 'Responsive Applications',
      description: 'I build applications that provide a consistent experience across desktop, tablet, and mobile devices.'
    },
    {
      title: 'Full-Stack Development',
      description: 'With Angular and .NET, I can work on both the frontend and backend of a web application.'
    },
    {
      title: 'Practical Solutions',
      description: 'I focus on understanding the actual requirement and developing solutions that solve real business problems.'
    },
    {
      title: 'Reliable Development',
      description: 'I pay attention to functionality, usability, performance, and code quality while developing applications.'
    },
    {
      title: 'Continuous Improvement',
      description: 'I continuously improve my technical skills and explore better ways to build modern and reliable web applications.'
    }
  ];
}
