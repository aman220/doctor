import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {  RoleService } from './services/role.service';


@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private roleservice: RoleService, private router: Router) {}

  canActivate(): boolean {
    if (this.roleservice.isDoctor()) {
      return true; 
     
    } else {
      this.router.navigate(['/forbidden']); 
      return false;
    }
  }
}
