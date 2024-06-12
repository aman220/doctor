import { Component } from '@angular/core';
import { DoctorbookComponent } from '../patient/model/doctorbook/doctorbook.component';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [DoctorbookComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

}
