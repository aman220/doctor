import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RefreshService } from './services/refress.service';
import { SidebarService } from './services/sidebar.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes) , provideHttpClient(), provideAnimationsAsync() , RefreshService , SidebarService]
};
