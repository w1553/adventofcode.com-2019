import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Stage2Component } from './day4-stage2.component';

describe('Day4Stage2Component', () => {
  let component: Day4Stage2Component;
  let fixture: ComponentFixture<Day4Stage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day4Stage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4Stage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
