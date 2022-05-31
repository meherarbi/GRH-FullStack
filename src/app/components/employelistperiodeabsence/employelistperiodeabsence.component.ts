import { ApiemployeapiperiodeabsenceService } from './../../service/employeapiperiodeabsence.service';
import { Component, OnInit } from '@angular/core';
import { ApiperiodeabsenceService } from './../../service/apiperiodeabsence.service';
@Component({
  selector: 'app-employelistperiodeabsence',
  templateUrl: './employelistperiodeabsence.component.html',
  styleUrls: ['./employelistperiodeabsence.component.css'],
})
export class EmployelistperiodeabsenceComponent implements OnInit {
  periodeabsence: any = [];
  constructor(private apiService: ApiemployeapiperiodeabsenceService) {
    this.readperiodeabsence();
  }
  ngOnInit() {}
  readperiodeabsence() {
    this.apiService.getemployeapiperiodeabsences().subscribe((data) => {
      this.periodeabsence = data;
    });
  }
  removeperiodeabsence(periodeabsence, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deleteemployeapiperiodeabsence(periodeabsence._id)
        .subscribe((data) => {
          this.periodeabsence.splice(index, 1);
        });
    }
  }
}
