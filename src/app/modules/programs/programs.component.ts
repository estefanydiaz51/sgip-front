import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProgramsListComponent } from "./components/programs-list/programs-list.component";
import { ProgramCreateFormComponent } from './components/program-create-form/program-create-form.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GeneralService } from '../../services/general.service';


@Component({
    selector: 'app-programs',
    standalone: true,
    templateUrl: './programs.component.html',
    styleUrl: './programs.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ProgramsListComponent,
        ProgramCreateFormComponent,
        NzButtonModule
    ]
})
export class ProgramsComponent implements OnInit {

    constructor(private generalService : GeneralService){}

    ngOnInit(): void {
        this.generalService.getPrograms().subscribe(res=>{
            console.log('res : ', res);
        });
    }

}
