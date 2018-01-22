import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Employee } from '../../Models/Employee';
import { EmployeeService } from '../../Services/Employee/employee.service';
import { Content } from '../../Configurations/Constant/content-variable.enum';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeeList: Employee[];
  title: string;

  constructor(private _employeeService: EmployeeService, private _employeeModalService: NgbModal) { }

  ngOnInit() {
    this.title = Content.EMPLOYEE_TITLE;
    this._employeeService.GetEmployeeList().subscribe(result =>
    this.employeeList = result
    );
  }

  open(content) {
    this._employeeModalService.open(content);
  }

}
