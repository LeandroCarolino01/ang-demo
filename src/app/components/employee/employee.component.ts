import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  columnSpan: number = 2;
  firstName: string = 'Leandro';
  lastName: string = 'Santos';
  gender: string = 'Male';
  age: number = 20;
  constructor() { }

  ngOnInit() {
  }

}
