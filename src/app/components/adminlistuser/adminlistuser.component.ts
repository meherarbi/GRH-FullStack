import { Component, OnInit } from '@angular/core';
import { ApiuserService } from './../../service/apiuser.service';
@Component({
  selector: 'app-adminlistuser',
  templateUrl: './adminlistuser.component.html',
  styleUrls: ['./adminlistuser.component.css'],
})
export class AdminlistuserComponent implements OnInit {
  user: any = [];
  constructor(private apiService: ApiuserService) {
    this.readuser();
  }
  ngOnInit() {}
  readuser() {
    this.apiService.getusers().subscribe((data) => {
      this.user = data;
    });
  }
  removeuser(user, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteuser(user._id).subscribe((data) => {
        this.user.splice(index, 1);
      });
    }
  }
}


