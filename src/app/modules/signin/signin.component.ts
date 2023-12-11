import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule, CommonModule,NzInputModule,FormsModule,ReactiveFormsModule,NzFormModule,NzButtonModule
  ],
  templateUrl:'./signin.component.html',
  styleUrl: './signin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent implements OnInit { 

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
      email:['',[Validators.required]],
      pass:['',[Validators.required]]
    });
  }

  login() : void{

  }
}