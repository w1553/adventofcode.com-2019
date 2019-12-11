import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6Stage2Component } from './day6-stage2.component';

describe('Day6Stage2Component', () => {
  let component: Day6Stage2Component;
  let fixture: ComponentFixture<Day6Stage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day6Stage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6Stage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
