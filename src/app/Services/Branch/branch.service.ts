import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { ApiController } from '../../Configurations/Constant/api-controller.enum';
import { Branch } from '../../Models/Branch';


@Injectable()
export class BranchService {

  private hostDomain = ApiController.HOST_DOMAIN;
  private branch: Branch;
  private branchList: Array<Branch> = [];
  constructor(private _http: Http) { }

  getBranchList(): Observable<Branch[]> {
      return this._http.get(this.hostDomain + ApiController.GET_BRANCH_LIST)
                      .map((res: Response) => {
                        this.branchList = [];
                        res.json().forEach(element => {
                          this.branch = new Branch();
                          this.branch.Id = element.Id;
                          this.branch.Location = element.Description;
                          this.branch.Address = element.Address;
                          this.branch.Name = element.Name;
                          this.branch.Phone = element.Phone;
                          this.branch.LocationCode = element.BranchCode;
                          this.branchList.push(this.branch);
                        });
                        return this.branchList;
                      });
  }

  deleteBranch(branchId) {
    this._http.post(this.hostDomain + ApiController.DELETE_BRANCH  + branchId, branchId)
    .subscribe(res => {window.location.reload(); });
  }
}
