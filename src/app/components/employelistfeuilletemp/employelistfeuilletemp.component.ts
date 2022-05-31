import { Component, OnInit } from '@angular/core';
import { ApiemployeapifeuilletempService } from 'src/app/service/employeapifeuilletemp.service';
import { ApifeuilletempService } from './../../service/apifeuilletemp.service';
@Component({
  selector: 'app-employelistfeuilletemp',
  templateUrl: './employelistfeuilletemp.component.html',
  styleUrls: ['./employelistfeuilletemp.component.css'],
})
export class EmployelistfeuilletempComponent implements OnInit {
  feuilletemp: any = [];
  constructor(private apiService: ApiemployeapifeuilletempService) {
    this.readfeuilletemp();
  }
  ngOnInit() {}
  readfeuilletemp() {
    this.apiService.getemployeapifeuilletemps().subscribe((data) => {
      this.feuilletemp = data;
    });
  }
  removefeuilletemp(feuilletemp, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deleteemployeapifeuilletemp(feuilletemp._id)
        .subscribe((data) => {
          this.feuilletemp.splice(index, 1);
        });
    }
  }
}
