import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user/:id',component:UserprofileComponent},
  {path:'admin',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
