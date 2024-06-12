import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralawarenessComponent } from './generalawareness.component';

describe('GeneralawarenessComponent', () => {
  let component: GeneralawarenessComponent;
  let fixture: ComponentFixture<GeneralawarenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralawarenessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralawarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
