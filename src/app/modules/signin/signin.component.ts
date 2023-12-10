import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>signin works!</p>`,
  styleUrl: './signin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent { }
