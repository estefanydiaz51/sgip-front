import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/Form/form.component';
import { GeneralService } from '../../services/general.service';
import { Student } from '../../interfaces/general.interfaces';

@Component({
  selector: 'app-students',
  standalone: true,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
  imports: [CommonModule, NzButtonModule, TableComponent, FormComponent],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  showForm: boolean = false;

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.generalService.getStudents().subscribe((res) => {
      this.students = res;
    });
  }

  handleShowForm() {
    this.showForm = true;
  }

  getStudents(): void {
    this.generalService.getStudents().subscribe((res) => {
      this.students = res;
    });
  }
}
