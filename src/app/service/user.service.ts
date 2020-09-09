import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTable } from '../Model/UserTable';

@Injectable({
  providedIn: 'root'
})


export class UserService {
httpOptions ={ headers:new HttpHeaders({
  'Content-type':'application/json'
})
}
  baseURL: string = "http://localhost:3000/users";
  
  constructor(private _http: HttpClient) { }

  //Get All the Users
  getAllUsers() {
    return this._http.get<UserTable[]>(this.baseURL);
  }

  addUser(user:UserTable){
    return this._http.post<UserTable>(this.baseURL,JSON.stringify(user),this.httpOptions)
  }

}
