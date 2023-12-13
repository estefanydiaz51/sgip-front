import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Cohort } from '../../../../interfaces/general.interfaces';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzDividerModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() cohorts !: Cohort[];
}
