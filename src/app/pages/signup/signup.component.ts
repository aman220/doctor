import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup', // Updated selector to reflect the component name
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupObj: Signup; // Renamed from Login to Signup

  constructor(private authService: SignupService, private router: Router) {
    this.signupObj = new Signup();
  }

  onSignup() {
    const { name, email, password, role } = this.signupObj;
    const userDetails = {
      name: name,
      email: email,
      password: password,
      role: role,
    };
    
    this.authService.signup(userDetails).subscribe((res: any) => {
      console.log(res)
      localStorage.setItem('id', res.response.id);
      localStorage.setItem('name', res.response.name);
      localStorage.setItem('role' ,res.response.role)
      this.router.navigateByUrl(''); 
    });
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
