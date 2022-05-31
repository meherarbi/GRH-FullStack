import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApievaluationService } from 'src/app/service/apievaluation.service';

@Component({
  selector: 'app-admincreateevaluation',
  templateUrl: './admincreateevaluation.component.html',
  styleUrls: ['./admincreateevaluation.component.css'],
})
export class AdmincreateevaluationComponent implements OnInit {
  submitted = false;
  evaluationForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApievaluationService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.evaluationForm = this.fb.group({
      date: ['', [Validators.required]],
      criteres: ['', [Validators.required]],
      relationnel: ['', [Validators.required]],
      technique: ['', [Validators.required]],
      createdby: ['', [Validators.required]],
      updatedby: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown

  // Getter to access form control
  get myForm() {
    return this.evaluationForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.evaluationForm.valid) {
      return false;
    } else {
      return this.apiService
        .createevaluation(this.evaluationForm.value)
        .subscribe({
          complete: () => {
            console.log('evaluation successfully created!'),
              this.ngZone.run(() =>
                this.router.navigateByUrl('/evaluations-list')
              );
          },
          error: (e) => {
            console.log(e);
          },
        });
    }
  }
}
