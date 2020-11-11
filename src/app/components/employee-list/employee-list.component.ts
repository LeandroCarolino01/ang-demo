import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[];

  selectedEmployeeCountRadionButton: string = 'All';

  constructor() {}



  ngOnInit() {
    this.employees = [
      { code: 'Emp1', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/01/1988' },
      { code: 'Emp2', name: 'Brad', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/01/1988' },
      { code: 'Emp3', name: 'Mark', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/01/1988' },
      { code: 'Emp4', name: 'Jessica', gender: 'Female', annualSalary: 5500, dateOfBirth: '25/01/1988' },
      { code: 'Emp5', name: 'Jessica', gender: 'Female', annualSalary: 5500, dateOfBirth: '25/01/1988' },

    ]
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string):void {
    this.selectedEmployeeCountRadionButton = selectedRadioButtonValue;
  }

  getTotalEmployeeCount(): number{
    return this.employees.length;
  }

  getTotalMaleEmployeeCount():number {
    return this.employees.filter(e => e.gender === "Male").length;
  }

  getTotalFemaleEmployeeCount():number {
    return this.employees.filter(e => e.gender === "Female").length;
  }

}
