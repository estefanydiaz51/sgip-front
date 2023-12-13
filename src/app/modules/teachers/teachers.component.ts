import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Teacher } from '../../interfaces/general.interfaces';
import { GeneralService } from '../../services/general.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/Form/form.component';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule, NzButtonModule, TableComponent, FormComponent],

  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[] = [];
  showForm: boolean = false;

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.generalService.getTeachers().subscribe((res) => {
      this.teachers = res;
    });
  }

  handleShowForm() {
    this.showForm = true;
  }
}
