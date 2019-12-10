import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1Stage2Component } from './day1-stage2.component';

describe('Day1Stage2Component', () => {
  let component: Day1Stage2Component;
  let fixture: ComponentFixture<Day1Stage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day1Stage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1Stage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
