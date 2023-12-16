import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coordinators',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./coordinators.component.html`,
  styleUrl: './coordinators.component.scss',
})
export class CoordinatorsComponent { }
