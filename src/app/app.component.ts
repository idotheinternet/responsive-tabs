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
    }, 
    {
      label: 'Dashboard',
      isDynamic: true,
      active: false
    },
    {
      label: 'Installer 1234',
      isDynamic: true,
      active: true
    },
    {
      label: 'Installer 56787',
      isDynamic: true,
      active: false
    }
];
  level2: object[] = [{
    label: 'Summary',
    isDynamic: false,
    active: true
  }]
}
