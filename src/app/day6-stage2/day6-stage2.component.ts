import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6-stage2',
  templateUrl: './day6-stage2.component.html',
  styleUrls: ['./day6-stage2.component.css']
})
export class Day6Stage2Component implements OnInit {
  public input = '';
  public output = '';

  public counter = 0;

  public orbits: string[];

  constructor() {}

  ngOnInit() {}

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

    const toYou = this.getPathTo('YOU', 'COM', NameMap, []);
    const toSanta = this.getPathTo('SAN', 'COM', NameMap, []);

    console.log(toYou);
    console.log(toSanta);

    const commonPoint = this.getCommonPoint(toYou, toSanta);
    console.log(commonPoint);

    this.output = ((toSanta.length + toYou.length) - (commonPoint.depth * 2) - 4).toString();
  }


  getPathTo(
    toFind: string,
    s: string,
    map: Map<string, string[]>,
    path: { name: string; depth: number }[]
  ): { name: string; depth: number }[] {

    if (map.has(s)) {

      const localPath = JSON.parse(JSON.stringify(path));
      localPath.push({ name: s, depth: localPath.length});

      const orb = map.get(s);

      if (s === toFind) {
        return localPath;
      } else if ( orb.length === 0 && s !== toFind) {
        return null;
      } else {
        let ret: Array<{ name: string; depth: number }> = null;

        orb.forEach(orbiting => {

          const p = this.getPathTo(toFind, orbiting, map, localPath);

          if (p !== null) {
            ret = p;
            return ret;
          }
        });

        return ret;

      }
    }

    return null;
  }

  getCommonPoint(
    path1: { name: string; depth: number }[],
    path2: { name: string; depth: number }[]
  ) {
    const commonPoints =  path1.filter(value => {
      let ret = false;
      path2.forEach(element => {
        if ( element.name === value.name ) {
          ret = true;
          return;
        }
      });
      return ret;
    });

    console.log(commonPoints);
    commonPoints.sort( (a, b) => b.depth - a.depth );
    return commonPoints[0];
  }
}
