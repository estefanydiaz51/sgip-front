import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coordinators-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./coordinators-table.component.html`,
  styleUrl: './coordinators-table.component.css',
})
export class CoordinatorsTableComponent { }
