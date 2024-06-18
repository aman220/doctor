import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'doctor';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
   
    if (this.isSignupRoute()) {
      console.log(this.isSignupRoute())
    } else {
      this.checkLogin();
    }
  }

  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }

  isSignupRoute(): boolean {
  
    return this.router.url === '/signup';
  }

  checkLogin(): void {
    const id = localStorage.getItem("id");
    if (!id) {
      this.router.navigateByUrl('/login');
    }
  }
}
