import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3Stage2Component } from './day3-stage2.component';

describe('Day3Stage2Component', () => {
  let component: Day3Stage2Component;
  let fixture: ComponentFixture<Day3Stage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day3Stage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Stage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
