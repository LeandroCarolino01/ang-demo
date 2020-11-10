import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[];

  constructor() {}



  ngOnInit() {
    this.employees = [
      { code: 'Emp1', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/01/1988' },
      { code: 'Emp2', name: 'Brad', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/01/1988' },
      { code: 'Emp3', name: 'Mark', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/01/1988' },
      { code: 'Emp4', name: 'Jessica', gender: 'Female', annualSalary: 5500, dateOfBirth: '25/01/1988' }
    ]
  }

}
