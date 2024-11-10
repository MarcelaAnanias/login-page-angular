import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';

interface singupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  confirmpassword: FormControl
}

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [
    CommonModule,
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [LoginService],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss'
})
export class SingupComponent {
  singupForm!: FormGroup; //Cria uma propriedade chamada loginForm do tipo FormGroup, que armazenará todos os campos do formulário.
  showImage = false;

  constructor( 
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService)
  {
    this.singupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  submit(){
    this.loginService.login (this.singupForm.value.email, this.singupForm.value.password).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Dados Incorretos! Tente novamente.")
    })
  }

  navegator(){
    this.router.navigate (["singup"])
  }
}
