import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableComponent } from './components/table/table.component';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-cohorts',
  standalone: true,
  templateUrl: './cohorts.component.html',
  styleUrl: './cohorts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NzButtonModule, TableComponent],
})
export class CohortsComponent implements OnInit {
  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.generalService.getCohorts().subscribe((res) => {
      console.log('res : ', res);
    });
  }
}
