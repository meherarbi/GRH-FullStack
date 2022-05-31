import { ApiemployeapiconsultantService } from './../../service/employeapiconsultant.service';
import { Component, OnInit } from '@angular/core';
import { ApiconsultantService } from './../../service/apiconsultant.service';


/*
bon vue enti dima tezreb f copier coler
donc ahna f admin on doit faire appel l service de admin
w f employé on doit faire appel l service de employelistconsultantw f grh kifkif
mais deja enti hne f page hethi hya employe liste consultantsw

w taamel f appel l service de admin c pas de employé non ???
nn aamlt appel l apiem


ahhhhhh oui c vrai okiiii

on va passer vers le formulaire de creation okiiii
donc femma partie comme hab html et appel

biensure femma aussi appel l service w l model f kol code
w formulaire ca depend de la table maaneha 9adeh m ChangeStreamOptions
donc je passe vers  admin je vs donne exemple de creation et v*s terminer le reste oki ??
kok
oki lahdha barka

*/
@Component({
  selector: 'app-employelistconsultant',
  templateUrl: './employelistconsultant.component.html',
  styleUrls: ['./employelistconsultant.component.css'],
})
export class EmployelistconsultantComponent implements OnInit {
  consultant: any = [];
  constructor(private apiService: ApiemployeapiconsultantService) {
    this.readconsultant();
  }
  ngOnInit() {}
  readconsultant() {
    this.apiService.getemployeapiconsultants().subscribe((data) => {
      this.consultant = data;
    });
  }
  removeconsultant(consultant, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService
        .deleteemployeapiconsultant(consultant._id)
        .subscribe((data) => {
          this.consultant.splice(index, 1);
        });
    }
  }
}
