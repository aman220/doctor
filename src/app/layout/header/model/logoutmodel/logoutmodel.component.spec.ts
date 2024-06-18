import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutmodelComponent } from './logoutmodel.component';

describe('LogoutmodelComponent', () => {
  let component: LogoutmodelComponent;
  let fixture: ComponentFixture<LogoutmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutmodelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
