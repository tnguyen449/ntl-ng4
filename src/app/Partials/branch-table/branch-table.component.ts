import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Branch } from '../../Models/Branch';

@Component({
  selector: 'app-manage-section',
  templateUrl: './branch-table.component.html',
  styleUrls: ['./branch-table.component.scss']
})
export class BranchTableComponent implements OnInit {

  @Input()title: String;
  @Input()branchList: Branch[];

  @Output()add  = new EventEmitter();
  @Output()deleteBranch = new EventEmitter();

  DeleteBranch(branchId) {
    this.deleteBranch.emit(branchId);
  }

  AddGreeting() {
    this.add.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
