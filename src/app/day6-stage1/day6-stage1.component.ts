import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6-stage1',
  templateUrl: './day6-stage1.component.html',
  styleUrls: ['./day6-stage1.component.css']
})
export class Day6Stage1Component implements OnInit {

  public input = '';
  public output = '';

  public counter = 0;

  public orbits: string[];

  constructor() { }

  ngOnInit() {
  }

  run() {
    this.orbits = [];
    this.counter = 0;
    console.log(this.input);
    this.orbits = this.input.split('\n');
    console.log(this.orbits);

    const Names: string[] = [];
    this.orbits.map(value => {
      value.split(')').forEach(value2 => {
        Names.push(value2);
      });
    });
    console.log(Names);
    const NameSet = new Set<string>();
    Names.forEach(value => NameSet.add(value));

    console.log(NameSet);

    const NameMap = new Map<string, string[]>();
    NameSet.forEach(value => NameMap.set(value, []));

    this.orbits.forEach(value => {
      const orb = value.split(')');
      const a = NameMap.get(orb[0]);
      a.push(orb[1]);
      NameMap.set(orb[0], a);
    });

    console.log(NameMap);
    this.countOrbits('COM', 0, NameMap);

    this.output = this.counter + '';

  }


  countOrbits(s: string, c: number = 0, map: Map<string, string[]>) {
    const step = c;
    if (map.has(s)) {
      const orb = map.get(s);
      if (orb.length === 0) {
        console.log('string ' + s, 'count' + c);
        this.counter += c;
        return;
      }
      console.log(orb);
      console.log(step, s);
      orb.forEach(orbiting => {
        this.countOrbits(orbiting, step + 1, map);
      });
      console.log('string ' + s, 'count' + c);
      this.counter += c;
    }

  }
}
