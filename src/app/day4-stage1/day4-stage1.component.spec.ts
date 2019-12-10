import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Stage1Component } from './day4-stage1.component';

describe('Day4Stage1Component', () => {
  let component: Day4Stage1Component;
  let fixture: ComponentFixture<Day4Stage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day4Stage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4Stage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
