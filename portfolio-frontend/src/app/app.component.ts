import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared Components
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

// Feature Components
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ServicesComponent } from './features/services/services.component';
import { TechnologiesComponent } from './features/technologies/technologies.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { WhyWorkWithMeComponent } from './features/why-work-with-me/why-work-with-me.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { GithubComponent } from './features/github/github.component';
import { ResumeComponent } from './features/resume/resume.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ServicesComponent,
    TechnologiesComponent,
    ProjectsComponent,
    WhyWorkWithMeComponent,
    ExperienceComponent,
    GithubComponent,
    ResumeComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
