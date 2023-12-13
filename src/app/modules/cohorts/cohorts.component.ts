import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from "./components/table/table.component";

@Component({
  selector: 'app-cohorts',
  standalone: true,
  templateUrl: './cohorts.component.html',
  styleUrl: './cohorts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NzButtonModule,
    TableComponent
  ]
})
export class CohortsComponent { }
