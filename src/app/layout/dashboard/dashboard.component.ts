import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor ( private router: Router){}

  goPatient() {
    this.router.navigate(['/patient']);
  }
  goDoctor() {
    this.router.navigate(['/doctor']);
  }
  goCalender() {
    this.router.navigate(['/calender']);
  }
  gogeneralawareness() {
    this.router.navigate(['/generalawareness']);
  }
}
