import { Component, OnInit } from '@angular/core';

import { Content } from '../../Configurations/Constant/content-variable.enum';

@Component({
  selector: 'app-branch-map',
  templateUrl: './branch-map.component.html',
  styleUrls: ['./branch-map.component.scss']
})
export class BranchMapComponent implements OnInit {
  mapUrl: string;

  constructor() { }

  ngOnInit() {
    this.mapUrl = Content.GOOGLE_MAP_URL;
  }

}
