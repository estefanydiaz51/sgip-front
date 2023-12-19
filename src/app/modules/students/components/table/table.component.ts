import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Program, Student } from '../../../../interfaces/general.interfaces';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EditStudentModalComponent } from '../edit-student-modal/edit-student-modal.component';
import { GeneralService } from '../../../../services/general.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
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
  @Input() programs!: Program[];
  @Output() reloadTable = new EventEmitter<boolean>();
  editStudentModalVisible = false;
  studentData!: Student | null;

  constructor(private generalService : GeneralService, private notificationService : NzNotificationService){}

  ngOnInit(): void {
    //console.log(this.students);
  }

  deleteStudent(student: Student) : void {
    if(student && student._id){
      this.generalService.deleteStudent(student._id).subscribe( res => {
        this.notificationService.success('Éxito','Se ha eliminado el estudiante correctamente');
        this.reloadTable.emit(true);
      });
    }
  }
}
