import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  Fname:string ='Nikhil';
  Lname:string='Maroju'; 
  Age:number=21;
  Salary:number=45000;


  constructor() { }

  ngOnInit(): void {
  }

}
