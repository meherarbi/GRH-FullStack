import { Component, OnInit } from '@angular/core';
import { ApiinformationService } from './../../service/apiinformation.service';
@Component({
  selector: 'app-adminlistinformation',
  templateUrl: './adminlistinformation.component.html',
  styleUrls: ['./adminlistinformation.component.css'],
})
export class AdminlistinformationComponent implements OnInit {
  information: any = [];
  constructor(private apiService: ApiinformationService) {
    this.readinformation();
  }
  ngOnInit() {}
  readinformation() {
    this.apiService.getinformations().subscribe((data) => {
      this.information = data;
    });
  }
  removeinformation(information, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteinformation(information._id).subscribe((data) => {
        this.information.splice(index, 1);
      });
    }
  }
}


