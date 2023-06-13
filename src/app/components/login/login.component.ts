import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: FormGroup;
  loading = false;


  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router: Router) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar() {

    const usuario = this.login.value.usuario;
    const password = this.login.value.password;
    console.log(usuario);
    console.log(password);

    if (usuario == 'gary' && password == 'ads') {
      //dashboard
      this.FakeLoading();
    } else {
      //muestra error
      this.error();
      this.login.reset();
    }
  }

  error(){
    this._snackBar.open('usuario o contraseña son invalidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

 FakeLoading(){
  this.loading =true;
  setTimeout(() => {
    this.loading =false;
    this.router.navigate(['dashboard']);
  }, 300);
 }

}
