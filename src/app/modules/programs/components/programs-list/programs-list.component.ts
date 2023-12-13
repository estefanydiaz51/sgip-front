import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgramCardComponent } from '../program-card/program-card.component';

@Component({
  selector: 'app-programs-list',
  standalone: true,
  imports: [
    CommonModule,
    ProgramCardComponent
  ],
  templateUrl: './programs-list.component.html',
  styleUrl: './programs-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramsListComponent { }
