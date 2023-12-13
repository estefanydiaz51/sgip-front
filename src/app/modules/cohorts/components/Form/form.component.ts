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
import { Cohort } from '../../../../interfaces/general.interfaces';
import { GeneralService } from '../../../../services/general.service';
import { NzMessageService } from 'ng-zorro-antd/message';

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
  ],
})
export class FormComponent implements OnInit {
  formData!: FormGroup;

  @Output() reloadTable = new EventEmitter<boolean>();
  @Output() hideForm = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private generalService: GeneralService,
    private notificacionService: NzNotificationService,
    private msg: NzMessageService
  ) {}

  formInit(): void {
    this.formData = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      numberStudents: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.formInit();
  }

  createCohort(): void {
    let data: Cohort = {
      name: this.formData.value['name'],
      code: this.formData.value['code'],
      numberStudents: this.formData.value['numberStudents'],
      startDate: this.formData.value['startDate'],
      EndDate: this.formData.value['endDate'],
    };

    this.generalService.createCohort(data).subscribe(
      (res) => {
        this.hideForm.emit(false);
        this.reloadTable.emit(true);
        this.notificacionService.success(
          'Éxito',
          'Se ha añadido el nuevo Cohorte.'
        );
      },
      (error) => {
        this.notificacionService.error(
          'Error',
          'Hubo un error al intentar crear el programa'
        );
      }
    );
  }
}
