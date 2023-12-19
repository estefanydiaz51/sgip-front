import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Coordinator,
  Program,
} from '../../../../interfaces/general.interfaces';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { GeneralService } from '../../../../services/general.service';
import { EditCoordinatorModalComponent } from '../edit-coordinator-modal/edit-coordinator-modal.component';

@Component({
  selector: 'app-coordinators-table',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    EditCoordinatorModalComponent,
  ],
  templateUrl: `./coordinators-table.component.html`,
  styleUrl: './coordinators-table.component.scss',
})
export class CoordinatorsTableComponent implements OnInit {
  @Input() coordinators!: Coordinator[];
  @Input() programs!: Program[];
  @Output() getCoordinatorsList = new EventEmitter<boolean>();
  editCoordinatorModalVisible = false;
  coordinatorData!: Coordinator | null;

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {}

  getCoordinators(): void {
    this.generalService.getCoordinators().subscribe((res) => {
      this.coordinators = res;
    });
  }

  getProgramsNames(programsIds: string[]): string[] {
    let stringArray: string[] = [];
    if (this.programs && programsIds) {
      programsIds.forEach((programId) => {
        this.programs.forEach((program) => {
          if (programId === program._id) {
            stringArray.push(program.name);
          }
        });
      });
    }
    return stringArray;
  }
}
