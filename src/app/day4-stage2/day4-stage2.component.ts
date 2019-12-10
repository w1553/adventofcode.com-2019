import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day4-stage2',
  templateUrl: './day4-stage2.component.html',
  styleUrls: ['./day4-stage2.component.css']
})
export class Day4Stage2Component implements OnInit {
  public testInput1 = 134564;
  public testInput2 = 585159;
  public output = 0;

  constructor() {}

  ngOnInit() {}

  runTest() {
    this.output = 0;

    const found = [];

    for (let i = this.testInput1; i <= this.testInput2; i++) {
      if (this.checkValidity(i)) {
        found.push(i);
      }
    }

    found.forEach(value => {
        this.output++;
    });
  }

  checkValidity(input: number) {
    const numbers = input
      .toString()
      .split('')
      .map(value => {
        return parseInt(value, 10);
      });

    return this.doubleFound(numbers) && this.goesUpwards(input.toString()) && this.notMoreThanTwoOfANumber(numbers);
  }

  doubleFound(numbers: number[]) {
    let doublesFound = false;
    let lastNumber = -1;

    numbers.forEach(value => {
    if (lastNumber === value) {
      doublesFound = true;
    }

    lastNumber = value;
  });
    return doublesFound;
  }

  goesUpwards(numbers: string): boolean {
    return numbers.match(/^0*1*2*3*4*5*6*7*8*9*$/) !== null;
  }

  notMoreThanTwoOfANumber(numbers: number[]): boolean {
    const amount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const matrix = [false, false, false, false, false, false, false, false, false, false];
    numbers.forEach(element => {
      amount[element]++;
      if (amount[element] === 2) {
        matrix[element] = true;
      } else {
        matrix[element] = false;
      }
    });
    return matrix.includes(true);
  }
}
