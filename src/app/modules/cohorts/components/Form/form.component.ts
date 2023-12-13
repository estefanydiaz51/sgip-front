import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { NzNotificationModule } from 'ng-zorro-antd/notification';

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

  constructor(private fb: FormBuilder) {}

  formInit(): void {
    this.formData = this.fb.nonNullable.group({
      adviserGive: ['', { validators: [Validators.required] }],
      clientToGive: [['Todos'], [Validators.required]],
      adviserDestination: ['', { validators: [Validators.required] }],
      reasonGive: ['', { validators: [Validators.required] }],
      observations: [
        '',
        {
          updateOn: 'blur',
        },
      ],
    });
  }

  isFormInvalid() {
    if (
      this.formData.controls['adviserGive'].invalid ||
      this.formData.controls['clientToGive'].invalid ||
      this.formData.controls['adviserDestination'].invalid ||
      this.formData.controls['reasonGive'].invalid ||
      this.formData.controls['observations'].invalid
    ) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    this.formInit();
    // if (this.valueList === valueListInitialState.data) {
    //   // Evalúa si los datos de lista de valores no han sido cargados
    //   this.loadingValourList = true;
    //   this.store.dispatch(startLoadingValueList()); // En caso contrario, se llama al servicio para cargarlos de nuevo
    // }
  }
}
