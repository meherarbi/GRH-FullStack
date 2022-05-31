import { Component, OnInit } from '@angular/core';
import { ApiemployeapiinformationService } from 'src/app/service/employeapiinformation.service';
import { ApiinformationService } from './../../service/apiinformation.service';
@Component({
  selector: 'app-employelistinformation',
  templateUrl: './employelistinformation.component.html',
  styleUrls: ['./employelistinformation.component.css'],
})
export class EmployelistinformationComponent implements OnInit {
  information: any = [];
  constructor(private apiService: ApiemployeapiinformationService) {
    this.readinformation();
  }
  ngOnInit() {}
  readinformation() {
    this.apiService.getemployeapiinformations().subscribe((data) => {
      this.information = data;
    });
  }
  removeinformation(information, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deleteemployeapiinformation(information._id)
        .subscribe((data) => {
          this.information.splice(index, 1);
        });
    }
  }
}
