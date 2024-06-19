import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }

  isVisibleSidebar() {
    return this.isVisible;
  }
}
