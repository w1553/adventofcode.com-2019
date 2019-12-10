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

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day1Stage2Component,
    Day2Stage1Component,
    Day2Stage2Component,
    Day3Stage1Component,
    Day3Stage2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
