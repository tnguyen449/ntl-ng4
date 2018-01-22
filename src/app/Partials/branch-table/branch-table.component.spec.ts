import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSectionComponent } from './branch-table.component';

describe('ManageSectionComponent', () => {
  let component: ManageSectionComponent;
  let fixture: ComponentFixture<ManageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
