import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Route } from '../../Configurations/Constant/route.enum';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  tinySize = false;
  routes = Route;

  constructor() { }

  ngOnInit() {
    const initialSize = window.innerWidth;
    this.checkBrowserSize(initialSize);
  }

  onResize(event) {
    this.checkBrowserSize(event.target.innerWidth);
  }

  private checkBrowserSize(width) {
    if ( width < 993 ) {
        this.tinySize = true;
    } else {
      this.tinySize = false;
    }
  }
}
