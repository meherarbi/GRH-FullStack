import { Component, OnInit } from '@angular/core';
import { ApigrhapiuserService } from './../../service/grhapiuser.service';
@Component({
  selector: 'app-servicegrhlistuser',
  templateUrl: './servicegrhlistuser.component.html',
  styleUrls: ['./servicegrhlistuser.component.css'],
})
export class ServicegrhlistuserComponent implements OnInit {
  user: any = [];
  constructor(private apiService: ApigrhapiuserService) {
    this.readuser();
  }
  ngOnInit() {}
  readuser() {
    this.apiService.getgrhapiusers().subscribe((data) => {
      this.user = data;
    });
  }
  removeuser(user, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deletegrhapiuser(user._id).subscribe((data) => {
        this.user.splice(index, 1);
      });
    }
  }
}
