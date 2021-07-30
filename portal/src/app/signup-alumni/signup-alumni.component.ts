import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Employee,Alumni} from '../shared/signup.model';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {AlumniService} from '../shared/alumni.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup-alumni',
  templateUrl: './signup-alumni.component.html',
  styleUrls: ['./signup-alumni.component.css']
})
export class SignupAlumniComponent implements OnInit {
  alumni:Alumni;
  alumniForm: FormGroup;
  isMail: boolean;
  isPswd: boolean;
  submitted: boolean;
//   BrowserModule,
// AppRoutingModule,
// ReactiveFormsModule,
// HttpClientModule,
// FormsModule,
// CommonModule
  constructor(private router:Router ,private service:AlumniService, private formBuilder: FormBuilder) {
    this.alumni=new Alumni();
    this.isMail = true;
    this.isPswd = true;
    this.submitted = false;
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
      password: [''],
      email:[''],
      confirm_password:['']
    });
   }

   isValidEmail() {
    var email = this.alumni.email;
    if (email != null) {
      if (/^\w+(['\.-]?[\w+]?)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.isMail = true;
        return true;
      }
      else {
        this.isMail = false;
        return false;
      }
    }
    else{
      this.isMail = false;
      return false;
    }

  }

  isValidPassword()
  {
    debugger;
    var pswd = this.alumni.password;
    if (pswd != null) {
      if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pswd)) {
        this.isPswd = true;
        return true;
      }
      else {
        this.isPswd = false;
        return false;
      }
    }
    else{
      this.isPswd = false;
      return false;
    }

  }

  

  ngOnInit(): void {
    // var alumni = new Alumni()
    // alumni.fname= "ptcd";
    // alumni.lname ="dfdf";
    // alumni.contact ="dd";
    // alumni.gender = "ddds";
    // alumni.dob = "rete";
    // alumni.message= "ptcd";
    // alumni.city ="dfdf";
    // alumni.pincode ="dd";
    // alumni.state = "ddds";
    // alumni.district = "rete";
    // alumni.password = "fgfgf";
   
        // var employee = new Employee();
    // employee._id ="1";
    // employee.name = "binu";
    // employee.position = "ddd";
    // employee.salary = 1234;
    // employee.office = "london";
    // this.service.postEmployee(employee).subscribe((res) => {
    //  console.log(res);
    // });


    // this.service.postAlumni(alumni).subscribe((res) => {
    //   console.log(res);
    //  });
  
    }

    
    register(){
      this.submitted = true;
     
     if(this.isValidEmail() && (this.alumni.password ==this.alumni.confirm_password) && !Object.values(this.alumni).some(element => element == null || element == undefined)){  
       //alert("dd");
       if(this.isValidPassword()){
         debugger;
      this.service.postAlumni(this.alumni).subscribe((res) => {
        console.log(this.alumni);
        this.router.navigate(['/sign-in']);
       });
      }
     }
    }

}
