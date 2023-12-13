import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthService } from '../../services/auth.service';
import { RegisterData } from '../../interfaces/general.interfaces';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,NzInputModule,FormsModule,ReactiveFormsModule,NzFormModule,NzButtonModule
  ],
  templateUrl:'./signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit { 

  form!:FormGroup;
  
  constructor(
    private formBuilder : FormBuilder, 
    private authService : AuthService, 
    private routerService : Router,
    private notification : NzNotificationService){
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
      surname:['',[Validators.required]],
      email:['',[Validators.required]],
      pass:['',[Validators.required]],
      passConfirm:['',[Validators.required]]
    });
  }

  register() : void{
    let registerData : RegisterData = {
      email:this.form.value['email'], 
      password:this.form.value['pass'],
      name:this.form.value['name'],
      surname:this.form.value['surname']
    };
    this.authService.generaLoading.next(true);
    this.authService.register(registerData).subscribe(res=>{
      localStorage.setItem('token',res.token);
      this.routerService.navigate(['home']);
      this.authService.generaLoading.next(false);
      this.notification.success('Éxito','Bienvenido a SGIPS, usted ah iniciado sesión correctamente');
    },error=>{
      this.notification.error('Error',error.message? error.message : 'Ha ocurrido un error al intentar iniciar sesión')
      this.authService.generaLoading.next(false);
    });
  }

}
