import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Stage2Component } from './day2-stage2.component';

describe('Day2Stage2Component', () => {
  let component: Day2Stage2Component;
  let fixture: ComponentFixture<Day2Stage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2Stage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Stage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
