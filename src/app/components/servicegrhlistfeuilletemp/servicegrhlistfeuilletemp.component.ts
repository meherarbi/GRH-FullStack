import { Component, OnInit } from '@angular/core';
import { ApigrhapifeuilletempService } from 'src/app/service/grhapifeuilletemp.service';

@Component({
  selector: 'app-servicegrhlistfeuilletemp',
  templateUrl: './servicegrhlistfeuilletemp.component.html',
  styleUrls: ['./servicegrhlistfeuilletemp.component.css'],
})
export class ServicegrhlistfeuilletempComponent implements OnInit {
  feuilletemp: any = [];
  constructor(private apiService: ApigrhapifeuilletempService) {
    this.readfeuilletemp();
  }
  ngOnInit() {}
  readfeuilletemp() {
    this.apiService.getgrhapifeuilletemps().subscribe((data) => {
      this.feuilletemp = data;
    });
  }
  removefeuilletemp(feuilletemp, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deletegrhapifeuilletemp(feuilletemp._id)
        .subscribe((data) => {
          this.feuilletemp.splice(index, 1);
        });
    }
  }
}
