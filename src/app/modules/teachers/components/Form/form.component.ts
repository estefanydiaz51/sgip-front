import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Teacher } from '../../../../interfaces/general.interfaces';
import { GeneralService } from '../../../../services/general.service';
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
    NzGridModule,
    NzDatePickerModule,
    NzSelectModule
  ],
})
export class FormComponent implements OnInit {

  @Output() reloadTable = new EventEmitter<boolean>();
  @Output() hideForm = new EventEmitter<boolean>();
  listOfTagOptions = [];
  formData!: FormGroup;

  constructor(
    private fb : FormBuilder, 
    private generalService: GeneralService, 
    private notificacionService: NzNotificationService,) {}

  formInit(): void {
    this.formData = this.fb.nonNullable.group({
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

  ngOnInit(): void {
    this.formInit();
  }

  createTeacher(): void{
    let data : Teacher = {
      name:this.formData.value['name'],
      academicTraining:this.formData.value['academicTraining'],
      idCard:this.formData.value['idCard'],
      birthDay:this.formData.value['birthDay'],
      address:this.formData.value['address'],
      email:this.formData.value['email'],
      gender:this.formData.value['gender'],
      knowledgeAreas:this.formData.value['knowledgeAreas'],
      phone:this.formData.value['phone']
    }

    this.generalService.createtTeacher(data).subscribe(res=>{
      this.hideForm.emit(false);
      this.reloadTable.emit(true);
      this.notificacionService.success('Éxito','Se ah añadido el nuevo docente.');
    },error=>{
      this.notificacionService.error('Error','Hubo un error al intentar crear el docente');
    });

  }

  cambio($event:any):void{
    this.formData.controls['knowledgeAreas'].setValue(this.listOfTagOptions);
    this.formData.controls['knowledgeAreas'].updateValueAndValidity();
  }

}
