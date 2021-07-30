import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SignupService } from './shared/signup.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupAlumniComponent } from './signup-alumni/signup-alumni.component';
import { SigninAlumniComponent } from './signin-alumni/signin-alumni.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UploadFileSocketComponent } from './upload-file-socket/upload-file-socket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    SignupAlumniComponent,
    SigninAlumniComponent,
    HomePageComponent,
    UserProfileComponent,
    UploadFileSocketComponent

   
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
