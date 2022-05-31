import { ApigrhapicandidatService } from './../../service/grhapicandidat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicegrhlistcandidat',
  templateUrl: './servicegrhlistcandidat.component.html',
  styleUrls: ['./servicegrhlistcandidat.component.css'],
})
export class ServicegrhlistcandidatComponent implements OnInit {
  Candidat: any = [];
  constructor(private apiService: ApigrhapicandidatService) {
    this.readCandidat();
  }
  ngOnInit() {}
  readCandidat() {
    this.apiService.getgrhapicandidats().subscribe((data) => {
      this.Candidat = data;
    });
  }
  removeCandidat(Candidat, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deletegrhapicandidat(Candidat._id).subscribe((data) => {
        this.Candidat.splice(index, 1);
      });
    }
  }
}
