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
  selector: 'app-edit-teacher-modal',
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
  templateUrl: './edit-teacher-modal.component.html',
  styleUrl: './edit-teacher-modal.component.scss',
})
export class EditTeacherModalComponent implements OnInit {
  @Input() isVisible!: boolean;
  @Input() teacherData!: Teacher;
  @Input() listOfOptions!: Teacher[];
  @Output() reloadTable = new EventEmitter<boolean>();
  @Output() hideModalEvent = new EventEmitter<boolean>();
  listOfTagOptions = [];

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
    console.log(this.teacherData);
    this.formInit();
    this.setForm();
  }

  formInit(): void {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      academicTraining: ['', [Validators.required]],
      idCard: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      address: ['', [Validators.required]],
      knowledgeAreas: [[], [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  setForm(): void {
    this.form.controls['name'].setValue(
      this.teacherData.name ? this.teacherData.name : ''
    );
    this.form.controls['id'].setValue(
      this.teacherData._id ? this.teacherData._id : ''
    );
    this.form.controls['academicTraining'].setValue(
      this.teacherData.academicTraining ? this.teacherData.academicTraining : ''
    );
    this.form.controls['idCard'].setValue(
      this.teacherData.idCard ? this.teacherData.idCard : ''
    );
    this.form.controls['birthDay'].setValue(
      this.teacherData.birthDay ? this.teacherData.birthDay : ''
    );
    this.form.controls['address'].setValue(
      this.teacherData.address ? this.teacherData.address : ''
    );

    this.form.controls['email'].setValue(
      this.teacherData.email ? this.teacherData.email : ''
    );
    this.form.controls['gender'].setValue(
      this.teacherData.gender ? this.teacherData.gender : ''
    );
    this.form.controls['phone'].setValue(
      this.teacherData.gender ? this.teacherData.gender : ''
    );
    this.form.controls['knowledgeAreas'].setValue(
      this.teacherData.knowledgeAreas
    );

    this.form.updateValueAndValidity();
  }

  updateTeacher(): void {
    let data: Teacher = {
      teacherId: this.form.value['id'],
      name: this.form.value['name'],
      academicTraining: this.form.value['academicTraining'],
      idCard: this.form.value['idCard'],
      birthDay: this.form.value['birthDay'],
      address: this.form.value['address'],
      email: this.form.value['email'],
      gender: this.form.value['gender'],
      knowledgeAreas: this.form.value['knowledgeAreas'],
      phone: this.form.value['phone'],
    };

    this.generalService.updateTeacher(data).subscribe(
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

  cambio($event: any): void {
    this.form.controls['knowledgeAreas'].setValue(this.listOfTagOptions);
    this.form.controls['knowledgeAreas'].updateValueAndValidity();
  }
}
