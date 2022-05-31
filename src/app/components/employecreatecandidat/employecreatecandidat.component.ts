import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicandidatService } from 'src/app/service/apicandidat.service';

@Component({
  selector: 'app-employecreatecandidat',
  templateUrl: './employecreatecandidat.component.html',
  styleUrls: ['./employecreatecandidat.component.css']
})
export class EmployecreatecandidatComponent implements OnInit {

  submitted = false;
  candidatForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApicandidatService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.candidatForm = this.fb.group({
      nom: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown

  // Getter to access form control
  get myForm() {
    return this.candidatForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.candidatForm.valid) {
      return false;
    } else {
      return this.apiService.createcandidat(this.candidatForm.value).subscribe({
        complete: () => {
          console.log('candidat successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/candidats-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }


}
