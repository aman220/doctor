import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../../services/appoitement.service';
import {
  NgbActiveModal,
  NgbModal,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RefreshService } from '../../../services/refress.service';

interface Doctor {
  id: string;
  name: string;
  role: string;
  specialization: string;
  email: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  appointment: any[];
}

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule ,MatProgressSpinnerModule],
  providers: [NgbActiveModal],
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  @Input() phid!: string;
  doctors: Doctor[] = [];
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years: number[] = [2024, 2025, 2026, 2027, 2028, 2029, 2030];
  selectedMonth: string = '';
  selectedYear: number = 0;
  selectedDate: string = '';
  selectedTime: string = '';
  selectedDoctor: Doctor | null = null;
  diagnosticCode: string = '';
  patientId: string = '';
  physicianId: string = '';
  appointmentDateTime: string = '';
  ppid: string = '';
  isSaving: boolean = false;

  constructor(
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    public activeModal: NgbActiveModal,
    private router: Router,
    private _snackBar: MatSnackBar,
    private refreshService: RefreshService
  ) {}

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", { duration: 3000 });
  }


  ngOnInit(): void {
    this.getDoctors();
    this.check(this.phid);
    console.log("oniniut wali" ,this.phid)
  }

  check(phid: string): void {
    this.ppid = phid;
    console.log('aya gyi  : ', this.ppid);
    localStorage.setItem('ppid', phid);
  }

  generateRandomId(): string {
    let dia_c = 'D';
    for (let i = 0; i < 3; i++) {
      dia_c += Math.floor(Math.random() * 10).toString();
    }
    return dia_c;
  }

  recheck(): String {
    let id = localStorage.getItem('ppid');
    return id !== null ? id : '';
  }

  

  saveChanges(): void {
    console.log('saveChanges - patientId:', this.phid , this.ppid);
    const appointmentData = {
      diagnostic_code: this.generateRandomId(),
      patient_id: this.recheck(),
      physician_id: this.selectedDoctor ? this.selectedDoctor.id : '',
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
          this.refreshService.triggerRefresh('PatientComponent');
        }, 2000);
      },
      (error) => {
        console.error('Error adding appointment:', error);
      }
    );
  }

  getDoctors(): void {
    this.doctorService.getDoctors('DOC', 'doctor', '1', '10').subscribe(
      (response) => {
        console.log('getDoctors - response:', response);
        this.doctors = response.response.records;
      },
      (error) => {
        console.error('Error fetching doctors:', error);
      }
    );
  }

  onDateSelect(event: Event): void {
    const target = event.target as HTMLElement;
    if (
      target.classList.contains('col') &&
      !target.classList.contains('text-muted')
    ) {
      const selected = document.querySelector('.calendar .selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      target.classList.add('selected');
      this.selectedDate =
        target.innerText.trim() 
    }
  }

  onTimeSelect(event: Event): void {
    const target = event.target as HTMLElement;
    if (
      target.classList.contains('time-btn') &&
      !target.classList.contains('btn-danger')
    ) {
      const selected = document.querySelector(
        '.time-selector .time-btn.selected'
      );
      if (selected) {
        selected.classList.remove('selected');
      }
      target.classList.add('selected');
      this.selectedTime = target.innerText.trim().replace(/\s*[ap]\.?m\.?$/i, '');

    }
  }

  onDoctorSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const doctorId = target.value;
    this.selectedDoctor =
      this.doctors.find((doctor) => doctor.id === doctorId) || null;
  }
}
