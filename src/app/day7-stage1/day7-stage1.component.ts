import { Component, OnInit } from '@angular/core';
import { IntCodeComputer } from '../intcode.class';

@Component({
  selector: 'app-day7-stage1',
  templateUrl: './day7-stage1.component.html',
  styleUrls: ['./day7-stage1.component.css']
})
export class Day7Stage1Component implements OnInit {
  public testInput = '3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0';

  public testArray: number[] = [];

  public output: number;

  constructor() {}

  ngOnInit() {}

  run() {
    if (this.testInput === '') {
      return;
    }
    this.testArray = this.testInput.split(',').map(value => {
      return parseInt(value, 10);
    });

    this.runCode(this.testArray);
  }

  runCode(code: number[]) {

    const sequences: Array<Array<number>> = [];

    const aOptions = [0, 1, 2, 3, 4];

    aOptions.forEach(aValue => {
      const bOptions = [ ...aOptions].filter(a => a !== aValue);

      bOptions.forEach(bValue => {
        const cOptions = [ ...bOptions].filter(b => b !== bValue);

        cOptions.forEach(cValue => {
          const dOptions = [ ...cOptions].filter(c => c !== cValue);

          dOptions.forEach(dValue => {
            const eOptions = [ ...dOptions].filter(d => d !== dValue);

            sequences.push([aValue, bValue, cValue, dValue, eOptions[0]]);

          });
        });
      });

    });

    const power: number[] = [];

    sequences.forEach(sequence => {

      const ampOutA = new IntCodeComputer(code).withInput([sequence[0], 0]).execute().pop();
      const ampOutB = new IntCodeComputer(code).withInput([sequence[1], ampOutA ]).execute().pop();
      const ampOutC = new IntCodeComputer(code).withInput([sequence[2], ampOutB ]).execute().pop();
      const ampOutD = new IntCodeComputer(code).withInput([sequence[3], ampOutC ]).execute().pop();
      const ampOutE = new IntCodeComputer(code).withInput([sequence[4], ampOutD ]).execute().pop();

      power.push(ampOutE);

    });

    power.sort( (a, b) => b - a);
    this.output = power[0];

    // this.output = new IntCodeComputer(code).withInput(input).execute().pop().toString();
  }
}
