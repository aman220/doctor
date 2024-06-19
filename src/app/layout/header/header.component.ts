import { Component, OnInit } from '@angular/core';
import { LogoutmodelComponent } from './model/logoutmodel/logoutmodel.component';
import { SidebarService } from '../../services/sidebar.service';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoutmodelComponent , MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  role : string | null = '';

  ngOnInit(): void {
      this.getrole()
  }

  getrole(){
    this.role = localStorage.getItem('role')
  }

  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
