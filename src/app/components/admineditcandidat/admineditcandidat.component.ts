import { ActivatedRoute, Router } from '@angular/router';
import { ApicandidatService } from './../../service/apicandidat.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Candidat } from 'src/app/model/candidat';

@Component({
  selector: 'app-admineditcandidat',
  templateUrl: './admineditcandidat.component.html',
  styleUrls: ['./admineditcandidat.component.css'],
})
export class AdmineditcandidatComponent implements OnInit {


  submitted = false;
  editForm: FormGroup;
  employeeData: Candidat[];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApicandidatService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updatedatetime();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getdatetime(id);
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getdatetime(id) {
    this.apiService.getcandidat(id).subscribe((data) => {
      this.editForm.setValue({
        nom: data['nom'],
      });
    });
  }
  updatedatetime() {
    this.editForm = this.fb.group({
      nom: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updatecandidat(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/employees-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}
