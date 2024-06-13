import { Component} from '@angular/core';
import {
  FormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  loginObj: Login;
  

  constructor(private authService: AuthService, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    const {email , password} = this.loginObj;
    const userCreds = {
      email:email,
      password :password,
    }
    this.authService.login(userCreds).subscribe((res:any)=>{
        localStorage.setItem('id', res.response.id);
        this.router.navigateByUrl('')
    })
  }

}

export class Login {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
