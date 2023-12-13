import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { Program } from '../../../../interfaces/general.interfaces';
import { GeneralService } from '../../../../services/general.service';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-program-create-form',
  standalone: true,
  imports: [
    CommonModule, NzUploadModule, NzDatePickerModule,NzInputModule,FormsModule,ReactiveFormsModule,NzFormModule,NzButtonModule,NzNotificationModule
  ],
  templateUrl: './program-create-form.component.html',
  styleUrl: './program-create-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramCreateFormComponent implements OnInit {

  @Output() reloadTable = new EventEmitter<boolean>();
  @Output() hideForm = new EventEmitter<boolean>();

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
      id:['',[Validators.required]],
      description:['',[Validators.required]],
      logo:['',[Validators.required]],
      email:['',[Validators.required]],
      researchLines:['',[Validators.required]],
      dateRegistration:['',[Validators.required]],
      numberResolutionOfQualifiedRegistration:['',[Validators.required]],
      resolutionFile:['',[Validators.required]]
    })
  }

  createProgram(): void{
    let data : Program = {
      name:this.form.value['name'],
      id:this.form.value['id'],
      description:this.form.value['description'],
      logo:this.form.value['logo'],
      email:this.form.value['email'],
      researchLines:this.form.value['researchLines'],
      dateRegistration:this.form.value['dateRegistration'],
      numberResolutionOfQualifiedRegistration:this.form.value['numberResolutionOfQualifiedRegistration'],
      resolutionFile:this.form.value['resolutionFile']
    }

    this.generalService.createProgram(data).subscribe(res=>{
      this.hideForm.emit(false);
      this.reloadTable.emit(true);
      this.notificacionService.success('Éxito','Se ah añadido el nuevo programa.');
    },error=>{
      this.notificacionService.error('Error','Hubo un error al intentar crear el programa');
    });

  }

  // handleChange(info: NzUploadChangeParam): void {
  //   if (info.file.status !== 'uploading') {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (info.file.status === 'done') {
  //     this.msg.success(`${info.file.name} file uploaded successfully`);
  //   } else if (info.file.status === 'error') {
  //     this.msg.error(`${info.file.name} file upload failed.`);
  //   }
  // }

 }
