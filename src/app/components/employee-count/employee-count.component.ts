import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  selectedRadioButtonValue: string = 'All';

  @Output()
  countRadionButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  all: number = 10;
  @Input()
  male: number = 5;
  @Input()
  female: number = 5;

  constructor() { }

  ngOnInit() {
  }

  onRadioButtonSelectionChange() {
    this.countRadionButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue)
  }

}
