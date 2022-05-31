import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiconsultantService } from 'src/app/service/apiconsultant.service';

@Component({
  selector: 'app-employecreateconsultant',
  templateUrl: './employecreateconsultant.component.html',
  styleUrls: ['./employecreateconsultant.component.css']
})
export class EmployecreateconsultantComponent implements OnInit {

  submitted = false;
  consultantForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiconsultantService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.consultantForm = this.fb.group({
      nom: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown

  // Getter to access form control
  get myForm() {
    return this.consultantForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.consultantForm.valid) {
      return false;
    } else {
      return this.apiService.createconsultant(this.consultantForm.value).subscribe({
        complete: () => {
          console.log('consultant successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/consultants-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

}
