import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createPatientService } from '../../../../services/createpatient.service';
import { RefreshService } from '../../../../services/refress.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addpatientmodel',
  standalone: true,
  imports: [FormsModule , HttpClientModule],
  templateUrl: './addpatientmodel.component.html',
  styleUrl: './addpatientmodel.component.css'
})
export class AddpatientmodelComponent {

  patientObj: AddPatient;
  
  constructor(private authService: createPatientService, private refreshService: RefreshService, private _snackBar: MatSnackBar) {
    this.patientObj = new AddPatient();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", {
      duration: 3000
    });
  }

  onAdd() {
    const { id, name, age } = this.patientObj;

    if (!id || !name || !age) {
      this.openSnackBar("Note is empty. Please fill all the fields.");
      return;
    }

    const patientCreds = {
      phid: id,
      name: name,
      age: age,
    };

    this.authService.Addpatient(patientCreds).subscribe({
      next: (res: any) => {
        console.log(res);
        this.openSnackBar("Patient Added Successfully");
        this.refreshService.triggerRefresh('PatientComponent');
        this.patientObj.name = '';
        this.patientObj.id = '';
        this.patientObj.age = '';
      },
      error: (err: any) => {
        console.error(err.error.message);
        this.openSnackBar(err.error.message);
      }
    });
  }

}

export class AddPatient {
  id: string;
  name: string;
  age: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.age = '';
  }
}
