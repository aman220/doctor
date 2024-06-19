import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, MatProgressSpinnerModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginObj: Login;
  isSaving: boolean = false;
  loginError: string | null = null;
  passwordFieldType: string = 'password';

  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router ,private _snackBar: MatSnackBar, private roleservice : RoleService) {
    this.loginObj = new Login();
  }

  ngOnInit(): void {
    let id = localStorage.getItem("id");
    if(id){
      this.openSnackBar("Already Sign In")
      this.router.navigateByUrl('')
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message , "Close" ,{
      duration:3000
    })
  }

  onLogin() {
    this.isSaving = true;
    this.loginError = null;
    const { email, password } = this.loginObj;
    const userCreds = { email, password };
    
    this.authService.login(userCreds).pipe(
      catchError(err => {
        this.handleError(err);
        return of(null); 
      })
    ).subscribe(res => {
      if (res) {
        this.roleservice.setRole(res.response.role);
        localStorage.setItem('id', res.response.id);
        localStorage.setItem('name', res.response.name);
        localStorage.setItem('role', res.response.role);
        this.router.navigateByUrl('/');
      }
      this.isSaving = false;
    });
  }


  private handleError(error: any) {
    console.error('Login error', error);
    this.isSaving = false;
    this.openSnackBar(error.error.message)
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}

class Login {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
