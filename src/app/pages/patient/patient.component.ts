import { Component, OnInit } from '@angular/core';
import { ModelComponent } from './model/model.component';
import { PreviousvisitComponent } from './model/previousvisit/previousvisit.component';
import { DoctornoteComponent } from './model/doctornote/doctornote.component';
import { StaffnoteComponent } from './model/staffnote/staffnote.component';
import { AddpatientmodelComponent } from './model/addpatientmodel/addpatientmodel.component';
import { PatientService } from '../../services/getpatient.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { RefreshService } from '../../services/refress.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    ModelComponent,
    PreviousvisitComponent,
    DoctornoteComponent,
    StaffnoteComponent,
    AddpatientmodelComponent,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'], 
})
export class PatientComponent implements OnInit {
  patients: any[] = [];
  currentItem: any;
  loading: boolean = true;

  constructor(
    private patientService: PatientService,
    private modalService: NgbModal,
    private refreshService: RefreshService
  ) {}

  ngOnInit(): void {
    this.getPatients();
    this.refreshService.refresh$.subscribe((componentName: string) => {
      if (componentName === 'PatientComponent') {
        console.log("refress ho gya")
        this.getPatients();
      }
    });
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe((data) => {
      if (data.status === 'Success') {
        this.patients = data.response.records;
      }
      this.loading = false; 
    });
  }

  openModal(phid: string) {
    const modalRef = this.modalService.open(ModelComponent);
    modalRef.componentInstance.phid = phid;
  }

  openCommentModal(phid: string) {
    const modalRef = this.modalService.open(DoctornoteComponent);
    modalRef.componentInstance.phid = phid;
  }

  openStaffModal(phid: string) {
    const modalRef = this.modalService.open(StaffnoteComponent);
    modalRef.componentInstance.phid = phid;
  }
}
