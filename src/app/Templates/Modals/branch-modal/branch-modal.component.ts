import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-branch-modal',
  templateUrl: './branch-modal.component.html',
  styleUrls: ['./branch-modal.component.scss']
})
export class BranchModalComponent {

  constructor(private branchModalService: NgbModal) { }

 open() {
   this.branchModalService.open('Open Modal');
 }

}
