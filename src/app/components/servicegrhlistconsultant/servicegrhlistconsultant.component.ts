import { Component, OnInit } from '@angular/core';
import { ApigrhapiconsultantService } from 'src/app/service/grhapiconsultant.service';
import { ApiconsultantService } from './../../service/apiconsultant.service';
@Component({
  selector: 'app-servicegrhlistconsultant',
  templateUrl: './servicegrhlistconsultant.component.html',
  styleUrls: ['./servicegrhlistconsultant.component.css'],
})
export class ServicegrhlistconsultantComponent implements OnInit {
  consultant: any = [];
  constructor(private apiService: ApigrhapiconsultantService) {
    this.readconsultant();
  }
  ngOnInit() {}
  readconsultant() {
    this.apiService.getgrhapiconsultants().subscribe((data) => {
      this.consultant = data;
    });
  }
  removeconsultant(consultant, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deletegrhapiconsultant(consultant._id)
        .subscribe((data) => {
          this.consultant.splice(index, 1);
        });
    }
  }
}
