import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ScrollRevealDirective],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent {}
