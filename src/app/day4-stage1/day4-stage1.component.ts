import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day4-stage1',
  templateUrl: './day4-stage1.component.html',
  styleUrls: ['./day4-stage1.component.css']
})
export class Day4Stage1Component implements OnInit {
  public testInput1 = 134564;
  public testInput2 = 585159;
  public output = 0;

  constructor() {}

  ngOnInit() {}

  runTest() {
    this.output = 0;

    for (let i = this.testInput1; i <= this.testInput2; i++) {
      let doublesFound = false;
      let goesUpwards = true;
      let lastNumber = -1;

      const numbers = i
        .toString()
        .split('')
        .map(value => {
          return parseInt(value, 10);
        });

      numbers.forEach(value => {
        if (lastNumber > value) {
          goesUpwards = false;
        }

        if (lastNumber === value) {
          doublesFound = true;
        }

        lastNumber = value;
      });
      if (doublesFound && goesUpwards) {
        this.output++;
      }
    }
  }
}
