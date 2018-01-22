import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBolComponent } from './search-bol.component';

describe('SearchBolComponent', () => {
  let component: SearchBolComponent;
  let fixture: ComponentFixture<SearchBolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
