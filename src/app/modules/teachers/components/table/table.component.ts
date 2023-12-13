import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Teacher } from '../../../../interfaces/general.interfaces';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzDividerModule, NzIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() teachers: Teacher[] = [];

  ngOnInit(): void {
    console.log(this.teachers);
  }
}
