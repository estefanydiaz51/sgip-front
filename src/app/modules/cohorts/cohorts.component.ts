import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cohorts',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cohorts.component.html',
  styleUrl: './cohorts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CohortsComponent { }
