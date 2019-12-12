import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8Stage1Component } from './day8-stage1.component';

describe('Day8Stage1Component', () => {
  let component: Day8Stage1Component;
  let fixture: ComponentFixture<Day8Stage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day8Stage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day8Stage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
