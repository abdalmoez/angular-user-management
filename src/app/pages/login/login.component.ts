import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsermanagerService } from 'src/app/services/usermanager.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  user:User;
  constructor(private fb: FormBuilder,private route:Router,private ums:UsermanagerService) {
    this.loginForm = this.fb.group({
      // firstName: ['',[Validators.required,Validators.minLength(4)]],
      // lastName: ['',[Validators.required,Validators.minLength(4)]],
       email: ['sul',[Validators.required,Validators.minLength(6)]]//,
      // password: ['',[Validators.required,Validators.minLength(8)]]
     });
   }

  ngOnInit() {
    this.user=new User(0,'','','','',new Date(),'');
    
  }
  
  login(){
      if (this.loginForm.dirty && this.loginForm.valid) {
      this.ums.getUsers().subscribe(
        res => {
          var state:boolean=false;
          res.forEach(user => {
            if(user.password==this.user.password 
              && user.email==this.user.email)
            {
              this.route.navigate(['/admin']);
              state=true;
            }
          });
          if(state==false)
            alert('Unvalid login');
      });
    }else{
      alert("Unvalid data");
    }
  }
}
