import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsermanagerService } from 'src/app/services/usermanager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User;
  users:User[];
  constructor(private route:Router, private ums:UsermanagerService) { }

  ngOnInit() {
    this.user=new User(0,'','','','',new Date(),'');
    this.getUsers();
  }
  register(){
    this.ums.addUser(this.user).subscribe(
      u => this.route.navigate(['admin'])
    );
  }

  getUsers() {
    this.ums.getUsers().subscribe(
      res => {
         this.users = res;
         console.log("subscribers" , this.users)   });
  }
}
