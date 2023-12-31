import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginData } from '../../interfaces/general.interfaces';
import { Router } from '@angular/router';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule, CommonModule,NzInputModule,FormsModule,ReactiveFormsModule,NzFormModule,NzButtonModule,NzNotificationModule
  ],
  templateUrl:'./signin.component.html',
  styleUrl: './signin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent implements OnInit { 

  form!:FormGroup;
  
  constructor(
    private formBuilder : FormBuilder, 
    private authService : AuthService, 
    private routerService : Router,
    private notification: NzNotificationService,
    private generalService : GeneralService){
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
    let loginData : LoginData = {email:this.form.value['email'], password:this.form.value['pass']};
    this.authService.generaLoading.next(true);
    this.authService.login(loginData).subscribe(res=>{
      localStorage.setItem('token',res.token);
      this.authService.generaLoading.next(false);
      this.generalService.userData.next(res.user);
      this.routerService.navigate(['home']).then(res=>{
        location.reload();
      });
    },error=>{
      this.notification.error('Error',error.message? error.message : 'Ha ocurrido un error al intentar iniciar sesión')
      this.authService.generaLoading.next(false);
    });
  }
}