import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsermanagerService } from './services/usermanager.service';
import { DatabaseService } from './services/fakedb/database.service';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { UpperstrPipe } from './pipes/upperstr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserprofileComponent,
    UpperstrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(DatabaseService),
    HttpClientModule
    
  ],
  providers: [DatabaseService,UsermanagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
