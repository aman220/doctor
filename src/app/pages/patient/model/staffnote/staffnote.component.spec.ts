import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffnoteComponent } from './staffnote.component';

describe('StaffnoteComponent', () => {
  let component: StaffnoteComponent;
  let fixture: ComponentFixture<StaffnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffnoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
