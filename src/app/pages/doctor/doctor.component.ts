import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { CommonModule } from '@angular/common';
import { DoctorbookComponent } from '../patient/model/doctorbook/doctorbook.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  selector: 'app-doctor',
  standalone: true,
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  imports: [CommonModule, DoctorbookComponent]
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  searchString: string = 'DOC';
  role: string = 'doctor';
  page: string = "1";
  limit: string = "10";
  loading: boolean = true;

  constructor(private doctorService: DoctorService ,private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors(this.searchString, this.role, this.page, this.limit).subscribe(
      (response) => {
        this.doctors = response.response.records;
        this.loading = false; 
        console.log(response);
      },
      (error) => {
        console.error('Error fetching doctors:', error);
        this.loading = false; 
      }
    );
  }

  openModal(id: string) {
    const modalRef = this.modalService.open(DoctorbookComponent);
    modalRef.componentInstance.id = id;
  }
}
