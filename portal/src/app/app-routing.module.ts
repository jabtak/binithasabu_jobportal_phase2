import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupAlumniComponent} from '../app/signup-alumni/signup-alumni.component';
import {SigninAlumniComponent} from '../app/signin-alumni/signin-alumni.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
  {path:'sign-in', component: SigninAlumniComponent},
  {path: 'sign-up', component: SignupAlumniComponent},
  {path: 'user-profile', component: UserProfileComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
