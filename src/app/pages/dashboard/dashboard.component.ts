import { Component, OnInit } from '@angular/core';
import { UsermanagerService } from 'src/app/services/usermanager.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:User[];
  constructor(private route:Router,private ums:UsermanagerService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.ums.getUsers().subscribe(
      res => {
         this.users = res;
      });
  }

  edit(u:User){
    
  }

  delete(u:User){
    
  }

  display(u:User){
    this.route.navigate([`/user/${u.id}`]);
  }
}
