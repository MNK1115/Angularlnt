import { Component, OnInit } from '@angular/core';
import{EventService} from 'src/app/service/event.service';
import{Event} from 'src/app/Model/event' 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  events: Event[] ;
 

  constructor( private eventService: EventService) { 
   
  }

  ngOnInit(): void {
    this.events=this.eventService.getEvents();
  }
  //delete function

  deleteevent(e:Event){
    this.eventService.deleteevent(e);
  }
  addEvent(eventname:string,description:string,speaker:string){
    this.eventService.addEvent(eventname,description,speaker);
  }

}
