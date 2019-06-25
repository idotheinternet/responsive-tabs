import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  level1: object[] = [
    {
      label: 'Compliance',
      isDynamic: false,
      active: false
    }
];
  level2: object[] = [{
    label: 'Summary',
    isDynamic: false,
    active: true
  }]
}
