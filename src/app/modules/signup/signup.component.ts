import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>signup works!</p>`,
  styleUrl: './signup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent { }
