import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousvisitComponent } from './previousvisit.component';

describe('PreviousvisitComponent', () => {
  let component: PreviousvisitComponent;
  let fixture: ComponentFixture<PreviousvisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousvisitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
