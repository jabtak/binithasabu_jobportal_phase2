import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DALBase } from './dalBase';
import { Employee,Alumni , User} from './signup.model';
@Injectable({
  providedIn: 'root'
})
export class AlumniService extends DALBase {


  constructor(http: HttpClient) { 
    super(http);

  }
  public postEmployee(emp: Employee){
    return this.ExecutePost('/employees',emp);
  }

  public postAlumni(alumni: Alumni){
    return this.ExecutePost('/alumni',alumni);
  }

  public login(userData: User){
    return this.ExecutePost('/alumni/login',userData);
  }

  public getAlumniByid(id: any){
    return this.ExecuteGet('/alumni/'+ id);

  }
  public updateProfile(id: any, alumni: Alumni){
    return this.ExecutePut('/alumni/'+ id, alumni);

  }
}

