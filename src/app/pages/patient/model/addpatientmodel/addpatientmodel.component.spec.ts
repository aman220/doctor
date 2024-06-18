import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpatientmodelComponent } from './addpatientmodel.component';

describe('AddpatientmodelComponent', () => {
  let component: AddpatientmodelComponent;
  let fixture: ComponentFixture<AddpatientmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddpatientmodelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddpatientmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
