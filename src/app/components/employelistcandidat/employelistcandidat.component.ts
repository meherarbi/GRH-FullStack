import { ApiemployeapicandidatService } from './../../service/employeapicandidat.service';
import { Component, OnInit } from '@angular/core';
import { ApicandidatService } from './../../service/apicandidat.service';
@Component({
  selector: 'app-employelistcandidat',
  templateUrl: './employelistcandidat.component.html',
  styleUrls: ['./employelistcandidat.component.css'],
})
export class EmployelistcandidatComponent implements OnInit {
  Candidat: any = [];
  constructor(private apiService: ApiemployeapicandidatService) {
    this.readCandidat();
  }
  ngOnInit() {}
  readCandidat() {
    this.apiService.getemployeapicandidats().subscribe((data) => {
      this.Candidat = data;
    });
  }
  removeCandidat(Candidat, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deleteemployeapicandidat(Candidat._id)
        .subscribe((data) => {
          this.Candidat.splice(index, 1);
        });
    }
  }
}
