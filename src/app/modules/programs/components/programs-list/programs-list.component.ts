import { CommonModule } from '@angular/common';
import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { ProgramCardComponent } from '../program-card/program-card.component';
import { Cohort, Program } from '../../../../interfaces/general.interfaces';
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
  @Input() cohorts!:Cohort[];
  editProgramData!: Program;
  @Output() getPrograms = new EventEmitter<boolean>();
}
