import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Stage1Component } from './day2-stage1.component';

describe('Day2Stage1Component', () => {
  let component: Day2Stage1Component;
  let fixture: ComponentFixture<Day2Stage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2Stage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Stage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
