import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5Stage1Component } from './day5-stage1.component';

describe('Day5Stage1Component', () => {
  let component: Day5Stage1Component;
  let fixture: ComponentFixture<Day5Stage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day5Stage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5Stage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
