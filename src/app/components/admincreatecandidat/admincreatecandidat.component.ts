import { Router } from '@angular/router';
import { ApicandidatService } from './../../service/apicandidat.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admincreatecandidat',
  templateUrl: './admincreatecandidat.component.html',
  styleUrls: ['./admincreatecandidat.component.css'],
})
export class AdmincreatecandidatComponent implements OnInit {
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



