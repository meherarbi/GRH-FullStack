import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiuserService } from 'src/app/service/apiuser.service';

@Component({
  selector: 'app-employecreateuser',
  templateUrl: './employecreateuser.component.html',
  styleUrls: ['./employecreateuser.component.css']
})
export class EmployecreateuserComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiuserService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.userForm = this.fb.group({
      nom: ['', [Validators.required]],
    });
  }
  // Choose designation with select dropdown

  // Getter to access form control
  get myForm() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return false;
    } else {
      return this.apiService.createuser(this.userForm.value).subscribe({
        complete: () => {
          console.log('user successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/users-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

}
