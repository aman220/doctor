import { Component, Input, OnInit } from '@angular/core';
import { DoctorNotesService } from '../../../../services/doctornote.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { RefreshService } from '../../../../services/refress.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctornote',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './doctornote.component.html',
  styleUrl: './doctornote.component.css',
})
export class DoctornoteComponent implements OnInit {
  @Input() phid!: string;
  patientId: string;
  doctorNote: string;
  durationInSeconds: number = 2;
  isSaving: boolean = false;

  ngOnInit(): void {
    this.check(this.phid);
  }

  check(phid: string): void {
    localStorage.setItem('ppid', phid);
  }

  constructor(private doctorNotesService: DoctorNotesService, private _snackBar: MatSnackBar, private refreshService: RefreshService) {
    this.patientId = this.phid;
    this.doctorNote = '';
  }

  getid(): string {
    let id = localStorage.getItem('ppid');
    return id !== null ? id : '';
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", {
      duration: 3000
    });
  }

  submitDoctorNote() {

    if (!this.doctorNote.trim()) {
      this.openSnackBar("Note is empty. Please add a note.");
      return;
    }

    this.isSaving = true;
    this.doctorNotesService.addDoctorNote(this.getid(), this.doctorNote).subscribe(
      (res: any) => {
        console.log('Note added successfully:', res);
        this.isSaving = false;
        this.openSnackBar("Data Added Successfully");
        this.doctorNote = '';
        this.refreshService.triggerRefresh('PatientComponent');
      },
      (error: any) => {
        console.error('Error adding note:', error);
        this.isSaving = false;
      }
    );
  }
}
