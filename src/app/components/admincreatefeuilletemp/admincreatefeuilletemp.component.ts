import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApifeuilletempService } from 'src/app/service/apifeuilletemp.service';

@Component({
  selector: 'app-admincreatefeuilletemp',
  templateUrl: './admincreatefeuilletemp.component.html',
  styleUrls: ['./admincreatefeuilletemp.component.css'],
})
export class AdmincreatefeuilletempComponent implements OnInit {
  submitted = false;
  feuilletempForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApifeuilletempService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.feuilletempForm = this.fb.group({
      nom: ['', [Validators.required]],
      jours: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      commentaire: ['', [Validators.required]],
      fermer: ['', [Validators.required]],
      createdby: ['', [Validators.required]],
      updatedby: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown

  // Getter to access form control
  get myForm() {
    return this.feuilletempForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.feuilletempForm.valid) {
      return false;
    } else {
      return this.apiService
        .createfeuilletemp(this.feuilletempForm.value)
        .subscribe({
          complete: () => {
            console.log('feuilletemp successfully created!'),
              this.ngZone.run(() =>
                this.router.navigateByUrl('/feuilletemps-list')
              );
          },
          error: (e) => {
            console.log(e);
          },
        });
    }
  }
}
