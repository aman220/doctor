import { Component } from '@angular/core';
import { ModelComponent } from './model/model.component';
import { PreviousvisitComponent } from './model/previousvisit/previousvisit.component';
import { DoctornoteComponent } from './model/doctornote/doctornote.component';
import { StaffnoteComponent } from './model/staffnote/staffnote.component';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [ModelComponent , PreviousvisitComponent , DoctornoteComponent,StaffnoteComponent],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {

}
