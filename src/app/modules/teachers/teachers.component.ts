import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>teachers works!</p>`,
  styleUrl: './teachers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeachersComponent { }
