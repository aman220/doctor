import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  
})
export class SidebarComponent {

  constructor(public sidebarService: SidebarService , private router: Router) {}


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
