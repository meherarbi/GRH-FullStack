import { Component, OnInit } from '@angular/core';
import { ApievaluationService } from './../../service/apievaluation.service';
@Component({
  selector: 'app-adminlistevaluation',
  templateUrl: './adminlistevaluation.component.html',
  styleUrls: ['./adminlistevaluation.component.css'],
})
export class AdminlistevaluationComponent implements OnInit {
  evaluation: any = [];
  constructor(private apiService: ApievaluationService) {
    this.readevaluation();
  }
  ngOnInit() {}
  readevaluation() {
    this.apiService.getevaluations().subscribe((data) => {
      this.evaluation = data;
    });
  }
  removeevaluation(evaluation, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteevaluation(evaluation._id).subscribe((data) => {
        this.evaluation.splice(index, 1);
      });
    }
  }
}


