import { Component, OnInit } from '@angular/core';
import { ApifeuilletempService } from './../../service/apifeuilletemp.service';
@Component({
  selector: 'app-adminlistfeuilletemp',
  templateUrl: './adminlistfeuilletemp.component.html',
  styleUrls: ['./adminlistfeuilletemp.component.css'],
})
export class AdminlistfeuilletempComponent implements OnInit {
  feuilletemp: any = [];
  constructor(private apiService: ApifeuilletempService) {
    this.readfeuilletemp();
  }
  ngOnInit() {}
  readfeuilletemp() {
    this.apiService.getfeuilletemps().subscribe((data) => {
      this.feuilletemp = data;
    });
  }
  removefeuilletemp(feuilletemp, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deletefeuilletemp(feuilletemp._id).subscribe((data) => {
        this.feuilletemp.splice(index, 1);
      });
    }
  }
}


