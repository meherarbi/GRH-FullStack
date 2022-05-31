import { Component, OnInit } from '@angular/core';
import { ApigrhapiinformationService } from 'src/app/service/grhapiinformation.service';

@Component({
  selector: 'app-servicegrhlistinformation',
  templateUrl: './servicegrhlistinformation.component.html',
  styleUrls: ['./servicegrhlistinformation.component.css'],
})
export class ServicegrhlistinformationComponent implements OnInit {
  information: any = [];
  constructor(private apiService: ApigrhapiinformationService) {
    this.readinformation();
  }
  ngOnInit() {}
  readinformation() {
    this.apiService.getgrhapiinformations().subscribe((data) => {
      this.information = data;
    });
  }
  removeinformation(information, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deletegrhapiinformation(information._id)
        .subscribe((data) => {
          this.information.splice(index, 1);
        });
    }
  }
}
