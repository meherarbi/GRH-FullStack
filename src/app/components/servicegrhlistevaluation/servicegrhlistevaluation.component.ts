import { Component, OnInit } from '@angular/core';
import { ApigrhapievaluationService } from 'src/app/service/grhapievaluation.service';
import { ApievaluationService } from './../../service/apievaluation.service';
@Component({
  selector: 'app-servicegrhlistevaluation',
  templateUrl: './servicegrhlistevaluation.component.html',
  styleUrls: ['./servicegrhlistevaluation.component.css'],
})
export class ServicegrhlistevaluationComponent implements OnInit {
  evaluation: any = [];
  constructor(private apiService: ApigrhapievaluationService) {
    this.readevaluation();
  }
  ngOnInit() {}
  readevaluation() {
    this.apiService.getgrhapievaluations().subscribe((data) => {
      this.evaluation = data;
    });
  }
  removeevaluation(evaluation, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deletegrhapievaluation(evaluation._id)
        .subscribe((data) => {
          this.evaluation.splice(index, 1);
        });
    }
  }
}
