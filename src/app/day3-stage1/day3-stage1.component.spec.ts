import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Stage1Component } from './day3-stage1.component';

describe('Day3Stage1Component', () => {
  let component: Day3Stage1Component;
  let fixture: ComponentFixture<Day3Stage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3Stage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Stage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
