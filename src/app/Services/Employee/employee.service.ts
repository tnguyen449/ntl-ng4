import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiController } from '../../Configurations/Constant/api-controller.enum';
import { Employee } from '../../Models/Employee';


@Injectable()
export class EmployeeService {

  private employeeList: Array<Employee> = [];
  private employee: Employee;

  constructor(private _http: Http) { }

  GetEmployeeList(): Observable<Employee[]> {
    return this._http.get(ApiController.HOST_DOMAIN + ApiController.GET_EMPLOYEE_LIST)
                      .map((res: Response) => {
                        this.employeeList = [];
                        res.json().forEach(element => {
                          this.employee = new Employee();
                          this.employee.Id = element.EmpId;
                          this.employee.Name = element.FullName;
                          this.employee.Birthday = element.DOB;
                          this.employee.Phone = element.Phone;
                          this.employee.CreatedDate = element.CreatedDate;
                          this.employeeList.push(this.employee);
                        });
                        return this.employeeList;
                      });
  }
}
