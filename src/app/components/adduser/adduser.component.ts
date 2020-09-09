import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators}  from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { UserTable } from 'src/app/Model/UserTable';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  addUser: FormGroup;
  constructor(private formBuilder:FormBuilder,private service:UserService) { }

  ngOnInit(): void {
    this.addUser=this.formBuilder.group({
      id:[],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
  }

  OnSubmit(obj:UserTable)
  {
    console.log(obj);
    this.service.addUser(obj).subscribe(data=>{
      console.log(data)
      alert("User Added Successfully");
    })

  }


}
