import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoordinatorsFormComponent } from './components/coordinators-form/coordinators-form.component';
import { CoordinatorsTableComponent } from './components/coordinators-table/coordinators-table.component';
import { Coordinator, Program } from '../../interfaces/general.interfaces';
import { GeneralService } from '../../services/general.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-coordinators',
  standalone: true,
  imports: [
    CommonModule,
    CoordinatorsFormComponent,
    CoordinatorsTableComponent,
    NzButtonModule
  ],
  templateUrl: `./coordinators.component.html`,
  styleUrl: './coordinators.component.scss',
})
export class CoordinatorsComponent  implements OnInit {
  coordinatoors: Coordinator[] = [];
  showForm: boolean = false;
  programs!:Program[];

  constructor(private generalService: GeneralService){
    this.generalService.reloadCoordinatorList$.subscribe( res=>{
      this.getCoordinators();
    });
  }

  ngOnInit(): void {
    this.getCoordinators();
    this.getPrograms();
  }

  getCoordinators(): void{
    this.generalService.getCoordinators().subscribe((res) => {
      this.coordinatoors = res;
    });
  }

  handleShowForm() {
    this.showForm = true;
  }

  getPrograms() : void{
    this.generalService.getPrograms().subscribe(res=>{
      this.programs = res;
    });
  }
}
