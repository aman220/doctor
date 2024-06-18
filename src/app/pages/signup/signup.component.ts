import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule , MatProgressSpinnerModule , CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupObj: Signup;
  isSaving: boolean = false;

  constructor(private authService: SignupService, private router: Router , private _snackBar: MatSnackBar) {
    this.signupObj = new Signup();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message , "Close" ,{
      duration:3000
    })
  }

  onSignup() {
    this.isSaving = true;
    const { name, email, password, role } = this.signupObj;
    const userDetails = {
      name: name,
      email: email,
      password: password,
      role: role,
    };
    
    this.authService.signup(userDetails).pipe(
      catchError(err => {
        this.handleError(err);
        return of(null); 
      })
    ).subscribe((res: any) => {
      this.isSaving = false;
      localStorage.setItem('id', res.response.id);
      localStorage.setItem('name', res.response.name);
      localStorage.setItem('role' ,res.response.role)
      this.router.navigateByUrl(''); 
    });
  }

  private handleError(error: any) {
    console.error('signup error', error.error);
    this.isSaving = false;
    this.openSnackBar(error.error.message)
  }
}

export class Signup {
  name: string;
  email: string;
  password: string;
  role: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.role = 'Receptionist'; // Default role, you can modify this as needed
  }
}
