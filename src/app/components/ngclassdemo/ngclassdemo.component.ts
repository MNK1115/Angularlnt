import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclassdemo',
  template: `<h4>NgStyle</h4>
  <ul *ngFor="let person of people">
    <li [ngStyle]="{'color':getColor(person.country)}"> {{ person.name }} ({{ person.country }}) (1)
    </li>
  </ul>
   `
  })  

export class NgclassdemoComponent implements OnInit {
  getColor(country) { (2)
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
