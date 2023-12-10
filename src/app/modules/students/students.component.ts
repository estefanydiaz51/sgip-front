import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>students works!</p>`,
  styleUrl: './students.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsComponent { }
