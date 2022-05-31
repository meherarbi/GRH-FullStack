import { Component, OnInit } from '@angular/core';
import { ApiconsultantService } from './../../service/apiconsultant.service';
@Component({
  selector: 'app-adminlistconsultant',
  templateUrl: './adminlistconsultant.component.html',
  styleUrls: ['./adminlistconsultant.component.css'],
})
export class AdminlistconsultantComponent implements OnInit {
  consultant: any = [];
  constructor(private apiService: ApiconsultantService) {
    this.readconsultant();
  }
  ngOnInit() {}
  readconsultant() {
    this.apiService.getconsultants().subscribe((data) => {
      this.consultant = data;
    });
  }
  removeconsultant(consultant, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteconsultant(consultant._id).subscribe((data) => {
        this.consultant.splice(index, 1);
      });
    }
  }
}


