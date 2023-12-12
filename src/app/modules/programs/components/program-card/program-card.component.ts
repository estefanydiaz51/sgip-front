import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./program-card.component.html',
  styleUrl: './program-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramCardComponent { }
