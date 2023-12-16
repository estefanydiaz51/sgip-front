import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coordinators-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./coordinators-form.component.html`,
  styleUrl: './coordinators-form.component.scss'
})
export class CoordinatorsFormComponent {
  @Output() hideForm = new EventEmitter<boolean>(false);
}
