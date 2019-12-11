import { Component, OnInit } from "@angular/core";
import { IntCodeComputer } from "../intcode.class";

@Component({
  selector: "app-day7-stage2",
  templateUrl: "./day7-stage2.component.html",
  styleUrls: ["./day7-stage2.component.css"]
})
export class Day7Stage2Component implements OnInit {
  public testInput = "3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0";

  public testArray: number[] = [];

  public output: number;

  constructor() {}

  ngOnInit() {}

  run() {
    if (this.testInput === "") {
      return;
    }
    this.testArray = this.testInput.split(",").map(value => {
      return parseInt(value, 10);
    });

    this.runCode(this.testArray);
  }

  runCode(code: number[]) {
    const sequences: Array<Array<number>> = [];

    const aOptions = [5, 6, 7, 8, 9];

    aOptions.forEach(aValue => {
      const bOptions = [...aOptions].filter(a => a !== aValue);

      bOptions.forEach(bValue => {
        const cOptions = [...bOptions].filter(b => b !== bValue);

        cOptions.forEach(cValue => {
          const dOptions = [...cOptions].filter(c => c !== cValue);

          dOptions.forEach(dValue => {
            const eOptions = [...dOptions].filter(d => d !== dValue);

            sequences.push([aValue, bValue, cValue, dValue, eOptions[0]]);
          });
        });
      });
    });

    const max = sequences.reduce((acc, n) => {
      const ampA = new IntCodeComputer(code);
      ampA.pushInput(n[0]);
      const iterA = ampA.iter();
      const ampB = new IntCodeComputer(code);
      ampB.pushInput(n[1]);
      const iterB = ampB.iter();
      const ampC = new IntCodeComputer(code);
      ampC.pushInput(n[2]);
      const iterC = ampC.iter();
      const ampD = new IntCodeComputer(code);
      ampD.pushInput(n[3]);
      const iterD = ampD.iter();
      const ampE = new IntCodeComputer(code);
      ampE.pushInput(n[4]);
      const iterE = ampE.iter();
      let someHalt = false;
      let prev = 0;
      do {
        ampA.pushInput(prev);
        const resA = iterA.next().value as number;
        ampB.pushInput(resA);
        const resB = iterB.next().value as number;
        ampC.pushInput(resB);
        const resC = iterC.next().value as number;
        ampD.pushInput(resC);
        const resD = iterD.next().value as number;
        ampE.pushInput(resD);
        const resE = iterE.next().value as number;
        someHalt =
          ampA.isHalt() ||
          ampB.isHalt() ||
          ampC.isHalt() ||
          ampD.isHalt() ||
          ampE.isHalt();
        if (resE !== undefined) {
          prev = resE;
        }
      } while (!someHalt);
      return prev > acc ? prev : acc;
    }, 10);

    this.output = max;
  }
}
