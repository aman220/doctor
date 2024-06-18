import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RefreshService {
  private refreshSource = new Subject<string>();
  refresh$ = this.refreshSource.asObservable();

  triggerRefresh(componentName: string) {
    this.refreshSource.next(componentName);
  }
}