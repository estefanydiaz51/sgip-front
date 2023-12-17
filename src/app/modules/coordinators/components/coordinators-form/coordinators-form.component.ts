import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { GeneralService } from '../../../../services/general.service';
import { Program, RegistryCoordinator } from '../../../../interfaces/general.interfaces';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-coordinators-form',
  standalone: true,
  imports: [
    CommonModule, 
    NzUploadModule, 
    NzDatePickerModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzNotificationModule,
    NzSelectModule,
  ],
  templateUrl: `./coordinators-form.component.html`,
  styleUrl: './coordinators-form.component.scss'
})
export class CoordinatorsFormComponent {
  @Input() programs!:Program[];
  @Output() hideForm = new EventEmitter<boolean>(false);
  @Output() reloadTable = new EventEmitter<boolean>();
  listOfTagOptions = [];
  form!:FormGroup;

  constructor(
    private fb : FormBuilder, 
    private generalService: GeneralService, 
    private notificacionService: NzNotificationService){}

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void{
    this.form = this.fb.group({
      name:['',[Validators.required]],
      surname:['',[Validators.required]],
      email:['',[Validators.required]],
      programId:['',[Validators.required]],
      password:['',[Validators.required]],
      passwordConfirm:['',[Validators.required]]
    })
  }

  createCoordinator(): void{
    let data : RegistryCoordinator = {
      name:this.form.value['name'],
      surname:this.form.value['surname'],
      email:this.form.value['email'],
      password:this.form.value['password'],
      programId:this.form.value['programId']
    }

    this.generalService.createCoordinator(data).subscribe(res=>{
      this.hideForm.emit(false);
      this.reloadTable.emit(true);
      this.notificacionService.success('Éxito','Se ah registrado el nuevo coordinador.');
    },error=>{
      this.notificacionService.error('Error','Hubo un error al intentar registrar al coordinador');
    });
  }

  cambio($event: any): void {
    this.form.controls['knowledgeAreas'].setValue(this.listOfTagOptions);
    this.form.controls['knowledgeAreas'].updateValueAndValidity();
  }
}
