import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './loadingScreen.component.html',
  styleUrl: './loadingScreen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingScreenComponent { }
