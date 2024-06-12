import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctornoteComponent } from './doctornote.component';

describe('DoctornoteComponent', () => {
  let component: DoctornoteComponent;
  let fixture: ComponentFixture<DoctornoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctornoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctornoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
