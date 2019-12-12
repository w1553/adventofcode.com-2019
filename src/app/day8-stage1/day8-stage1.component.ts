import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day8-stage1',
  templateUrl: './day8-stage1.component.html',
  styleUrls: ['./day8-stage1.component.scss']
})
export class Day8Stage1Component implements OnInit {
  testInput = '123456789012';
  height = 2;
  width = 3;
  output: number;
  image: Image;
  toRender: number[][];

  constructor() {}

  ngOnInit() {}

  run() {
    const input = this.testInput.split('').map(value => parseInt(value, 10));

    this.image = new Image(this.width, this.height, input);
    console.log(this.image);

    const layer = this.image.getLayerWithFewest(0);
    console.log(layer);
    this.output = layer.getAmountInLayer(1) * layer.getAmountInLayer(2);
    this.toRender = this.image.renderImage();
  }
}

class Image {
  public Layers: Layer[];

  constructor(public width: number, public height: number, pixels: number[]) {
    pixels = [...pixels];
    this.Layers = [];

    const layerArrays = [];
    while (pixels.length) {
      layerArrays.push(pixels.splice(0, width * height));
    }
    layerArrays.forEach(layer => {
      this.Layers.push(new Layer(width, height, layer));
    });
  }

  getLayerWithFewest(n: number) {
    let Lay: Layer = null;
    let zeros: number = null;

    this.Layers.forEach(layer => {
      const lZeros = layer.getAmountInLayer(n);
      if (zeros === null) {
        zeros = lZeros;
      }
      if (zeros > lZeros ) {
        zeros = lZeros;
        Lay = layer;
      }
    });
    return Lay;
  }

  renderImage() {
    const Rows: Array<Array<number>> = [];
    for (let w = 0; w < this.height; w++) {
      Rows.push([]);
      for (let h = 0; h < this.width; h++) {
        let pixel = 2;
        this.Layers.forEach(layer => {
          if (pixel === 2) {
            pixel = layer.Row[w][h];
          }
        });
        Rows[w].push(pixel);
        }
    }
    return Rows;
  }

}

class Layer {
  public Row: Array<Array<number>> = [];
  private amounts: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(width: number, height: number, pixels: number[]) {
    const pixelIterrator = pixels.entries();

    for (let w = 0; w < height; w++) {
      this.Row.push([]);
      for (let h = 0; h < width; h++) {
        const next = pixelIterrator.next();
        if (!next.done) {
          const val = next.value[1];
          this.Row[w].push(val);
          this.amounts[val]++;
        }
      }
    }
  }

  getAmountInLayer(n: number) {
    return this.amounts[n];
  }
}
