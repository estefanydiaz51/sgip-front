import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  type OnInit,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { Cohort, Teacher } from '../../../../interfaces/general.interfaces';
import { GeneralService } from '../../../../services/general.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-edit-cohort-modal',
  standalone: true,
  imports: [
    CommonModule,
    NzModalModule,
    NzUploadModule,
    NzDatePickerModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzNotificationModule,
    NzGridModule,
    NzSelectModule,
  ],
  templateUrl: './edit-cohort-modal.component.html',
  styleUrl: './edit-cohort-modal.component.scss',
})
export class EditCohortModalComponent implements OnInit {
  @Input() isVisible!: boolean;
  @Input() cohortData!: Cohort;
  @Input() listOfOptions!: Teacher[];
  @Output() reloadTable = new EventEmitter<boolean>();
  @Output() hideModalEvent = new EventEmitter<boolean>();
  modalBodyStyle = {
    maxHeight: '60vh',
    overflow: 'auto',
    'padding-top': '0px',
  };
  form!: FormGroup;
  list: string[] = [];

  constructor(
    private fb: FormBuilder,
    private generalService: GeneralService,
    private notificacionService: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.formInit();
    this.setForm();
  }

  formInit(): void {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      numberStudents: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      EndDate: ['', [Validators.required]],
    });
  }

  setForm(): void {
    this.form.controls['name'].setValue(
      this.cohortData.name ? this.cohortData.name : ''
    );
    this.form.controls['id'].setValue(
      this.cohortData._id ? this.cohortData._id : ''
    );
    this.form.controls['code'].setValue(
      this.cohortData.code ? this.cohortData.code : ''
    );
    this.form.controls['numberStudents'].setValue(
      this.cohortData.numberStudents ? this.cohortData.numberStudents : ''
    );
    this.form.controls['startDate'].setValue(
      this.cohortData.startDate ? this.cohortData.startDate : ''
    );
    this.form.controls['EndDate'].setValue(
      this.cohortData.EndDate ? this.cohortData.EndDate : ''
    );
    this.list = this.cohortData.teachers ? this.cohortData.teachers : [];
    this.form.updateValueAndValidity();
  }

  updateCohort(): void {
    let data: Cohort = {
      name: this.form.value['name'],
      cohortId: this.form.value['id'],
      code: this.form.value['code'],
      numberStudents: this.form.value['numberStudents'],
      startDate: this.form.value['startDate'],
      EndDate: this.form.value['EndDate'],
      teachers: this.list,
    };

    this.generalService.updateCohort(data).subscribe(
      (res) => {
        this.hideModalEvent.emit(false);
        this.generalService.reloadProgramList.next(true);
        this.notificacionService.success(
          'Éxito',
          'Se ah actualizado el programa.'
        );
      },
      (error) => {
        this.notificacionService.error(
          'Error',
          'Hubo un error al intentar actualizar el programa'
        );
      }
    );
  }

  getCohortsArray(teachersIdsArray: []): Teacher[] {
    console.log(teachersIdsArray);

    let teacherArray: Teacher[] = [];
    if (teachersIdsArray && this.listOfOptions) {
      teachersIdsArray.forEach((id) => {
        this.listOfOptions.forEach((teacher) => {
          if (teacher._id === id) {
            teacherArray.push(teacher);
          }
        });
      });
    }
    return teacherArray;
  }

  cambio(cambio: any) {
    //console.log(cambio,this.list);
  }
}
