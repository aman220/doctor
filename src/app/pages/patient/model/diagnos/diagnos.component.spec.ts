import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosComponent } from './diagnos.component';

describe('DiagnosComponent', () => {
  let component: DiagnosComponent;
  let fixture: ComponentFixture<DiagnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiagnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
