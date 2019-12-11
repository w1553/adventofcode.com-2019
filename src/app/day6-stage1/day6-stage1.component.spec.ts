import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Stage1Component } from './day6-stage1.component';

describe('Day6Stage1Component', () => {
  let component: Day6Stage1Component;
  let fixture: ComponentFixture<Day6Stage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day6Stage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6Stage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
