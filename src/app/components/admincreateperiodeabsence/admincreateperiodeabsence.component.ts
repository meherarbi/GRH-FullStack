import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiperiodeabsenceService } from 'src/app/service/apiperiodeabsence.service';

@Component({
  selector: 'app-admincreateperiodeabsence',
  templateUrl: './admincreateperiodeabsence.component.html',
  styleUrls: ['./admincreateperiodeabsence.component.css']
})
export class AdmincreateperiodeabsenceComponent implements OnInit {
  submitted = false;
  periodeabsenceForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiperiodeabsenceService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.periodeabsenceForm = this.fb.group({
      nom: ['', [Validators.required]],
      duree: ['', [Validators.required]],
      dateCreation: ['', [Validators.required]],
      dateDebut: ['', [Validators.required]],
      dateFin: ['', [Validators.required]],
      titre: ['', [Validators.required]],
      unite: ['', [Validators.required]],
      createdby: ['', [Validators.required]],
      updatedby: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown

  // Getter to access form control
  get myForm() {
    return this.periodeabsenceForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.periodeabsenceForm.valid) {
      return false;
    } else {
      return this.apiService.createperiodeabsence(this.periodeabsenceForm.value).subscribe({
        complete: () => {
          console.log('periodeabsence successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/periodeabsences-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
