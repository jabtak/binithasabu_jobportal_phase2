import { Component, OnInit } from '@angular/core';
import { AlumniService} from '../shared/alumni.service';
import {User} from '../shared/signup.model';
@Component({
  selector: 'app-signin-alumni',
  templateUrl: './signin-alumni.component.html',
  styleUrls: ['./signin-alumni.component.css']
})
export class SigninAlumniComponent implements OnInit {

  constructor(private service: AlumniService) { }

  ngOnInit(): void {
    this.getuserProfile();
  }


  login(){
  var user = new User();
  user.uname = "binithasabu737@gmail.com";
  user.password = "Test@123";
  this.service.login(user).subscribe((val: any)=>{
    console.log(val);
  })

  

  }

  getuserProfile(){
    var id ="60ff04781bddbc16c45769e7";
    this.service.getAlumniByid(id).subscribe((result: any)=>{
      console.log(result);
    });
  }

}
