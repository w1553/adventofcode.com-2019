import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { Day1Stage2Component } from './day1-stage2/day1-stage2.component';
import { Day2Stage1Component } from './day2-stage1/day2-stage1.component';
import { Day2Stage2Component } from './day2-stage2/day2-stage2.component';
import { Day3Stage1Component } from './day3-stage1/day3-stage1.component';
import { Day3Stage2Component } from './day3-stage2/day3-stage2.component';
import { Day4Stage1Component } from './day4-stage1/day4-stage1.component';
import { Day4Stage2Component } from './day4-stage2/day4-stage2.component';
import { Day5Stage1Component } from './day5-stage1/day5-stage1.component';
import { Day6Stage1Component } from './day6-stage1/day6-stage1.component';
import { Day6Stage2Component } from './day6-stage2/day6-stage2.component';
import { Day7Stage1Component } from './day7-stage1/day7-stage1.component';
import { Day7Stage2Component } from './day7-stage2/day7-stage2.component';
import { Day8Stage1Component } from './day8-stage1/day8-stage1.component';

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day1Stage2Component,
    Day2Stage1Component,
    Day2Stage2Component,
    Day3Stage1Component,
    Day3Stage2Component,
    Day4Stage1Component,
    Day4Stage2Component,
    Day5Stage1Component,
    Day6Stage1Component,
    Day6Stage2Component,
    Day7Stage1Component,
    Day7Stage2Component,
    Day8Stage1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
