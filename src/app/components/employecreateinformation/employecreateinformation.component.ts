import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiinformationService } from 'src/app/service/apiinformation.service';

@Component({
  selector: 'app-employecreateinformation',
  templateUrl: './employecreateinformation.component.html',
  styleUrls: ['./employecreateinformation.component.css'],
})
export class EmployecreateinformationComponent implements OnInit {
  submitted = false;
  informationForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiinformationService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.informationForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      civilite: ['', [Validators.required]],
      evaluation: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown

  // Getter to access form control
  get myForm() {
    return this.informationForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.informationForm.valid) {
      return false;
    } else {
      return this.apiService
        .createinformation(this.informationForm.value)
        .subscribe({
          complete: () => {
            console.log('information successfully created!'),
              this.ngZone.run(() =>
                this.router.navigateByUrl('/informations-list')
              );
          },
          error: (e) => {
            console.log(e);
          },
        });
    }
  }
}
