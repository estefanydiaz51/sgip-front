import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cohort, Program } from '../../../../interfaces/general.interfaces';
import { EditProgramModalComponent } from '../edit-program-modal/edit-program-modal.component';
import { UtilsModule } from '../../../utils/utils.module';

@Component({
  selector: 'app-program-card',
  standalone: true,
  imports: [
    CommonModule,
    EditProgramModalComponent,
    UtilsModule
  ],
  templateUrl:'./program-card.component.html',
  styleUrl: './program-card.component.scss',
})
export class ProgramCardComponent { 
  @Input() program!:Program;
  @Input() cohorts!:Cohort[];
  @Output() getPrograms = new EventEmitter<boolean>();
  editProgramModalVisible = false;
}
