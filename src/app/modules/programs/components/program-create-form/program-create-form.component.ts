import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-program-create-form',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './program-create-form.component.html',
  styleUrl: './program-create-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramCreateFormComponent { }
