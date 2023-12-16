import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Coordinator } from '../../../../interfaces/general.interfaces';

@Component({
  selector: 'app-coordinators-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./coordinators-table.component.html`,
  styleUrl: './coordinators-table.component.scss',
})
export class CoordinatorsTableComponent {
  @Input() coordinatoors!:Coordinator[];
}
