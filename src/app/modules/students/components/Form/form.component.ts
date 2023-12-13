import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { GeneralService } from '../../../../services/general.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Cohort, Student } from '../../../../interfaces/general.interfaces';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';


@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  imports: [
    CommonModule,
    NzButtonModule,
    CommonModule,
    CommonModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzNotificationModule,
    NzDatePickerModule,
    NzSelectModule
  ],
})
export class FormComponent implements OnInit {
  formData!: FormGroup;

  @Output() reloadTable = new EventEmitter<boolean>();
  @Output() hideForm = new EventEmitter<boolean>();
  cohorts: Cohort[] = [];

  constructor(
    private fb: FormBuilder,
    private generalService: GeneralService,
    private notificacionService: NzNotificationService,
    private msg: NzMessageService
  ) {}

  formInit(): void {
    this.formData = this.fb.group({
      name: ['', [Validators.required]],
      id: ['', [Validators.required]],
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
      cohortId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.formInit();
    this.getCohorts();
  }

  createStudent(): void {
    let data: Student = {
      name: this.formData.value['name'],
      id: this.formData.value['id'],
      studentCode: this.formData.value['studentCode'],
      photo: this.formData.value['photo'],
      address: this.formData.value['address'],
      phone: this.formData.value['phone'],
      gender: this.formData.value['gender'],
      birthDay: this.formData.value['birthDay'],
      semester: this.formData.value['semester'],
      civilStatus: this.formData.value['civilStatus'],
      ingressDate: this.formData.value['ingressDate'],
      egressDate: this.formData.value['egressDate'],
      email: this.formData.value['email'],
      cohortId: this.formData.value['cohortId']
    };

    this.generalService.createStudent(data).subscribe(
      (res) => {
        this.hideForm.emit(false);
        this.reloadTable.emit(true);
        this.notificacionService.success(
          'Éxito',
          'Se ha añadido el nuevo Estudiante.'
        );
      },
      (error) => {
        this.notificacionService.error(
          'Error',
          'Hubo un error al intentar crear el Estudiante'
        );
      }
    );
  }

  getCohorts(): void {
    this.generalService.getCohorts().subscribe((res) => {
      this.cohorts = res;
    });
  }

}
