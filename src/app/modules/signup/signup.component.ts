import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,NzInputModule,FormsModule,ReactiveFormsModule,NzFormModule,NzButtonModule
  ],
  templateUrl:'./signup.component.html',
  styleUrl: './signup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit { 

  form!:FormGroup;
  
  constructor(private formBuilder : FormBuilder, private authService : AuthService){
    this.formInit();
  }

  ngOnInit(): void {
    
  }

  /**
   * Inicializa el formulario
   */
  formInit() : void {
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      pass:['',[Validators.required]],
      passConfirm:['',[Validators.required]]
    });
  }

  register() : void{

  }

}
