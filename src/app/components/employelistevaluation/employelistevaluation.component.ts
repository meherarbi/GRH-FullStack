import { ApiemployeapievaluationService } from './../../service/employeapievaluation.service';
import { Component, OnInit } from '@angular/core';
import { ApievaluationService } from './../../service/apievaluation.service';
@Component({
  selector: 'app-employelistevaluation',
  templateUrl: './employelistevaluation.component.html',
  styleUrls: ['./employelistevaluation.component.css'],
})
export class EmployelistevaluationComponent implements OnInit {
  evaluation: any = [];
  constructor(private apiService: ApiemployeapievaluationService) {
    this.readevaluation();
  }
  ngOnInit() {}
  readevaluation() {
    this.apiService.getemployeapievaluations().subscribe((data) => {
      this.evaluation = data;
    });
  }
  removeevaluation(evaluation, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deleteemployeapievaluation(evaluation._id)
        .subscribe((data) => {
          this.evaluation.splice(index, 1);
        });
    }
  }
}
