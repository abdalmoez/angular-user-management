import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsermanagerService } from 'src/app/services/usermanager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user:User;
  id:number;
  constructor(private route:ActivatedRoute,
      private ums:UsermanagerService) { }

  ngOnInit() {
    this.user=new User(0,'','','','',new Date(),'');
    this.id=+this.route.snapshot.paramMap.get('id');
    this.getuser();
  }

  getuser(){
    this.ums.getUserById(this.id).subscribe(
      u => this.user=u
    )
  }

}
