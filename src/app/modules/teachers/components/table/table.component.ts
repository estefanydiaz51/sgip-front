import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Teacher } from '../../../../interfaces/general.interfaces';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EditTeacherModalComponent } from '../edit-teacher-modal/edit-teacher-modal.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    EditTeacherModalComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() teachers: Teacher[] = [];
  @Output() getTeachers = new EventEmitter<boolean>();
  editTeacherModalVisible = false;
  teacherData!: Teacher | null;
}
