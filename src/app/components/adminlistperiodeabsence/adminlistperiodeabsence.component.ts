import { Component, OnInit } from '@angular/core';
import { ApiperiodeabsenceService } from './../../service/apiperiodeabsence.service';
@Component({
  selector: 'app-adminlistperiodeabsence',
  templateUrl: './adminlistperiodeabsence.component.html',
  styleUrls: ['./adminlistperiodeabsence.component.css'],
})
export class AdminlistperiodeabsenceComponent implements OnInit {
  periodeabsence: any = [];
  constructor(private apiService: ApiperiodeabsenceService) {
    this.readperiodeabsence();
  }
  ngOnInit() {}
  readperiodeabsence() {
    this.apiService.getperiodeabsences().subscribe((data) => {
      this.periodeabsence = data;
    });
  }
  removeperiodeabsence(periodeabsence, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteperiodeabsence(periodeabsence._id).subscribe((data) => {
        this.periodeabsence.splice(index, 1);
      });
    }
  }
}


