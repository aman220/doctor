import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorbookComponent } from './doctorbook.component';

describe('DoctorbookComponent', () => {
  let component: DoctorbookComponent;
  let fixture: ComponentFixture<DoctorbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
