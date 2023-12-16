import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Cohort, Teacher } from '../../../../interfaces/general.interfaces';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EditCohortModalComponent } from '../edit-cohort-modal/edit-cohort-modal.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    EditCohortModalComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() cohorts!: Cohort[];
  @Output() getCohorts = new EventEmitter<boolean>();
  @Input() teachers!: Teacher[];
  editCohortModalVisible = false;
  cohortData!:Cohort|null;
}
