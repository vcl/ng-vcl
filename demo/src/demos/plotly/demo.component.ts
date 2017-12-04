import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class PlotlyDemoComponent {

  plotId = 'myDiv1';
  plotClass = 'customClass';

  data: any = [{
    x: ['giraffes', 'example', 'orangutans', 'monkeys', 'example2'],
    y: [20, 0, 14, 23, 0],
    name: 'SF Zoo',
    type: 'bar',
    marker: {
      color: 'rgb(158,202,225)',
      opacity: 0.6,
      line: {
        color: 'rbg(8,48,107)',
        width: 1,
        dash: 'dot',
      }
    }
  }];

  layout: any = {
    barmode: 'group'
  };
}
