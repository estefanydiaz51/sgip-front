import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from './components/table/table.component';
import { GeneralService } from '../../services/general.service';
import { Cohort } from '../../interfaces/general.interfaces';
import { FormComponent } from './components/Form/form.component';

@Component({
  selector: 'app-cohorts',
  standalone: true,
  templateUrl: './cohorts.component.html',
  styleUrl: './cohorts.component.scss',
  imports: [CommonModule, NzButtonModule, TableComponent, FormComponent],
})
export class CohortsComponent implements OnInit {
  cohorts: Cohort[] = [];
  showForm: boolean = false;

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.generalService.getCohorts().subscribe((res) => {
      this.cohorts = res;
    });
  }

  handleShowForm() {
    this.showForm = true;
  }
}
