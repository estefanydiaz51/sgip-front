import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoordinatorsFormComponent } from './components/coordinators-form/coordinators-form.component';
import { CoordinatorsTableComponent } from './components/coordinators-table/coordinators-table.component';
import { Coordinator } from '../../interfaces/general.interfaces';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-coordinators',
  standalone: true,
  imports: [
    CommonModule,
    CoordinatorsFormComponent,
    CoordinatorsTableComponent
  ],
  templateUrl: `./coordinators.component.html`,
  styleUrl: './coordinators.component.scss',
})
export class CoordinatorsComponent  implements OnInit {
  coordinatoors: Coordinator[] = [];
  showForm: boolean = false;

  constructor(private generalService: GeneralService){}

  ngOnInit(): void {
    this.getCoordinators();
  }

  getCoordinators(): void{
    this.generalService.getCoordinators().subscribe((res) => {
      this.coordinatoors = res;
    });
  }

  handleShowForm() {
    this.showForm = true;
  }
}
