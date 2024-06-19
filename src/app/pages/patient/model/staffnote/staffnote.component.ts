import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StaffNotesService } from '../../../../services/sraffnote.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-staffnote',
  standalone: true,
  imports: [FormsModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './staffnote.component.html',
  styleUrl: './staffnote.component.css'
})
export class StaffnoteComponent {
  @Input() phid!: string;
  patientId: string;
  StaffNote: string;
  isSaving: boolean = false;

  constructor(private staffNotesService: StaffNotesService, private _snackBar: MatSnackBar) {
    this.patientId = this.phid;
    this.StaffNote = '';
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", {
      duration: 3000
    });
  }

  submitStaffNote() {
    if (!this.StaffNote.trim()) {
      this.openSnackBar("Note is empty. Please add a note.");
      return;
    }

    this.isSaving = true;
    this.staffNotesService.addSraffNote(this.patientId, this.StaffNote).subscribe(
      (res: any) => {
        console.log('Note added successfully:', res);
        this.isSaving = false;
        this.openSnackBar("Note Added Successfully");
        this.StaffNote = '';
      },
      (error: any) => {
        console.error('Error adding note:', error);
        this.isSaving = false;
      }
    );
  }
}
