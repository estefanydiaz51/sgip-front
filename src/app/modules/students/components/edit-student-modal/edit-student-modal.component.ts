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
import {
  Cohort,
  Student,
  Teacher,
} from '../../../../interfaces/general.interfaces';
import { GeneralService } from '../../../../services/general.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-edit-student-modal',
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
  templateUrl: './edit-student-modal.component.html',
  styleUrl: './edit-student-modal.component.scss',
})
export class EditStudentModalComponent implements OnInit {
  @Input() isVisible!: boolean;
  @Input() studentData!: Student;
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
      studentCode: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      civilStatus: ['', [Validators.required]],
      ingressDate: ['', [Validators.required]],
      egressDate: ['', [Validators.required]],
      email: ['', [Validators.required]],
      cohortId: ['', [Validators.required]],
    });
  }

  setForm(): void {
    this.form.controls['name'].setValue(
      this.studentData.name ? this.studentData.name : ''
    );
    this.form.controls['id'].setValue(
      this.studentData._id ? this.studentData._id : ''
    );
    this.form.controls['studentCode'].setValue(
      this.studentData.studentCode ? this.studentData.studentCode : ''
    );
    this.form.controls['photo'].setValue(
      this.studentData.photo ? this.studentData.photo : ''
    );
    this.form.controls['address'].setValue(
      this.studentData.address ? this.studentData.address : ''
    );
    this.form.controls['phone'].setValue(
      this.studentData.phone ? this.studentData.phone : ''
    );

    this.form.controls['gender'].setValue(
      this.studentData.gender ? this.studentData.gender : ''
    );
    this.form.controls['birthDay'].setValue(
      this.studentData.birthDay ? this.studentData.birthDay : ''
    );
    this.form.controls['semester'].setValue(
      this.studentData.semester ? this.studentData.semester : ''
    );
    this.form.controls['civilStatus'].setValue(
      this.studentData.civilStatus ? this.studentData.civilStatus : ''
    );
    this.form.controls['ingressDate'].setValue(
      this.studentData.ingressDate ? this.studentData.ingressDate : ''
    );
    this.form.controls['egressDate'].setValue(
      this.studentData.egressDate ? this.studentData.egressDate : ''
    );
    this.form.controls['email'].setValue(
      this.studentData.email ? this.studentData.email : ''
    );
    this.form.updateValueAndValidity();
  }

  updateCohort(): void {
    let data: Student = {
      name: this.form.value['name'],
      id: this.form.value['id'],
      studentCode: this.form.value['studentCode'],
      photo: this.form.value['photo'],
      address: this.form.value['address'],
      phone: this.form.value['phone'],
      gender: this.form.value['gender'],
      birthDay: this.form.value['birthDay'],
      semester: this.form.value['semester'],
      civilStatus: this.form.value['civilStatus'],
      ingressDate: this.form.value['ingressDate'],
      egressDate: this.form.value['egressDate'],
      email: this.form.value['email'],
    };

    this.generalService.updateStudent(data).subscribe(
      (res) => {
        this.hideModalEvent.emit(false);
        this.generalService.reloadProgramList.next(true);
        this.notificacionService.success(
          'Éxito',
          'Se ah actualizado el Estudiante.'
        );
      },
      (error) => {
        this.notificacionService.error(
          'Error',
          'Hubo un error al intentar actualizar el Estudiante'
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
