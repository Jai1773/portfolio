import { Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly formSubmitted = signal(false);
  readonly skills = [
    { title: 'Frontend', values: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Responsive Design'] },
    { title: 'Backend', values: ['C#', '.NET', 'ASP.NET Core', 'REST APIs', 'Entity Framework Core'] },
    { title: 'Database', values: ['SQL', 'Database Design', 'CRUD Operations', 'Database Integration'] },
    { title: 'Tools', values: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman', 'npm'] },
  ];
  readonly technologies = ['Angular', 'TypeScript', 'C#', '.NET', 'ASP.NET Core', 'SQL', 'Git', 'GitHub', 'REST API', 'Entity Framework'];
  readonly services = [
    ['01', 'Website Development', 'Modern, responsive websites for businesses, services, personal brands, and professional needs.'],
    ['02', 'Angular Development', 'Interactive, responsive, and scalable web applications using Angular and TypeScript.'],
    ['03', '.NET Backend Development', 'Reliable backend applications and REST APIs using C# and .NET.'],
    ['04', 'Database Development', 'SQL integration, reliable CRUD operations, and thoughtful data management.'],
    ['05', 'API Development & Integration', 'REST API development and integration with existing or third-party services.'],
    ['06', 'Bug Fixing & Improvements', 'Finding bugs, improving existing functionality, and strengthening reliability.'],
    ['07', 'Responsive Web Design', 'Interfaces that work smoothly across desktop, tablet, and mobile devices.'],
  ];
  readonly benefits = [
    ['Clean Development', 'Organized, maintainable code that is easier to understand, extend, and support.'],
    ['Responsive Applications', 'A consistent experience across desktop, tablet, and mobile devices.'],
    ['Full-Stack Development', 'Angular and .NET experience across both the frontend and backend.'],
    ['Practical Solutions', 'A focus on the real requirement and solutions that solve business problems.'],
    ['Reliable Development', 'Attention to functionality, usability, performance, and code quality.'],
    ['Continuous Improvement', 'Always exploring better ways to build modern, reliable applications.'],
  ];

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 24); }
  scrollTo(id: string): void { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); this.menuOpen.set(false); }
  submitForm(): void { this.formSubmitted.set(true); }
}
