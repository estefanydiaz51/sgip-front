import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, type OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { Cohort, Program } from '../../../../interfaces/general.interfaces';
import { GeneralService } from '../../../../services/general.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-edit-program-modal',
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
    NzSelectModule
  ],
  templateUrl: './edit-program-modal.component.html',
  styleUrl: './edit-program-modal.component.scss'
})
export class EditProgramModalComponent implements OnInit {
  
  @Input() isVisible !:boolean;
  @Input() programData !:Program;
  @Input() listOfOptions!:Cohort[];
  @Output() reloadTable = new EventEmitter<boolean>();
  @Output() hideModalEvent = new EventEmitter<boolean>();
  modalBodyStyle = {
    maxHeight : '60vh',
    overflow: 'auto',
    'padding-top': '0px'
  };
  form!:FormGroup;
  list:string[]=[];

  constructor(
    private fb : FormBuilder, 
    private generalService: GeneralService, 
    private notificacionService: NzNotificationService){}

  ngOnInit(): void {
    this.formInit();
    this.setForm();
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

  setForm() : void {
    this.form.controls['name'].setValue(this.programData.name? this.programData.name : '');
    this.form.controls['id'].setValue(this.programData._id? this.programData._id : '');
    this.form.controls['description'].setValue(this.programData.description? this.programData.description : '');
    this.form.controls['logo'].setValue(this.programData.logo? this.programData.logo : '');
    this.form.controls['email'].setValue(this.programData.email? this.programData.email : '');
    this.form.controls['researchLines'].setValue(this.programData.researchLines? this.programData.researchLines : '');
    this.form.controls['dateRegistration'].setValue(new Date(this.programData.dateRegistration)? this.programData.dateRegistration : '');
    this.form.controls['numberResolutionOfQualifiedRegistration'].setValue(this.programData.numberResolutionOfQualifiedRegistration? this.programData.numberResolutionOfQualifiedRegistration : '');
    this.form.controls['resolutionFile'].setValue(this.programData.resolutionFile? this.programData.resolutionFile : '');
    this.list = this.programData.cohorts? this.programData.cohorts : [];
    this.form.updateValueAndValidity();
  }

  updateProgram(): void{
    let data : Program = {
      name:this.form.value['name'],
      programId:this.form.value['id'],
      description:this.form.value['description'],
      logo:this.form.value['logo'],
      email:this.form.value['email'],
      researchLines:this.form.value['researchLines'],
      dateRegistration:this.form.value['dateRegistration'],
      numberResolutionOfQualifiedRegistration:this.form.value['numberResolutionOfQualifiedRegistration'],
      resolutionFile:this.form.value['resolutionFile'],
      cohortId:this.list,
    }

    this.generalService.updateProgram(data).subscribe(res=>{
      this.hideModalEvent.emit(false);
      this.generalService.reloadProgramList.next(true);
      this.notificacionService.success('Éxito','Se ah actualizado el programa.');
    },error=>{
      this.notificacionService.error('Error','Hubo un error al intentar actualizar el programa');
    });
  }

  getCohortsArray(cohortsIdsArray:string[]) : Cohort[] {
    let cohortArray : Cohort[] = [];
    if(cohortsIdsArray && this.listOfOptions){
      cohortsIdsArray.forEach(cohortId => {
        this.listOfOptions.forEach(cohort => {
          if(cohort._id === cohortId){
            cohortArray.push(cohort);
          }
        });
      });
    }
    return cohortArray;
  }

  cambio(cambio:any){
    //console.log(cambio,this.list);
  }

}
