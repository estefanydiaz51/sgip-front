import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Student } from '../../../../interfaces/general.interfaces';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EditStudentModalComponent } from '../edit-student-modal/edit-student-modal.component';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    EditStudentModalComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() students: Student[] = [];
  editStudentModalVisible = false;
  studentData!: Student | null;

  ngOnInit(): void {
    //console.log(this.students);
  }
}
