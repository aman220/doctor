import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private role: string | null;

  constructor() {
   
    this.role = ''; 
  }

  setRole(role: string) {
    this.role = role;
    console.log(role)
  }

  getRole(): string | null {
    return this.role;
  }

  isDoctor(): boolean {
    this.role = localStorage.getItem('role');
    return this.role === 'Doctor';
  }

  isRecipient(): boolean {
    return this.role === 'recipient';
  }
}
