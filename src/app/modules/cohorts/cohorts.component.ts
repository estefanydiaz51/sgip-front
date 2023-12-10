import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cohorts',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>cohorts works!</p>`,
  styleUrl: './cohorts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CohortsComponent { }
