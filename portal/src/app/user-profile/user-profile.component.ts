import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Employee,Alumni} from '../shared/signup.model';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {AlumniService} from '../shared/alumni.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
} from "@angular/common/http";

declare const socket: any;
// const socket = io("http://localhost:3000");
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  alumni:Alumni;
  profileName= "";
  alumniForm: FormGroup;
  resumeName="";
  title = 'Jobportal';
  selectedFile: any;
  fReader: any;
  name = "";
  uploadPercent: any;
  profileSource= "../../assets/img/avatar.png";
  dp="";

  step: any;
  showPersonalInfo: any;
  isUpload: any;
  isProfPic: any;

  color = "primary";
  mode = "determinate";
  value = 50.25890809809;
  socket = "http";
  hasProfile :any;

  editProf(){
    this.step=2;
  }
  showUpload(){
    this.isUpload = true; 
  }
  prevStep(){
    this.step = 1;
  }

  getuserProfile(){
    var id ="610405ae86aba921507ba6d2";
    this.service.getAlumniByid(id).subscribe((result: any)=>{
      this.alumni = result;
      debugger;
      if(this.alumni.profileUpdated.includes("yes")){
        this.step = 3;
      }
      if(result.profilePicName.length > 0)
         this.profileSource = "http://localhost:3000/" + result.profilePicName;
         this.dp = result.resumeName;
     if(result.resumeName.length > 0){
        this.resumeName = result.resumeName;
     }
        
    //  console.log(this.alumni);
    
    });
  }

  onProfilePicSelect(event:any){
  this.selectedFile = event.target.files[0];
  this.profileName = this.selectedFile.name;
  console.log(this.selectedFile);
  }
  nextStep(){
    this.step = this.step + 1;
    this.showPersonalInfo = false;
  }

  constructor(private http: HttpClient,private router:Router ,private service:AlumniService, private formBuilder: FormBuilder) {
    this.alumni=new Alumni();
    this.isProfPic = false;
    
    this.isUpload = false;
    this.step = 1;
    this.showPersonalInfo=false;
    this.alumniForm = this.formBuilder.group({
      fname: [''],
      lname: [''],
      contact: [''],
      gender: [''],
      dob: [''],
      message: [''],
      city: [''],
      pincode: [''],
      state: [''],
      skill:[''],
      experience:[''],
      qualifictaion:[''],
      password: [''],
      email:[''],
      confirm_password:['']
    });
   }
  
   saveChanges(){
    var id ="610405ae86aba921507ba6d2";
    this.alumni.resumeName = this.resumeName;
    this.alumni.profilePicName = this.dp;
     this.service.updateProfile(id, this.alumni).subscribe((result:any)=>{
       console.log(result);
     });
   }

  ngOnInit(): void {
    this.getuserProfile();
  }


  goToLink(url: string) {
    window.open(url, "_blank");
}


onFileSelect(event:any) {
  debugger;
  this.selectedFile = event.target.files[0];
  this.name = this.selectedFile.name;
  console.log(this.selectedFile);
}

resumableUpload() {
  debugger;
  let fileId = `${this.selectedFile.name}-${this.selectedFile.lastModified}`;
  let headers = new HttpHeaders({
    size: this.selectedFile.size.toString(),
    "x-file-id": fileId,
    name: this.name,
  });

  this.http.get("http://localhost:3000/status", { headers: headers })
    .subscribe((res: any) => {
      console.log(JSON.stringify(res));
      if (res.status === "file is present") {
        alert(res.status);
        return;
      }
      let uploadedBytes = res.uploaded;
      console.log(uploadedBytes);
      let headers2 = new HttpHeaders({
        size: this.selectedFile.size.toString(),
        "x-file-id": fileId,
        "x-start-byte": uploadedBytes.toString(),
        name: this.name,
      });
      
      const req = new HttpRequest(
        "POST",
        "http://localhost:3000/upload",
        this.selectedFile.slice(uploadedBytes, this.selectedFile.size + 1),
        {
          headers: headers2,
          reportProgress: true,
        }
      );
      this.http.request(req).subscribe(
        (res: any) => {
          if (res.type === HttpEventType.UploadProgress) {
            this.uploadPercent = Math.round(
              100 * ((res.loaded + uploadedBytes) / this.selectedFile.size)
            );
            if (this.uploadPercent >= 100) {
              this.resumeName = this.name;
              this.name = "";
              this.selectedFile = null;
            }
          } else {
            console.log(JSON.stringify(res));
            if (this.uploadPercent >= 100) {
              this.name = "";
              this.selectedFile = null;
            }
          }
        },
        (err: any) => {}
      );
    });
}


resumableProfileUpload() {
  debugger;
  this.hasProfile=true;
  this.dp = this.profileName;
  this.profileSource = "http://localhost:3000/" + this.profileName;
 // this.isUpload = true;
  let fileId = `${this.selectedFile.name}-${this.selectedFile.lastModified}`;
  let headers = new HttpHeaders({
    size: this.selectedFile.size.toString(),
    "x-file-id": fileId,
    name: this.profileName,
  });

  this.http.get("http://localhost:3000/status", { headers: headers })
    .subscribe((res: any) => {
      console.log(JSON.stringify(res));
      if (res.status === "file is present") {
        alert(res.status);
        this.dp="";
        return;
      }
      let uploadedBytes = res.uploaded;
      console.log(uploadedBytes);
      let headers2 = new HttpHeaders({
        size: this.selectedFile.size.toString(),
        "x-file-id": fileId,
        "x-start-byte": uploadedBytes.toString(),
        name: this.profileName,
      });
      
      const req = new HttpRequest(
        "POST",
        "http://localhost:3000/upload",
        this.selectedFile.slice(uploadedBytes, this.selectedFile.size + 1),
        {
          headers: headers2,
          reportProgress: true,
        }
      );
      this.http.request(req).subscribe(
        (res: any) => {
          if (res.type === HttpEventType.UploadProgress) {
            this.uploadPercent = Math.round(
              100 * ((res.loaded + uploadedBytes) / this.selectedFile.size)
            );
            if (this.uploadPercent >= 100) {
              //this.profileSource = "http://localhost:3000/" + this.profileName;
              this.profileName = "";
              
              this.selectedFile = null;
            }
          } else {
            console.log(JSON.stringify(res));
            if (this.uploadPercent >= 100) {
              this.profileName = "";
              this.isProfPic = true;
              this.selectedFile = null;
            }
          }
        },
        (err: any) => {}
      );
    });
}
}



