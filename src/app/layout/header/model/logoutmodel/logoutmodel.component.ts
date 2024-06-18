import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutmodel',
  standalone: true,
  imports: [],
  templateUrl: './logoutmodel.component.html',
  styleUrl: './logoutmodel.component.css'
})
export class LogoutmodelComponent {
  constructor(private router: Router) {}
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }
}
