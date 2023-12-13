import { CommonModule } from '@angular/common';
import {  Component, Input } from '@angular/core';
import { ProgramCardComponent } from '../program-card/program-card.component';
import { Program } from '../../../../interfaces/general.interfaces';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-programs-list',
  standalone: true,
  imports: [
    CommonModule,
    ProgramCardComponent,
    NzGridModule
  ],
  templateUrl: './programs-list.component.html',
  styleUrl: './programs-list.component.scss',
})
export class ProgramsListComponent {
  @Input() programs!:Program[];
}
