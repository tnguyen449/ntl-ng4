import { Component, OnInit, Input } from '@angular/core';

import { bootstrap } from 'bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

import { BranchService } from '../../Services/Branch/branch.service';
import { Branch } from '../../Models/Branch';
import { Content } from '../../Configurations/Constant/content-variable.enum';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  title: String;
  branchList: Branch[];

  constructor(private _branchService: BranchService) { }

  ngOnInit() {
    this.title = Content.BRANCH_TITLE;
    this._branchService.getBranchList().subscribe(result =>
      this.branchList = result
    );
  }

  deleteBranch(event) {
    this._branchService.deleteBranch(event);
  }
}
