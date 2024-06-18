import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../../../../services/getpatient.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppointmentService } from '../../../../services/appoitement.service';

interface Patient {
  phid: string;
  name: string;
}

@Component({
  selector: 'app-doctorbook',
  standalone: true,
  imports: [CommonModule, FormsModule, MatProgressSpinnerModule],
  templateUrl: './doctorbook.component.html',
  styleUrls: ['./doctorbook.component.css']
})
export class DoctorbookComponent implements OnInit {
  @Input() id!: string;
  patients: Patient[] = [];
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  years: number[] = [2024, 2025, 2026, 2027, 2028, 2029, 2030];
  selectedMonth: string = '';
  selectedYear: number = 0;
  selectedDate: string = '';
  selectedTime: string = '';
  selectedPatient: Patient | null = null;
  isSaving: boolean = false;

  constructor(private patientService: PatientService, private _snackBar: MatSnackBar ,private appointmentService: AppointmentService) {}

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", { duration: 3000 });
  }

  ngOnInit(): void {
    console.log(this.id)
    this.check(this.id);
    this.patientService.getPatients().subscribe((data) => {
      if (data.status === 'Success') {
        this.patients = data.response.records;
      }
    });
  }

  check(id: string): void {
    this.id = id;
    localStorage.setItem('did', id);
  }

  recheck(): String {
    let id = localStorage.getItem('did');
    return id !== null ? id : '';
  }

  generateRandomId(): string {
    let dia_c = 'D';
    for (let i = 0; i < 3; i++) {
      dia_c += Math.floor(Math.random() * 10).toString();
    }
    return dia_c;
  }

  saveChanges(): void {
    this.isSaving = true;
    const appointmentData = {
      diagnostic_code: this.generateRandomId(),
      patient_id:  this.selectedPatient ? this.selectedPatient.phid : '',
      physician_id: this.recheck(),
      appointment_date_from: `${this.selectedYear}-${(this.months.indexOf(this.selectedMonth) + 1)
      .toString()
      .padStart(2, '0')}-${this.selectedDate.toString().padStart(2, '0')}T${this.selectedTime}:00.000Z`
    
    };

    this.appointmentService.addAppointment(appointmentData).subscribe(
      (response) => {
        console.log('Appointment added successfully:', response);
        this.isSaving = true;
        setTimeout(() => {
          this.isSaving = false;
          this.openSnackBar("Appointment Scheduled Successfully");
        }, 2000);
      },
      (error) => {
        console.error('Error adding appointment:', error);
      }
    );
  }

  onDateSelect(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('col') && !target.classList.contains('text-muted')) {
      const selected = document.querySelector('.calendar .selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      target.classList.add('selected');
      this.selectedDate = target.innerText.trim();
    }
  }

  onTimeSelect(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('time-btn') && !target.classList.contains('btn-danger')) {
      const selected = document.querySelector('.time-selector .time-btn.selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      target.classList.add('selected');
      this.selectedTime = target.innerText.trim().replace(/\s*[ap]\.?m\.?$/i, '');
    }
  }

  onPatientSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const patientId = target.value;
    this.selectedPatient = this.patients.find((patient) => patient.phid === patientId) || null;
  }
}
