import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7Stage2Component } from './day7-stage2.component';

describe('Day7Stage2Component', () => {
  let component: Day7Stage2Component;
  let fixture: ComponentFixture<Day7Stage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day7Stage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day7Stage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
