import { Component, OnInit } from '@angular/core';
import { ApiemployeapiuserService } from 'src/app/service/employeapiuser.service';

@Component({
  selector: 'app-employelistuser',
  templateUrl: './employelistuser.component.html',
  styleUrls: ['./employelistuser.component.css'],
})
export class EmployelistuserComponent implements OnInit {
  user: any = [];
  constructor(private apiService: ApiemployeapiuserService) {
    this.readuser();
  }
  ngOnInit() {}
  readuser() {
    this.apiService.getemployeapiusers().subscribe((data) => {
      this.user = data;
    });
  }
  removeuser(user, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteemployeapiuser(user._id).subscribe((data) => {
        this.user.splice(index, 1);
      });
    }
  }
}
