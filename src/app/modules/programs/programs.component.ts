import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgramsListComponent } from "./components/programs-list/programs-list.component";
import { ProgramCreateFormComponent } from './components/program-create-form/program-create-form.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
    selector: 'app-programs',
    standalone: true,
    templateUrl: './programs.component.html',
    styleUrl: './programs.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        ProgramsListComponent,
        ProgramCreateFormComponent,
        NzButtonModule
    ]
})
export class ProgramsComponent { }
