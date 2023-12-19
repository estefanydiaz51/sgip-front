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
  Coordinator,
  Program,
  RegistryCoordinator,
  Teacher,
} from '../../../../interfaces/general.interfaces';
import { GeneralService } from '../../../../services/general.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-edit-coordinator-modal',
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
  templateUrl: './edit-coordinator-modal.component.html',
  styleUrl: './edit-coordinator-modal.component.scss',
})
export class EditCoordinatorModalComponent implements OnInit {
  @Input() isVisible!: boolean;
  @Input() coordinatorData!: Coordinator;
  @Input() listOfOptions!: Program[];
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
      surname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      programId: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]]
    });
  }

  setForm(): void {
    this.form.controls['name'].setValue(
      this.coordinatorData.name ? this.coordinatorData.name : ''
    );
    this.form.controls['id'].setValue(
      this.coordinatorData._id ? this.coordinatorData._id : ''
    );
    this.form.controls['surname'].setValue(
      this.coordinatorData.surname ? this.coordinatorData.surname : ''
    );
    this.form.controls['email'].setValue(
      this.coordinatorData.email ? this.coordinatorData.email : ''
    );
    this.form.controls['password'].setValue(
      this.coordinatorData.password ? this.coordinatorData.password : ''
    );
    this.form.controls['programId'].setValue(
      this.coordinatorData.programs ? (this.coordinatorData.programs[0]? this.coordinatorData.programs[0] : '') : ''
    );

    this.list = this.coordinatorData.programs
      ? this.coordinatorData.programs
      : [];
    this.form.updateValueAndValidity();
  }

  updateCoordinator(): void {

    let data: Coordinator = {
      name: this.form.value['name'],
      surname: this.form.value['surname'],
      email: this.form.value['email'],
      programId: this.form.value['programId'],
      password: this.form.value['password'],
      coordinatorId: this.coordinatorData._id
    };

    this.generalService.updateCoordinator(data).subscribe(
      (res) => {
        this.hideModalEvent.emit(false);
        this.reloadTable.emit(true);
        //this.generalService.reloadProgramList.next(true);
        this.notificacionService.success(
          'Éxito',
          'Se ah actualizado el coordinador.'
        );
      },
      (error) => {
        this.notificacionService.error(
          'Error',
          'Hubo un error al intentar actualizar el coordinador'
        );
      }
    );
  }

  getCohortsArray(teachersIdsArray: []): Teacher[] {
    console.log(teachersIdsArray);

    // let teacherArray: Teacher[] = [];
    // if (teachersIdsArray && this.listOfOptions) {
    //   teachersIdsArray.forEach((id) => {
    //     this.listOfOptions.forEach((teacher) => {
    //       if (teacher._id === id) {
    //         teacherArray.push(teacher);
    //       }
    //     });
    //   });
    // }
    return teachersIdsArray;
  }

  cambio(cambio: any) {
    //console.log(cambio,this.list);
  }
}
