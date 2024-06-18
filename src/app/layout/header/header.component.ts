import { Component, OnInit } from '@angular/core';
import { LogoutmodelComponent } from './model/logoutmodel/logoutmodel.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoutmodelComponent],
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
}
