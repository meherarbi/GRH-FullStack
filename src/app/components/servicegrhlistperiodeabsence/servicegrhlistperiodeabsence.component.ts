import { Component, OnInit } from '@angular/core';
import { ApigrhapiperiodeabsenceService } from 'src/app/service/grhapiperiodeabsence.service';

@Component({
  selector: 'app-servicegrhlistperiodeabsence',
  templateUrl: './servicegrhlistperiodeabsence.component.html',
  styleUrls: ['./servicegrhlistperiodeabsence.component.css'],
})
export class ServicegrhlistperiodeabsenceComponent implements OnInit {
  periodeabsence: any = [];
  constructor(private apiService: ApigrhapiperiodeabsenceService) {
    this.readperiodeabsence();
  }
  ngOnInit() {}
  readperiodeabsence() {
    this.apiService.getgrhapiperiodeabsences().subscribe((data) => {
      this.periodeabsence = data;
    });
  }
  removeperiodeabsence(periodeabsence, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deletegrhapiperiodeabsence(periodeabsence._id)
        .subscribe((data) => {
          this.periodeabsence.splice(index, 1);
        });
    }
  }
}
