import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>programs works!</p>`,
  styleUrl: './programs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramsComponent { }
