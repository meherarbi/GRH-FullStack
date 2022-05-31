import { Component, OnInit } from '@angular/core';
import { ApicandidatService } from './../../service/apicandidat.service';
@Component({
  selector: 'app-adminlistcandidat',
  templateUrl: './adminlistcandidat.component.html',
  styleUrls: ['./adminlistcandidat.component.css'],
})
export class AdminlistcandidatComponent implements OnInit {
  Candidat: any = [];
  constructor(private apiService: ApicandidatService) {
    this.readCandidat();
  }
  ngOnInit() {}
  readCandidat() {
    this.apiService.getcandidats().subscribe((data) => {
      this.Candidat = data;
    });
  }
  removeCandidat(Candidat, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deletecandidat(Candidat._id).subscribe((data) => {
        this.Candidat.splice(index, 1);
      });
    }
  }
}


