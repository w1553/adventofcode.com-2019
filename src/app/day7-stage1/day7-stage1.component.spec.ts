import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Stage1Component } from './day7-stage1.component';

describe('Day7Stage1Component', () => {
  let component: Day7Stage1Component;
  let fixture: ComponentFixture<Day7Stage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day7Stage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7Stage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
