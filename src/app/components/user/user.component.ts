import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserTable } from 'src/app/Model/UserTable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _userService: UserService,private router:Router) { }
 user:UserTable[];
  ngOnInit(): void
   {
  this._userService.getAllUsers()
      .subscribe(data => {this.user = data;})
    }
    addUser(){
      this.router.navigate(['adduser']);
    }
    deleteUser(object:UserTable){
      let index= this.user.indexOf(object);
     this.user.splice(index,1);
    }
    
}
