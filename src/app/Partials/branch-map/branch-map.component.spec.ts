import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchMapComponent } from './branch-map.component';

describe('BranchMapComponent', () => {
  let component: BranchMapComponent;
  let fixture: ComponentFixture<BranchMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
