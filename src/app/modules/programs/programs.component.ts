import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProgramsListComponent } from "./components/programs-list/programs-list.component";
import { ProgramCreateFormComponent } from './components/program-create-form/program-create-form.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GeneralService } from '../../services/general.service';
import { Cohort, Program } from '../../interfaces/general.interfaces';

@Component({
    selector: 'app-programs',
    standalone: true,
    templateUrl: './programs.component.html',
    styleUrl: './programs.component.scss',
    imports: [
        CommonModule,
        ProgramsListComponent,
        ProgramCreateFormComponent,
        NzButtonModule
    ]
})
export class ProgramsComponent implements OnInit {

    programs!: Program[];
    editProgramData!: Program;
    showForm = false;
    cohorts!: Cohort[];

    constructor(private generalService: GeneralService) {
        this.generalService.getCohorts().subscribe(res => {
            this.cohorts = res;
        });
        this.generalService.reloadProgramList$.subscribe(res=>{
            if(res){
                this.getPrograms();
            }
        });
    }

    ngOnInit(): void {
        this.getPrograms()
    }

    getPrograms(): void {
        this.generalService.getPrograms().subscribe(res => {
            this.programs = res;
        });
    }


}
