import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from './components/table/table.component';
import { GeneralService } from '../../services/general.service';
import { Cohort } from '../../interfaces/general.interfaces';

@Component({
  selector: 'app-cohorts',
  standalone: true,
  templateUrl: './cohorts.component.html',
  styleUrl: './cohorts.component.scss',
  imports: [CommonModule, NzButtonModule, TableComponent],
})
export class CohortsComponent implements OnInit {

  cohorts:Cohort[]=[];

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.generalService.getCohorts().subscribe((res) => {
      console.log(res);
      
      this.cohorts = res;
    });
  }
}
